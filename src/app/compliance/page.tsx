'use client';

import React, { useState, useEffect } from 'react';
import { 
  Upload, FileText, CheckCircle2, AlertTriangle, XCircle, Loader2, 
  ArrowRight, BookOpen, AlertCircle, FileCode, Copy, Check, 
  Download, Sparkles, Trash2, Edit3, Save, X, Search, FolderOpen, Shield,
  ArrowLeft, ChevronDown, ChevronUp
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import dynamic from 'next/dynamic';

const PdfPreview = dynamic(() => import('@/components/PdfPreview'), { ssr: false });

interface ComplianceCheck {
  title: string;
  status: 'pass' | 'warning' | 'fail';
  description: string;
  reference?: string;
}

interface BOMItem {
  item: string;
  quantity: string;
  specification: string;
  category: string;
}

interface ComplianceReport {
  status: 'compliant' | 'warnings' | 'non-compliant';
  summary: string;
  checks: ComplianceCheck[];
  bom: BOMItem[];
}

interface ComplianceResult {
  id: string; // Saved archive document ID
  fileName: string;
  fileType: string;
  customerNumber?: string | null;
  salesOrderNumber?: string | null;
  customerName?: string | null;
  matchedDocumentsCount: number;
  matchedDocuments: Array<{ id: string; title: string; filePath: string }>;
  report: ComplianceReport;
  parserMetadata?: {
    parserUsed: string;
    pages?: number;
    duration?: number;
    creditsUsed?: number;
    studioLink?: string;
  };
}

export default function CompliancePage() {
  // Upload and results state
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [statusStep, setStatusStep] = useState<string>('');
  const [result, setResult] = useState<ComplianceResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Collapsible checks state
  const [expandedChecks, setExpandedChecks] = useState<Record<number, boolean>>({});

  const toggleCheck = (idx: number) => {
    setExpandedChecks(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Preview & Tracking State
  const [selectedUploadedDoc, setSelectedUploadedDoc] = useState<any | null>(null);
  const [selectedFileIdx, setSelectedFileIdx] = useState<number>(0);

  // Archive state
  const [archive, setArchive] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [editingCustomerName, setEditingCustomerName] = useState('');
  const [editingCustomerNumber, setEditingCustomerNumber] = useState('');
  const [editingSalesOrderNumber, setEditingSalesOrderNumber] = useState('');

  // Upload metadata state
  const [customerName, setCustomerName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [salesOrderNumber, setSalesOrderNumber] = useState('');

  // SolidWorks macro generation state
  const [macroLoading, setMacroLoading] = useState(false);
  const [macroResult, setMacroResult] = useState<{ code: string; explanation: string; fileName: string } | null>(null);
  const [macroError, setMacroError] = useState<string | null>(null);
  const [macroCopied, setMacroCopied] = useState(false);
  const [macroSource, setMacroSource] = useState<'reducto' | 'raw'>('reducto');
  const [selectedSolution, setSelectedSolution] = useState<string>('auto');
  const [customSolution, setCustomSolution] = useState<string>('');

  // Load archive list on mount, when search changes, and poll every 5 seconds to keep all users in sync
  useEffect(() => {
    fetchArchive(searchQuery);

    const interval = setInterval(() => {
      fetchArchive(searchQuery);
    }, 5000);

    return () => clearInterval(interval);
  }, [searchQuery]);

  useEffect(() => {
    setSelectedFileIdx(0);
  }, [selectedUploadedDoc]);

  const fetchArchive = async (query = '') => {
    try {
      const res = await fetch(`/api/archive?q=${encodeURIComponent(query)}&t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setArchive(data);
        return data;
      }
    } catch (err) {
      console.error("Failed to load archive:", err);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const selected = Array.from(e.dataTransfer.files);
      setFiles(selected);
      setResult(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selected = Array.from(e.target.files);
      setFiles(selected);
      setResult(null);
    }
  };

  const runComplianceCheck = async () => {
    if (files.length === 0) return;

    setUploading(true);
    setError(null);
    setResult(null);
    setSelectedUploadedDoc(null);
    setSelectedFileIdx(0);
    setStatusStep('Läser in filer...');

    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append('file', file);
      formData.append(`originalFileName_${index}`, file.name);
    });
    const solutionToSend = selectedSolution === 'custom' ? customSolution.trim() : selectedSolution;
    formData.append('selectedSolution', solutionToSend);
    formData.append('customerName', customerName.trim());
    formData.append('customerNumber', customerNumber.trim());
    formData.append('salesOrderNumber', salesOrderNumber.trim());

    try {
      setTimeout(() => {
        setStatusStep('Tolkar fil via API (Reducto/Gemini)...');
      }, 1200);

      setTimeout(() => {
        setStatusStep('Söker efter gällande MCF-regler...');
      }, 3000);

      setTimeout(() => {
        setStatusStep('Jämför specifikationer & beräknar material (BOM)...');
      }, 5000);

      const res = await fetch('/api/compliance', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        let errorMessage = 'Något gick fel vid regelkontrollen.';
        try {
          const contentType = res.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errData = await res.json();
            errorMessage = errData.error || errorMessage;
          } else {
            errorMessage = `Serverfel (status ${res.status}).`;
          }
        } catch (e) {
          errorMessage = `Serverfel (status ${res.status}).`;
        }
        throw new Error(errorMessage);
      }

      const data = await res.json();
      setCustomerName('');
      setCustomerNumber('');
      setSalesOrderNumber('');
      
      if (data.status === 'pending') {
        setResult(null);
        setSelectedUploadedDoc(null);
        fetchArchive(searchQuery);
        setFiles([]);
        setUploading(false);
        setStatusStep('');
      } else {
        setResult(data);
        fetchArchive(searchQuery).then(archivedDocs => {
          if (archivedDocs && Array.isArray(archivedDocs)) {
            const found = archivedDocs.find((d: any) => d.id === data.id);
            if (found) {
              setSelectedUploadedDoc(found);
              setSelectedFileIdx(0);
            }
          }
        });
        setMacroResult(null);
        setMacroError(null);
        setUploading(false);
        setStatusStep('');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      setUploading(false);
      setStatusStep('');
    }
  };

  const saveDocumentMetadata = async (id: string) => {
    if (!editingName.trim()) return;
    try {
      const res = await fetch(`/api/archive/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          customName: editingName,
          customerNumber: editingCustomerNumber,
          salesOrderNumber: editingSalesOrderNumber,
          customerName: editingCustomerName
        })
      });
      if (res.ok) {
        setEditingId(null);
        fetchArchive(searchQuery);
        if (result && result.id === id) {
          setResult((prev: any) => prev ? { 
            ...prev, 
            fileName: editingName,
            customerName: editingCustomerName,
            customerNumber: editingCustomerNumber,
            salesOrderNumber: editingSalesOrderNumber
          } : null);
        }
        if (selectedUploadedDoc && selectedUploadedDoc.id === id) {
          setSelectedUploadedDoc((prev: any) => prev ? { 
            ...prev, 
            customName: editingName,
            customerNumber: editingCustomerNumber,
            salesOrderNumber: editingSalesOrderNumber,
            customerName: editingCustomerName
          } : null);
        }
      }
    } catch (err) {
      console.error("Failed to save metadata:", err);
    }
  };

  const deleteDocument = async (id: string) => {
    if (!confirm("Är du säker på att du vill radera detta dokument från arkivet?")) return;
    try {
      const res = await fetch(`/api/archive/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchArchive(searchQuery);
        if (result && result.id === id) {
          setResult(null);
        }
      }
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };

  const loadArchiveDocument = (doc: any) => {
    // Mark as read/inspected (not new)
    if (doc.isNew) {
      fetch(`/api/archive/${doc.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isNew: false })
      }).then(() => {
        doc.isNew = false;
        setArchive(prev => prev.map(d => d.id === doc.id ? { ...d, isNew: false } : d));
      }).catch(err => console.error("Error marking document as used:", err));
    }

    let parsedChecks = [];
    try {
      parsedChecks = doc.complianceChecks ? JSON.parse(doc.complianceChecks) : [];
    } catch (e) {
      console.error("Failed to parse compliance checks:", e);
    }

    let parsedBom = [];
    try {
      parsedBom = doc.bomJson ? JSON.parse(doc.bomJson) : [];
    } catch (e) {
      console.error("Failed to parse BOM:", e);
    }

    setResult({
      id: doc.id,
      fileName: doc.customName,
      fileType: doc.fileType,
      matchedDocumentsCount: 0,
      matchedDocuments: [],
      report: {
        status: doc.complianceStatus || 'compliant',
        summary: doc.complianceSummary || '',
        checks: parsedChecks,
        bom: parsedBom
      },
      parserMetadata: {
        parserUsed: doc.reductoMarkdown ? 'reducto' : 'pdf-parse'
      }
    });

    setSelectedUploadedDoc(doc);
    setSelectedFileIdx(0);

    setMacroResult(null);
    setMacroError(null);
    setFiles([]); // Clear active staged files since we loaded an archive doc
  };

  const generateSolidWorksMacro = async () => {
    if (!result) return;
    setMacroLoading(true);
    setMacroError(null);
    setMacroResult(null);

    const bomText = result.report.bom.map(b => `- Kategori: ${b.category}, Namn: ${b.item}, Antal: ${b.quantity}, Krav: ${b.specification}`).join('\n');
    const prompt = `Skapa ett komplett SolidWorks-makro (.swb) för att konfigurera eller rita komponenterna från detta underlag: ${result.fileName}.\n\nKonstruktionsbehov från ritning:\n${bomText}\n\nMakrot ska skapa en ny part, rita de viktigaste delarna (t.ex. plåt, bultcirkel eller rörprofil) med rätt dimensioner, och automatiskt lägga till Custom Properties för kvalitetssäkring (t.ex. klass, referens, datum).`;

    try {
      const res = await fetch('/api/macro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          uploadedDocId: result.id,
          sourceType: macroSource
        }),
      });

      if (!res.ok) {
        let errorMessage = 'Fel vid generering av makrot.';
        try {
          const contentType = res.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errData = await res.json();
            errorMessage = errData.error || errorMessage;
          } else {
            errorMessage = `Serverfel (status ${res.status}).`;
          }
        } catch (e) {
          errorMessage = `Serverfel (status ${res.status}).`;
        }
        throw new Error(errorMessage);
      }

      const data = await res.json();
      setMacroResult(data);
      if (typeof window !== 'undefined' && data.id) {
        localStorage.setItem('activeMacroId', data.id);
      }
    } catch (err: any) {
      console.error(err);
      setMacroError(err.message);
    } finally {
      setMacroLoading(false);
    }
  };

  const copyMacroToClipboard = () => {
    if (!macroResult) return;
    // Strip Attribute lines which cause syntax errors when pasted directly into VBA editor window
    const cleanCode = macroResult.code.replace(/^Attribute VB_Name\s*=\s*"[^"]*"\r?\n/gi, '');
    navigator.clipboard.writeText(cleanCode);
    setMacroCopied(true);
    setTimeout(() => setMacroCopied(false), 2000);
  };

  const downloadMacroFile = () => {
    if (!macroResult) return;
    const normalizedCode = macroResult.code.replace(/\r?\n/g, '\r\n');
    const blob = new Blob([normalizedCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = (macroResult.fileName || 'SolidWorksMacro.swb').replace(/\.bas$/i, '.swb');
    link.click();
    URL.revokeObjectURL(url);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'compliant':
        return <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-sm">Godkänd</Badge>;
      case 'warnings':
        return <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 backdrop-blur-sm">Varningar</Badge>;
      case 'non-compliant':
        return <Badge className="bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 backdrop-blur-sm">Avvikelser</Badge>;
      default:
        return null;
    }
  };

  const getCheckStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />;
      case 'fail':
        return <XCircle className="h-5 w-5 text-rose-500 shrink-0" />;
      default:
        return null;
    }
  };

  const renderPreviewCard = () => {
    if (!selectedUploadedDoc) return null;

    let filePaths: string[] = [];
    try {
      filePaths = JSON.parse(selectedUploadedDoc.filePath);
      if (!Array.isArray(filePaths)) {
        filePaths = [selectedUploadedDoc.filePath];
      }
    } catch (e) {
      filePaths = [selectedUploadedDoc.filePath || ''];
    }

    let originalNames: string[] = [];
    try {
      originalNames = JSON.parse(selectedUploadedDoc.originalName);
      if (!Array.isArray(originalNames)) {
        originalNames = [selectedUploadedDoc.originalName];
      }
    } catch (e) {
      originalNames = [selectedUploadedDoc.originalName || ''];
    }

    let fileTypes: string[] = [];
    try {
      fileTypes = JSON.parse(selectedUploadedDoc.fileType);
      if (!Array.isArray(fileTypes)) {
        fileTypes = [selectedUploadedDoc.fileType];
      }
    } catch (e) {
      fileTypes = [selectedUploadedDoc.fileType || ''];
    }

    const activePath = filePaths[selectedFileIdx] || filePaths[0] || '';
    const activeName = originalNames[selectedFileIdx] || originalNames[0] || '';
    const activeType = fileTypes[selectedFileIdx] || fileTypes[0] || '';

    const isPdf = activeType === 'PDF' || activeName.toLowerCase().endsWith('.pdf');
    const isImage = ['PNG', 'JPG', 'JPEG', 'GIF', 'WEBP'].includes(activeType) || 
      /\.(png|jpe?g|gif|webp)$/i.test(activeName);

    return (
      <Card className="glass-card shadow-lg flex flex-col h-[620px] overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start gap-2">
            <div className="min-w-0">
              <CardTitle className="text-sm font-semibold truncate flex items-center gap-1.5 text-slate-900 dark:text-slate-100">
                <FileText className="h-4 w-4 text-blue-500 shrink-0" />
                Förhandsgranskning
              </CardTitle>
              <CardDescription className="text-[11px] dark:text-slate-400 truncate">
                {selectedUploadedDoc.customName}
              </CardDescription>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <a 
                href={`/api/${activePath}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1 px-2 py-1 rounded bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/10"
              >
                Öppna i ny flik ↗
              </a>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 text-slate-450 hover:text-slate-250"
                onClick={() => setSelectedUploadedDoc(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-4 overflow-y-auto min-h-0 flex flex-col items-center justify-center">
          {filePaths.length > 1 && (
            <div className="flex flex-wrap gap-1 mb-3 bg-slate-100/80 dark:bg-slate-900/60 p-1 rounded-lg border border-slate-200 dark:border-slate-800 w-full shrink-0">
              {filePaths.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedFileIdx(idx)}
                  className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all truncate max-w-[150px] ${
                    selectedFileIdx === idx
                      ? 'bg-blue-600 text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-250 dark:hover:bg-slate-800'
                  }`}
                >
                  {originalNames[idx] || `Fil ${idx + 1}`}
                </button>
              ))}
            </div>
          )}

          <div className="w-full h-full min-h-0 flex flex-col justify-center items-center flex-1">
            {isPdf ? (
              <PdfPreview url={`/api/${activePath}`} />
            ) : isImage ? (
              <div className="w-full h-full min-h-[450px] flex items-center justify-center bg-slate-900/50 rounded-md border border-slate-800/80 overflow-hidden">
                <img 
                  src={`/api/${activePath}`}
                  alt={activeName}
                  className="max-w-full max-h-full object-contain rounded-md"
                />
              </div>
            ) : (
              <div className="text-center py-16 text-slate-400 text-xs">
                Visuell förhandsgranskning saknas för detta format ({activeType}).
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="w-full p-4 md:p-6 text-slate-800 dark:text-slate-100 bg-transparent">
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Skyddsprodukter Skyddsrumsarkiv & Regelkontroll</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Ladda upp ritningar, verifiera mot MCF typlösningar och skapa automatiserade CAD-makron.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-12 max-w-7xl mx-auto w-full">
        {/* Left Column: Upload & Archive */}
        <div className="md:col-span-1 lg:col-span-3 space-y-6">
          
          {/* Glassmorphic Upload Card */}
          <Card className="glass-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Upload className="h-5 w-5 text-blue-500" />
                Ladda upp ny ritning
              </CardTitle>
              <CardDescription className="dark:text-slate-400">Ritningsfiler i PDF, Word (.docx) eller bildformat.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg p-5 text-center cursor-pointer hover:border-blue-500 transition-colors flex flex-col items-center justify-center min-h-[160px] bg-slate-55/30 dark:bg-slate-950/20"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.png,.jpg,.jpeg,.gif,.webp"
                  multiple
                />
                <Upload className="h-8 w-8 text-slate-400 mb-2" />
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Släpp dina ritningar här
                </p>
                <p className="text-[10px] text-slate-400 mt-1">eller klicka för att bläddra (välj flera)</p>
              </div>

              {files.length > 0 && (
                <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
                  {files.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 bg-white/50 dark:bg-slate-950/40 rounded-lg border border-white/20 dark:border-slate-850">
                      <FileText className="h-6 w-6 text-blue-500 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-medium truncate text-slate-800 dark:text-slate-200">{file.name}</p>
                        <p className="text-[9px] text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* Metadata Inputs */}
              <div className="space-y-2 pt-2 border-t border-slate-100/50 dark:border-slate-850">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Kundnamn
                  </label>
                  <Input
                    type="text"
                    placeholder="T.ex. Peab AB"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="text-xs p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Kundnummer
                    </label>
                    <Input
                      type="text"
                      placeholder="T.ex. K10023"
                      value={customerNumber}
                      onChange={(e) => setCustomerNumber(e.target.value)}
                      className="text-xs p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Ordernummer
                    </label>
                    <Input
                      type="text"
                      placeholder="T.ex. F45009"
                      value={salesOrderNumber}
                      onChange={(e) => setSalesOrderNumber(e.target.value)}
                      className="text-xs p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>
              </div>

              {files.length > 0 && (!customerName.trim() || !customerNumber.trim() || !salesOrderNumber.trim()) && (
                <div className="flex items-start gap-2 p-2.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] rounded-lg border border-amber-500/20 leading-normal">
                  <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>Varning: Kundnamn, kundnummer och ordernummer är inte fullständigt ifyllda. Du kan fortsätta ändå.</span>
                </div>
              )}

              {/* Solution Selector */}
              <div className="space-y-1.5 pt-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Välj lösning att tolka mot
                </label>
                <select
                  value={selectedSolution}
                  onChange={(e) => setSelectedSolution(e.target.value)}
                  className="w-full text-xs p-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="auto">Automatisk identifiering</option>
                  <option value="T12-102">T12-102 (Lagning av hålighet i skyddsrumsstomme)</option>
                  <option value="T17-102">T17-102 (Ny rörgenomföring i tak)</option>
                  <option value="T17-103">T17-103 (Ny rörgenomföring i vägg)</option>
                  <option value="T17-104">T17-104 (Ny rörgenomföring i golv)</option>
                  <option value="T17-105">T17-105 (Förslutning av outnyttjad rörgenomföring)</option>
                  <option value="T18-103">T18-103 (Nytt avloppsrör i befintligt skyddsrum)</option>
                  <option value="T21-104">T21-104 (Genomföring för elledning)</option>
                  <option value="T21-105">T21-105 (Genomföring för fiberkabel)</option>
                  <option value="K17-201">K17-201 (Infästningsplåt för rörgenomföring)</option>
                  <option value="K18-101">K18-101 (Anslutning med tätfläns)</option>
                  <option value="K18-102">K18-102 (Avloppsanslutning nära vägg med tätfläns)</option>
                  <option value="custom">Annat (ange manuellt)...</option>
                </select>
              </div>

              {selectedSolution === 'custom' && (
                <div className="space-y-1.5 pt-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Ange typlösning manuellt *
                  </label>
                  <Input
                    type="text"
                    placeholder="T.ex. K03-108 eller SR-D1-312"
                    value={customSolution}
                    onChange={(e) => setCustomSolution(e.target.value)}
                    className="text-xs p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
                    required
                  />
                </div>
              )}

              {error && (
                <div className="flex items-start gap-2 p-3 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs rounded-lg border border-rose-500/20">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <p>{error}</p>
                </div>
              )}

              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/10 transition-all"
                disabled={files.length === 0 || uploading || (selectedSolution === 'custom' && !customSolution.trim())}
                onClick={runComplianceCheck}
              >
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Kör analys...
                  </>
                ) : (
                  <>
                    Analysera mot MCF regelverk
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Sökbart Arkiv */}
          <Card className="glass-card shadow-lg flex flex-col max-h-[420px] overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <FolderOpen className="h-4 w-4 text-indigo-500" />
                Skyddsprodukter ritningsarkiv
              </CardTitle>
              <CardDescription className="dark:text-slate-400">Bläddra och sök bland tidigare underlag.</CardDescription>
            </CardHeader>
            <div className="px-6 pb-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                <Input
                  placeholder="Sök i arkivet..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 py-1.5 text-xs bg-slate-50/50 dark:bg-slate-950/20 border-slate-200 dark:border-slate-850"
                />
              </div>
            </div>
            <CardContent className="overflow-y-auto flex-1 p-0 px-6 pb-4">
              <div className="space-y-4 mt-2">
                {(() => {
                  const processingDocs = archive.filter(d => d.complianceStatus === 'processing');
                  const newDocs = archive.filter(d => d.isNew && d.complianceStatus !== 'processing' && d.complianceStatus !== 'failed');
                  const historicalDocs = archive.filter(d => !d.isNew && d.complianceStatus !== 'processing' && d.complianceStatus !== 'failed');
                  const failedDocs = archive.filter(d => d.complianceStatus === 'failed');

                  const renderArchiveItem = (doc: any) => (
                    <div 
                      key={doc.id}
                      className={`group p-2 rounded-lg border text-xs flex flex-col gap-1.5 transition-all ${
                        result && result.id === doc.id
                          ? 'bg-blue-500/10 border-blue-500/30'
                          : doc.isNew && doc.complianceStatus !== 'processing' && doc.complianceStatus !== 'failed'
                            ? 'bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10'
                            : 'bg-white/40 dark:bg-slate-950/10 border-white/25 dark:border-slate-850 hover:bg-white/80 dark:hover:bg-slate-950/30'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        {editingId === doc.id ? (
                          <div className="flex flex-col gap-1.5 w-full" onClick={(e) => e.stopPropagation()}>
                            <Input
                              placeholder="Ritningsnamn"
                              value={editingName}
                              onChange={(e) => setEditingName(e.target.value)}
                              className="h-6 text-[11px] py-0 px-1 w-full"
                              autoFocus
                            />
                            <Input
                              placeholder="Kundnamn"
                              value={editingCustomerName}
                              onChange={(e) => setEditingCustomerName(e.target.value)}
                              className="h-6 text-[10px] py-0 px-1 w-full"
                            />
                            <div className="grid grid-cols-2 gap-1">
                              <Input
                                placeholder="Kundnummer"
                                value={editingCustomerNumber}
                                onChange={(e) => setEditingCustomerNumber(e.target.value)}
                                className="h-6 text-[10px] py-0 px-1 w-full"
                              />
                              <Input
                                placeholder="Ordernummer"
                                value={editingSalesOrderNumber}
                                onChange={(e) => setEditingSalesOrderNumber(e.target.value)}
                                className="h-6 text-[10px] py-0 px-1 w-full"
                              />
                            </div>
                            <div className="flex justify-end gap-1.5 mt-0.5">
                              <Button size="icon" className="h-6 w-6 shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => saveDocumentMetadata(doc.id)}>
                                <Save className="h-3 w-3" />
                              </Button>
                              <Button size="icon" variant="ghost" className="h-6 w-6 shrink-0" onClick={() => setEditingId(null)}>
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div 
                            className="font-medium truncate text-slate-900 dark:text-slate-100 flex-1 cursor-pointer flex items-center gap-1.5"
                            onClick={() => loadArchiveDocument(doc)}
                          >
                            <span className="truncate">{doc.customName}</span>
                            {doc.isNew && doc.complianceStatus !== 'processing' && doc.complianceStatus !== 'failed' && (
                              <span className="bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.2 rounded uppercase shrink-0 animate-pulse">
                                Ny
                              </span>
                            )}
                          </div>
                        )}
                        
                        {editingId !== doc.id && (
                          <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="h-5 w-5 text-slate-400 hover:text-slate-205" 
                              onClick={(e) => {
                                e.stopPropagation();
                                setEditingId(doc.id);
                                setEditingName(doc.customName);
                                setEditingCustomerName(doc.customerName || '');
                                setEditingCustomerNumber(doc.customerNumber || '');
                                setEditingSalesOrderNumber(doc.salesOrderNumber || '');
                              }}
                            >
                              <Edit3 className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="h-5 w-5 text-slate-400 hover:text-rose-500"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteDocument(doc.id);
                              }}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span>Typ: {doc.fileType}</span>
                        <span className="font-mono">{new Date(doc.createdAt).toLocaleDateString('sv-SE')}</span>
                      </div>

                      {(doc.customerName || doc.customerNumber || doc.salesOrderNumber) && (
                        <div className="text-[9px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-850/50 pt-1 mt-1 space-y-0.5">
                          {doc.customerName && <div className="truncate">Kund: <strong className="font-semibold text-slate-700 dark:text-slate-350">{doc.customerName}</strong></div>}
                          <div className="flex gap-2">
                            {doc.customerNumber && <div className="truncate">Kundnr: <strong className="font-mono text-slate-700 dark:text-slate-350">{doc.customerNumber}</strong></div>}
                            {doc.salesOrderNumber && <div className="truncate">Order: <strong className="font-mono text-slate-700 dark:text-slate-350">{doc.salesOrderNumber}</strong></div>}
                          </div>
                        </div>
                      )}
                    </div>
                  );

                  return (
                    <>
                      {processingDocs.length > 0 && (
                        <div>
                          <div className="text-[10px] uppercase font-bold text-blue-500 mb-1.5 tracking-wider">
                            Pågående tolkningar ({processingDocs.length})
                          </div>
                          <div className="space-y-1.5">
                             {processingDocs.map((doc) => (
                              <div 
                                key={doc.id}
                                className="p-2 rounded-lg border border-blue-500/20 bg-blue-500/5 text-xs flex items-center justify-between gap-2"
                              >
                                <div className="min-w-0 flex-1">
                                  <div className="font-medium truncate text-slate-700 dark:text-slate-300">
                                    {doc.customName}
                                  </div>
                                  <div className="text-[9px] text-blue-400 flex items-center gap-1 mt-0.5">
                                    <Loader2 className="h-2.5 w-2.5 animate-spin" />
                                    Tolkar på servern...
                                  </div>
                                </div>
                                <Button 
                                  size="icon" 
                                  variant="ghost" 
                                  className="h-5 w-5 text-slate-400 hover:text-rose-500 shrink-0"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (confirm("Vill du avbryta och radera denna pågående tolkning? All tillhörande data tas bort från servern.")) {
                                      deleteDocument(doc.id);
                                    }
                                  }}
                                  title="Avbryt tolkning"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {newDocs.length > 0 && (
                        <div>
                          <div className="text-[10px] uppercase font-bold text-emerald-500 mb-1.5 tracking-wider">
                            Nya ritningar ({newDocs.length})
                          </div>
                          <div className="space-y-1.5">
                            {newDocs.map(renderArchiveItem)}
                          </div>
                        </div>
                      )}

                      {historicalDocs.length > 0 && (
                        <div>
                          <div className="text-[10px] uppercase font-bold text-slate-500 mb-1.5 tracking-wider">
                            Historiska ritningar ({historicalDocs.length})
                          </div>
                          <div className="space-y-1.5">
                            {historicalDocs.map(renderArchiveItem)}
                          </div>
                        </div>
                      )}

                      {failedDocs.length > 0 && (
                        <div>
                          <div className="text-[10px] uppercase font-bold text-rose-500 mb-1.5 tracking-wider">
                            Misslyckade tolkningar ({failedDocs.length})
                          </div>
                          <div className="space-y-1.5">
                            {failedDocs.map((doc) => (
                              <div 
                                key={doc.id}
                                className="p-2 rounded-lg border border-rose-500/25 bg-rose-500/5 text-xs flex justify-between items-center"
                              >
                                <div className="min-w-0 flex-1">
                                  <div className="font-medium truncate text-rose-600 dark:text-rose-400">
                                    {doc.customName}
                                  </div>
                                  <div className="text-[9px] text-rose-450 mt-0.5">
                                    Tolkning misslyckades.
                                  </div>
                                </div>
                                <Button 
                                  size="icon" 
                                  variant="ghost" 
                                  className="h-5 w-5 text-slate-400 hover:text-rose-500"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteDocument(doc.id);
                                  }}
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {archive.length === 0 && (
                        <div className="text-center py-8 text-xs text-slate-450 dark:text-slate-500">
                          Inga dokument i arkivet.
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Skeletons or Compliance Results */}
        <div className="md:col-span-2 lg:col-span-9 space-y-6">
          {uploading && (
            <Card className="glass-card shadow-xl p-6">
              <div className="space-y-6 w-full">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Loader2 className="h-10 w-10 animate-spin text-blue-500 mb-3" />
                  <h3 className="font-bold text-lg text-slate-850 dark:text-slate-200">{statusStep}</h3>
                </div>
                
                {/* Beautiful custom shimmer loader skeleton placeholders */}
                <div className="space-y-4">
                  <div className="h-8 shimmer-bg rounded-md w-1/3"></div>
                  <div className="space-y-2">
                    <div className="h-4 shimmer-bg rounded-md w-full"></div>
                    <div className="h-4 shimmer-bg rounded-md w-5/6"></div>
                    <div className="h-4 shimmer-bg rounded-md w-2/3"></div>
                  </div>
                  <div className="h-24 shimmer-bg rounded-md w-full mt-6"></div>
                </div>
              </div>
            </Card>
          )}

          {!uploading && result && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left visual preview card (col-span-5) */}
              {selectedUploadedDoc && (
                <div className="lg:col-span-5 lg:sticky lg:top-6">
                  {renderPreviewCard()}
                </div>
              )}
              
              {/* Right report details (col-span-7) */}
              <div className={selectedUploadedDoc ? "lg:col-span-7 space-y-6" : "lg:col-span-12 space-y-6"}>
                {/* Compliance Report Card */}
                <Card className="glass-card shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold">Granskningsrapport</CardTitle>
                      <CardDescription className="dark:text-slate-400">Automatisk MCF regelkontroll för {result.fileName}</CardDescription>
                    </div>
                    {getStatusBadge(result.report.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {(result.customerName || result.customerNumber || result.salesOrderNumber) && (
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 p-3 rounded-lg border border-slate-200/50 bg-slate-50/50 dark:border-slate-850/50 dark:bg-slate-950/20 text-xs">
                      {result.customerName && (
                        <div>
                          <span className="text-slate-400 font-medium">Kund: </span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{result.customerName}</span>
                        </div>
                      )}
                      {result.customerNumber && (
                        <div>
                          <span className="text-slate-400 font-medium">Kundnummer: </span>
                          <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">{result.customerNumber}</span>
                        </div>
                      )}
                      {result.salesOrderNumber && (
                        <div>
                          <span className="text-slate-400 font-medium">Ordernummer: </span>
                          <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">{result.salesOrderNumber}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-4 bg-white/40 dark:bg-slate-950/20 rounded-lg border border-white/10 dark:border-slate-850 text-sm leading-relaxed">
                    <p className="font-bold mb-1 text-slate-900 dark:text-slate-100">Sammanfattning:</p>
                    <p className="text-slate-600 dark:text-slate-400">{result.report.summary}</p>
                  </div>

                  {result.parserMetadata && (
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 border-t border-slate-200/30 dark:border-slate-800/50 text-xs text-slate-400">
                      <div>
                        Tolkningsmotor: <span className="font-semibold text-slate-600 dark:text-slate-300 capitalize">{result.parserMetadata.parserUsed === 'pdf-parse' ? 'PDF Fallback' : result.parserMetadata.parserUsed === 'gemini-vision' ? 'Gemini Vision' : result.parserMetadata.parserUsed}</span>
                      </div>
                      {result.parserMetadata.pages !== undefined && (
                        <div>
                          • &nbsp; Sidor: <span className="font-semibold text-slate-600 dark:text-slate-300">{result.parserMetadata.pages}</span>
                        </div>
                      )}
                      {result.parserMetadata.duration !== undefined && (
                        <div>
                          • &nbsp; Tid: <span className="font-semibold text-slate-600 dark:text-slate-300">{result.parserMetadata.duration.toFixed(1)}s</span>
                        </div>
                      )}
                      {result.parserMetadata.studioLink && (
                        <div className="sm:ml-auto">
                          <a 
                            href={result.parserMetadata.studioLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 hover:underline font-semibold flex items-center gap-1"
                          >
                            Visa i Reducto Studio →
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Checks List */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-slate-850 dark:text-slate-200">Kontrollpunkter</h3>
                {result.report.checks.map((check, idx) => {
                  const isExpanded = !!expandedChecks[idx];
                  return (
                    <Card 
                      key={idx} 
                      className="glass-card shadow-md hover:bg-slate-50/20 dark:hover:bg-slate-950/10 transition-colors cursor-pointer"
                      onClick={() => toggleCheck(idx)}
                    >
                      <CardContent className="p-4 flex gap-4">
                        {getCheckStatusIcon(check.status)}
                        <div className="space-y-1 flex-1">
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-semibold text-slate-900 dark:text-slate-100">{check.title}</h4>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-xs uppercase font-bold tracking-wider">
                                {check.status === 'pass' && <span className="text-emerald-500">Godkänd</span>}
                                {check.status === 'warning' && <span className="text-amber-500">Varning</span>}
                                {check.status === 'fail' && <span className="text-rose-500">Avvikelse</span>}
                              </span>
                              {isExpanded ? (
                                <ChevronUp className="h-4 w-4 text-slate-400" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-slate-400" />
                              )}
                            </div>
                          </div>
                          {isExpanded && (
                            <div 
                              className="pt-2 space-y-2 border-t border-slate-100/50 dark:border-slate-850 mt-2 cursor-text"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed select-text">
                                {check.description}
                              </p>
                              {check.reference && (
                                <div className="pt-1.5 flex items-center gap-1.5 text-xs text-slate-400 select-text">
                                  <BookOpen className="h-3.5 w-3.5" />
                                  Källa: <span className="font-mono text-slate-500">{check.reference}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* BOM Table */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-slate-850 dark:text-slate-200">Konstruktionsbehov & Materiallista (BOM)</h3>
                <Card className="glass-card shadow-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] text-sm text-left">
                      <thead className="text-xs uppercase bg-slate-50/50 dark:bg-slate-950/40 text-slate-500 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                          <th className="px-4 py-3 w-[25%] min-w-[150px]">Komponent / Material</th>
                          <th className="px-4 py-3 w-[15%] min-w-[90px]">Antal / Mängd</th>
                          <th className="px-4 py-3 w-[20%] min-w-[120px]">Kategori</th>
                          <th className="px-4 py-3 w-[40%] min-w-[250px]">Specifikation / Krav</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-850">
                        {result.report.bom && result.report.bom.length > 0 ? (
                          result.report.bom.map((item, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20">
                              <td className="px-4 py-3 font-semibold text-slate-950 dark:text-slate-100">{item.item}</td>
                              <td className="px-4 py-3 font-bold text-slate-700 dark:text-slate-300">{item.quantity}</td>
                              <td className="px-4 py-3">
                                <Badge variant="secondary" className="text-[10px] uppercase font-bold tracking-wider">{item.category}</Badge>
                              </td>
                              <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400">{item.specification}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={4} className="px-4 py-4 text-center text-slate-400">Inga specifika komponenter kunde identifieras för listan.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>


            </div>
          </div>
        )}

          {!uploading && !result && (
            <div className="space-y-6">
              {/* Optional background banner if processing */}
              {archive.some(d => d.complianceStatus === 'processing') && (
                <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 text-xs text-blue-600 dark:text-blue-400 font-semibold animate-pulse flex items-center gap-3">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                  <span>Startade tolkningsjobb pågår just nu i bakgrunden. Du kan följa deras framsteg under "Pågående tolkningar" längre ner i arkivet till vänster.</span>
                </div>
              )}

              {/* Three side-by-side guides */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-card shadow-md border border-slate-200/40 dark:border-slate-850/50 p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                    <FolderOpen className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-2">1. Välj underlag</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Ladda upp en ny ritning eller välj ett sparat dokument från det sökbara arkivet till vänster.
                  </p>
                </Card>

                <Card className="glass-card shadow-md border border-slate-200/40 dark:border-slate-850/50 p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-2">2. Regelgranskning</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Systemet gör en automatisk granskning mot MCF:s regler och typlösningar för skyddsrum.
                  </p>
                </Card>

                <Card className="glass-card shadow-md border border-slate-200/40 dark:border-slate-850/50 p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-4">
                    <FileCode className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-2">3. SolidWorks-makro</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Gå till makro-generatorn i sidomenyn för att skapa och hantera anpassade CAD-makron baserat på underlaget.
                  </p>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// Auto-deploy trigger comment
