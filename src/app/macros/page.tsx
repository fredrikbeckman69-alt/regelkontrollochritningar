'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileCode, Copy, Check, Download, Loader2, Sparkles, HelpCircle, 
  Wrench, ArrowLeft, RefreshCw, FolderOpen, Search, FileText, X, 
  ArrowRight, Trash2
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { CheckCircle2, XCircle } from 'lucide-react';
import dynamic from 'next/dynamic';

const PdfPreview = dynamic(() => import('@/components/PdfPreview'), { ssr: false });

interface GeneratedMacro {
  id?: string;
  prompt?: string;
  code?: string;
  explanation?: string;
  fileName?: string;
  filePath?: string;
  docTitle?: string;
  status?: string;
  error?: string;
  createdAt?: string;
}

export default function MacroGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<GeneratedMacro | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [docId, setDocId] = useState<string | null>(null);
  const [docTitle, setDocTitle] = useState<string | null>(null);

  // Archive states
  const [archive, setArchive] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUploadedDoc, setSelectedUploadedDoc] = useState<any | null>(null);
  const [macroSource, setMacroSource] = useState<'reducto' | 'raw'>('reducto');
  const [previewTab, setPreviewTab] = useState<'visual' | 'text' | 'bom'>('visual');
  const [selectedFileIdx, setSelectedFileIdx] = useState<number>(0);

  // Macro history states
  const [macrosList, setMacrosList] = useState<GeneratedMacro[]>([]);
  const [selectedMacroId, setSelectedMacroId] = useState<string | null>(null);
  const [sidebarTab, setSidebarTab] = useState<'docs' | 'macros'>('docs');

  useEffect(() => {
    setSelectedFileIdx(0);
  }, [selectedUploadedDoc]);

  // Load macros history on mount
  useEffect(() => {
    fetchMacros();
  }, []);

  const fetchMacros = async () => {
    try {
      const res = await fetch(`/api/macro?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setMacrosList(data);
        
        if (data.length > 0) {
          const latestMacro = data[0];
          const isPending = latestMacro.status === 'pending';
          const createdTime = new Date(latestMacro.createdAt).getTime();
          const timeSinceCreation = Date.now() - createdTime;
          const isRecent = timeSinceCreation < 10 * 60 * 1000; // 10 minutes
          
          // Check if there is an active ID in localStorage
          const activeId = typeof window !== 'undefined' ? localStorage.getItem('activeMacroId') : null;
          
          if (isPending || isRecent || (activeId && data.some((m: any) => m.id === activeId))) {
            const targetMacro = (activeId && data.find((m: any) => m.id === activeId)) || latestMacro;
            setSelectedMacroId(targetMacro.id);
            setResult(targetMacro);
            setSidebarTab('macros');
            if (typeof window !== 'undefined') {
              localStorage.setItem('activeMacroId', targetMacro.id);
            }
          }
        }
      }
    } catch (err) {
      console.error("Failed to load macros history:", err);
    }
  };

  const deleteMacro = async (id: string) => {
    try {
      const res = await fetch(`/api/macro?id=${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setMacrosList(prev => prev.filter(m => m.id !== id));
        if (selectedMacroId === id) {
          setResult(null);
          setSelectedMacroId(null);
          if (typeof window !== 'undefined') {
            localStorage.removeItem('activeMacroId');
          }
        }
      } else {
        const err = await res.json();
        alert(err.error || "Kunde inte radera makrot.");
      }
    } catch (err: any) {
      console.error("Failed to delete macro:", err);
      alert("Ett fel uppstod: " + err.message);
    }
  };

  // Poll for pending macros in the background
  useEffect(() => {
    const pendingMacros = macrosList.filter(m => m.status === 'pending');
    if (pendingMacros.length === 0) return;

    const interval = setInterval(async () => {
      const updatedList = [...macrosList];
      let hasChanges = false;

      for (let i = 0; i < updatedList.length; i++) {
        const macro = updatedList[i];
        if (macro.status === 'pending') {
          try {
            const res = await fetch(`/api/macro?id=${macro.id}&t=${Date.now()}`, { cache: 'no-store' });
            if (res.ok) {
              const data = await res.json();
              if (data.status !== 'pending') {
                updatedList[i] = data;
                hasChanges = true;
                
                const activeId = typeof window !== 'undefined' ? localStorage.getItem('activeMacroId') : selectedMacroId;
                if (activeId === macro.id) {
                  setResult(data);
                }
              }
            }
          } catch (err) {
            console.error(`Error polling macro status:`, err);
          }
        }
      }

      if (hasChanges) {
        setMacrosList(updatedList);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [macrosList, selectedMacroId]);

  // Read query parameters client-side to avoid Next.js build-time suspense errors
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('docId');
      if (id) {
        setDocId(id);
        fetchDocTitle(id);
      }
    }
  }, []);

  // Load archive list on mount, when search changes, and poll every 5 seconds to keep all users in sync
  useEffect(() => {
    fetchArchive(searchQuery);

    const interval = setInterval(() => {
      fetchArchive(searchQuery);
    }, 5000);

    return () => clearInterval(interval);
  }, [searchQuery]);

  const fetchArchive = async (query = '') => {
    try {
      const res = await fetch(`/api/archive?q=${encodeURIComponent(query)}&t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setArchive(data);
      }
    } catch (err) {
      console.error("Failed to load archive:", err);
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
        if (selectedUploadedDoc && selectedUploadedDoc.id === id) {
          setSelectedUploadedDoc(null);
        }
      }
    } catch (err) {
      console.error("Failed to delete document:", err);
    }
  };

  const fetchDocTitle = async (id: string) => {
    try {
      const res = await fetch(`/api/documents/${id}?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setDocTitle(data.title);
        // Automatically trigger macro generation for this document
        generateMacro(id, `Skapa ett SolidWorks-makro för att rita eller tillverka detaljen enligt de bifogade skyddsrumskraven och typlösningarna i dokumentet.`);
        
        // Clear query parameters from URL immediately after triggering to prevent re-triggering on remount
        if (typeof window !== 'undefined') {
          window.history.replaceState({}, '', window.location.pathname);
        }
      }
    } catch (err) {
      console.error("Failed to load document info:", err);
    }
  };

  const generateMacro = async (documentId?: string, overridePrompt?: string) => {
    setLoading(true);
    setError(null);

    const activePrompt = overridePrompt || prompt;
    const activeUploadedDocId = selectedUploadedDoc?.id || undefined;
    const activeDocumentId = documentId || docId || undefined;

    if (!activePrompt.trim() && !activeUploadedDocId && !activeDocumentId) {
      setError("Ange vad makrot ska göra eller välj ett dokument/ritning från arkivet.");
      setLoading(false);
      return;
    }

    let finalPrompt = activePrompt;
    if (!finalPrompt.trim() && activeUploadedDocId) {
      finalPrompt = "Skapa ett komplett SolidWorks-makro (.bas) för att konfigurera eller rita komponenterna från detta underlag.";
    }

    try {
      const res = await fetch('/api/macro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: finalPrompt,
          documentId: activeDocumentId,
          uploadedDocId: activeUploadedDocId,
          sourceType: macroSource
        }),
      });

      if (!res.ok) {
        let errorMessage = 'Något gick fel vid genereringen av makrot.';
        try {
          const contentType = res.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errData = await res.json();
            errorMessage = errData.error || errorMessage;
          } else {
            errorMessage = `Serverfel (status ${res.status}).`;
          }
        } catch (e) {}
        throw new Error(errorMessage);
      }

      const data = await res.json();
      setResult(data);
      setSelectedMacroId(data.id || null);
      if (typeof window !== 'undefined' && data.id) {
        localStorage.setItem('activeMacroId', data.id);
      }
      setMacrosList(prev => [data, ...prev]);
      setSidebarTab('macros');
      setPrompt('');
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTemplateClick = (templatePrompt: string) => {
    setPrompt(templatePrompt);
    // Clear document state when switching to a custom template
    setDocId(null);
    setDocTitle(null);
    setSelectedUploadedDoc(null);
  };

  const copyToClipboard = () => {
    if (!result || !result.code) return;
    navigator.clipboard.writeText(result.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFile = () => {
    if (!result || !result.code) return;
    const normalizedCode = result.code.replace(/\r?\n/g, '\r\n');
    const blob = new Blob([normalizedCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;

    let downloadName = (result.fileName || 'SolidWorksMacro.swb').replace(/\.bas$/i, '.swb');
    if (selectedUploadedDoc) {
      let originalNames: string[] = [];
      try {
        if (selectedUploadedDoc.originalName) {
          originalNames = JSON.parse(selectedUploadedDoc.originalName);
          if (!Array.isArray(originalNames)) {
            originalNames = [selectedUploadedDoc.originalName];
          }
        }
      } catch (e) {
        originalNames = [selectedUploadedDoc.originalName || ''];
      }
      const activeName = originalNames[selectedFileIdx] || originalNames[0] || 'SolidWorksMacro';

      // Build Safe Prefix YYMMDD-TT:MM
      const d = new Date(selectedUploadedDoc.createdAt);
      const formatter = new Intl.DateTimeFormat('sv-SE', {
        timeZone: 'Europe/Stockholm',
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      const parts = formatter.formatToParts(d);
      let year = '';
      let month = '';
      let day = '';
      let hour = '';
      let minute = '';
      for (const part of parts) {
        if (part.type === 'year') year = part.value;
        else if (part.type === 'month') month = part.value;
        else if (part.type === 'day') day = part.value;
        else if (part.type === 'hour') hour = part.value;
        else if (part.type === 'minute') minute = part.value;
      }
      const prefix = `${year}${month}${day}-${hour}:${minute}`;
      const baseName = activeName.replace(/\.[^/.]+$/, "");
      downloadName = `${prefix} ${baseName}.swb`;
    }

    link.download = downloadName;
    link.click();
    URL.revokeObjectURL(url);
  };

  const templates = [
    {
      title: "Exportera ritningar till PDF",
      description: "Batch-exportera alla ritningsfiler (.slddrw) i mappen till PDF.",
      prompt: "Skapa ett SolidWorks-makro som letar upp alla ritningsfiler (.slddrw) i samma mapp som det aktiva dokumentet, öppnar dem tyst i bakgrunden, och sparar om dem som PDF-filer i en ny undermapp kallad 'PDF'."
    },
    {
      title: "Exportera plåtdetaljer till DXF",
      description: "Hitta alla plåtdetaljer i en sammanställning och spara ut plattmönster.",
      prompt: "Skapa ett SolidWorks-makro som går igenom alla plåtdetaljer i den aktiva sammanställningen och exporterar deras utbredda plattmönster (flat pattern) till DXF-filer. Spara dem i samma mapp som sammanställningen."
    },
    {
      title: "Standard Egenskaper (Custom Properties)",
      description: "Lägg automatiskt till ritningsnummer, konstruktör, datum och projekt.",
      prompt: "Skapa ett SolidWorks-makro som lägger till standardegenskaper (Custom Properties) till det aktiva dokumentet. Egenskaperna som ska läggas till är: 'RitadAv' = 'Fredrik Beckman', 'GranskadAv' = 'Sakkunnig', 'Projekt' = 'Skyddsrum', 'SkapadDatum' = dagens datum, och 'Ritningsnummer' = filnamnet utan filändelse."
    },
    {
      title: "Rita tryckvågsventil (3D)",
      description: "Generera en cirkulär fläns med bulthål utifrån grundläggande CAD-geometri.",
      prompt: "Skapa ett SolidWorks-makro som skapar en ny part, ritar en cirkulär tryckvågsventil (fläns) med diameter 160mm, tjocklek 15mm och ett centrumhål med diameter 50mm. Lägg till 4 st bulthål med diameter 12mm jämnt fördelade längs en bultcirkel med diameter 120mm. Gör en extrusion (Boss-Extrude)."
    }
  ];

  const renderPreviewCard = () => {
    if (!selectedUploadedDoc) return null;

    let bomItems: any[] = [];
    try {
      if (selectedUploadedDoc.bomJson) {
        bomItems = JSON.parse(selectedUploadedDoc.bomJson);
      }
    } catch (e) {
      console.error("Failed to parse BOM JSON:", e);
    }

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
      <Card className="glass-card shadow-lg flex flex-col h-full overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start gap-2">
            <div className="min-w-0">
              <CardTitle className="text-sm font-semibold truncate flex items-center gap-1.5 text-slate-900 dark:text-slate-100">
                <FileText className="h-4 w-4 text-blue-500 shrink-0" />
                {selectedUploadedDoc.customName}
              </CardTitle>
              <CardDescription className="text-[11px] dark:text-slate-400">
                Uppladdad {new Date(selectedUploadedDoc.createdAt).toLocaleDateString('sv-SE')}
              </CardDescription>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {previewTab === 'visual' && (
                <a 
                  href={`/api/${activePath}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1 px-2 py-1 rounded bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/10"
                >
                  Öppna i ny flik ↗
                </a>
              )}
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 text-slate-450 hover:text-slate-200"
                onClick={() => setSelectedUploadedDoc(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Tab Buttons */}
        <div className="px-6 border-b border-slate-200 dark:border-slate-800/80 flex gap-4 text-xs">
          <button
            onClick={() => setPreviewTab('visual')}
            className={`pb-2 pt-1 font-medium border-b-2 transition-all ${
              previewTab === 'visual'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-slate-500 hover:text-slate-350'
            }`}
          >
            Visualisering
          </button>
          <button
            onClick={() => setPreviewTab('text')}
            className={`pb-2 pt-1 font-medium border-b-2 transition-all ${
              previewTab === 'text'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-slate-500 hover:text-slate-355'
            }`}
          >
            Textinnehåll
          </button>
          <button
            onClick={() => setPreviewTab('bom')}
            className={`pb-2 pt-1 font-medium border-b-2 transition-all ${
              previewTab === 'bom'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-slate-500 hover:text-slate-360'
            }`}
          >
            Materiallista (BOM)
          </button>
        </div>

        <CardContent className="flex-1 p-4 overflow-y-auto min-h-0 flex flex-col">
          {previewTab === 'visual' && filePaths.length > 1 && (
            <div className="flex flex-wrap gap-1 mb-3 bg-slate-100/80 dark:bg-slate-900/60 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
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

          {previewTab === 'visual' && (
            <div className="w-full h-full min-h-0 flex flex-col justify-center items-center flex-1">
              {isPdf ? (
                <PdfPreview url={`/api/${activePath}`} />
              ) : isImage ? (
                <div className="w-full h-[450px] flex items-center justify-center bg-slate-900/50 rounded-md border border-slate-800/80 overflow-hidden">
                  <img
                    src={`/api/${activePath}`}
                    alt={activeName}
                    className="max-w-full max-h-full object-contain rounded-md"
                  />
                </div>
              ) : (
                <div className="text-center py-16 text-slate-400">
                  Förhandsgranskning är endast tillgänglig för PDF-ritningar och bildfiler.
                </div>
              )}
            </div>
          )}

          {previewTab === 'text' && (
            <div className="space-y-2">
              <pre className="p-3 text-[11px] font-mono whitespace-pre-wrap max-h-[500px] overflow-y-auto bg-slate-950 text-slate-100 rounded-md border border-slate-850">
                {selectedUploadedDoc.reductoMarkdown || selectedUploadedDoc.rawText || "Inget textinnehåll tolkat."}
              </pre>
            </div>
          )}

          {previewTab === 'bom' && (
            <div className="space-y-4">
              {bomItems.length > 0 ? (
                <div className="border border-slate-200 dark:border-slate-800 rounded-md overflow-hidden bg-white/5 dark:bg-slate-950/20">
                  <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                    <table className="w-full min-w-[600px] text-xs text-left">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 text-slate-400">
                          <th className="py-2 px-3 w-[25%] min-w-[130px]">Komponent / Material</th>
                          <th className="py-2 px-3 text-center w-[15%] min-w-[70px]">Antal</th>
                          <th className="py-2 px-3 w-[40%] min-w-[200px]">Specifikation</th>
                          <th className="py-2 px-3 w-[20%] min-w-[100px]">Kategori</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bomItems.map((b, i) => (
                          <tr key={i} className="border-b border-slate-200/50 dark:border-slate-850/60 hover:bg-slate-500/5 transition-colors">
                            <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">{b.item}</td>
                            <td className="py-2.5 px-3 text-center font-mono">{b.quantity}</td>
                            <td className="py-2.5 px-3 text-slate-500 dark:text-slate-400">{b.specification}</td>
                            <td className="py-2.5 px-3">
                              <Badge variant="outline" className="text-[10px] uppercase font-mono px-1.5 py-0.5 border-slate-200/60 dark:border-slate-800/80">
                                {b.category}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 text-slate-400 text-xs">
                  Ingen materiallista (BOM) tillgänglig för denna fil. Ladda upp underlaget under Regelkontroll för att generera en BOM.
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  const renderPromptCard = (isHalfHeight = false) => (
    <Card className={`glass-card shadow-lg flex flex-col justify-between ${isHalfHeight ? 'h-[250px] shrink-0' : 'h-full flex-1'}`}>
      <CardHeader className="pb-2 pt-4 px-5 shrink-0">
        <CardTitle className="text-base flex items-center gap-2 font-semibold">
          <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
          Vad vill du att makrot ska göra?
        </CardTitle>
        <CardDescription className="dark:text-slate-400 font-normal text-[11px] leading-tight">
          Beskriv ditt automationsbehov eller använd ritningsspecifikationen.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 flex-1 flex flex-col justify-between overflow-hidden pb-4 px-5">
        <div className="space-y-2 flex-1 flex flex-col min-h-0">
          {docTitle && (
            <div className="p-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] rounded border border-blue-500/20 flex items-center gap-2 justify-between shrink-0">
              <div className="flex items-center gap-1.5 min-w-0">
                <Badge className="bg-blue-500 text-white shrink-0 text-[8px] px-1 py-0.2">Ref</Badge>
                <span className="font-semibold truncate">{docTitle}</span>
              </div>
              <X 
                className="h-3 w-3 shrink-0 text-slate-400 hover:text-slate-200 cursor-pointer"
                onClick={() => {
                  setDocId(null);
                  setDocTitle(null);
                }}
              />
            </div>
          )}

          {selectedUploadedDoc && (
            <div className="p-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[11px] rounded border border-indigo-500/20 flex items-center gap-2 justify-between shrink-0">
              <div className="flex items-center gap-1.5 min-w-0">
                <Badge className="bg-indigo-500 text-white shrink-0 text-[8px] px-1.5 py-0.2">Aktiv</Badge>
                <span className="font-semibold truncate">{selectedUploadedDoc.customName}</span>
              </div>
              <X 
                className="h-3 w-3 shrink-0 text-slate-400 hover:text-slate-250 cursor-pointer"
                onClick={() => {
                  setSelectedUploadedDoc(null);
                }}
              />
            </div>
          )}

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={selectedUploadedDoc ? "Valfritt: Lägg till ytterligare instruktioner..." : "Exempel: Skapa ett makro som exporterar den aktiva ritningen till PDF..."}
            className="w-full flex-1 min-h-[50px] p-2.5 text-xs rounded border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-800 dark:text-slate-100 leading-normal"
          />
        </div>

        {selectedUploadedDoc && !isHalfHeight && (
          <div className="p-2 bg-white/40 dark:bg-slate-950/20 rounded border border-white/20 dark:border-slate-850 space-y-1 shrink-0">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Källa för makro:</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-1.5 text-xs cursor-pointer text-slate-800 dark:text-slate-200">
                <input 
                  type="radio" 
                  name="macro-source" 
                  value="reducto" 
                  checked={macroSource === 'reducto'}
                  onChange={() => setMacroSource('reducto')}
                  className="text-blue-600 focus:ring-blue-500 h-3 w-3"
                />
                Reducto Layout
              </label>
              <label className="flex items-center gap-1.5 text-xs cursor-pointer text-slate-800 dark:text-slate-200">
                <input 
                  type="radio" 
                  name="macro-source" 
                  value="raw" 
                  checked={macroSource === 'raw'}
                  onChange={() => setMacroSource('raw')}
                  className="text-blue-600 focus:ring-blue-500 h-3 w-3"
                />
                Rå text (Fallback)
              </label>
            </div>
          </div>
        )}

        {error && (
          <div className="p-2 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] rounded border border-rose-500/20 shrink-0">
            {error}
          </div>
        )}

        <Button
          className="w-full h-9 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/10 transition-all flex items-center justify-center gap-1.5 shrink-0 text-xs font-medium"
          disabled={(!prompt.trim() && !docId && !selectedUploadedDoc) || loading}
          onClick={() => generateMacro()}
        >
          {loading ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Genererar makro...
            </>
          ) : (
            <>
              <Sparkles className="h-3.5 w-3.5" />
              {selectedUploadedDoc ? 'Generera från ritning' : 'Generera SolidWorks-kod'}
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );

  const renderTemplatesCard = () => (
    <Card className="glass-card shadow-lg flex-1 flex flex-col overflow-hidden min-h-[200px]">
      <CardHeader className="pb-2 pt-4 px-5 shrink-0">
        <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Mallar & Snabbval</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2 overflow-y-auto flex-1 pb-4 px-5 pr-3 mr-1">
        {templates.map((tmpl, idx) => (
          <button
            key={idx}
            onClick={() => handleTemplateClick(tmpl.prompt)}
            className="text-left p-2.5 rounded border border-slate-200/50 dark:border-slate-850/60 bg-white/30 dark:bg-slate-900/10 hover:border-blue-500/40 hover:bg-white/80 dark:hover:bg-slate-950/30 transition-all group shrink-0"
          >
            <div className="font-semibold text-[11px] text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {tmpl.title}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1 leading-normal font-normal">
              {tmpl.description}
            </div>
          </button>
        ))}
      </CardContent>
    </Card>
  );

  const renderOutputCard = (isFullscreen = false) => {
    if (loading) {
      return (
        <Card className={`glass-card shadow-xl flex flex-col items-center justify-center text-center p-6 animate-pulse ${isFullscreen ? 'h-full' : 'h-full min-h-[300px]'}`}>
          <CardContent className="space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500 mx-auto" />
            <h3 className="font-bold text-sm text-slate-850 dark:text-slate-200">Skriver SolidWorks-makro...</h3>
            <p className="text-[11px] text-slate-400 max-w-xs leading-normal">
              AI-motorn analyserar förfrågan och startar genereringen på servern...
            </p>
          </CardContent>
        </Card>
      );
    }

    if (result) {
      if (result.status === 'pending') {
        return (
          <Card className={`glass-card shadow-xl flex flex-col items-center justify-center text-center p-6 ${isFullscreen ? 'h-full' : 'h-full min-h-[300px]'}`}>
            <CardContent className="space-y-4">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500 mx-auto" />
              <h3 className="font-bold text-sm text-slate-850 dark:text-slate-200">Genererar VBA-makro...</h3>
              <p className="text-[11px] text-slate-400 max-w-xs leading-normal">
                AI-motorn skapar koden i bakgrunden. Du kan lämna sidan eller arbeta vidare i systemet under tiden.
              </p>
              <div className="text-[10px] text-slate-400 font-mono italic max-w-xs truncate mx-auto bg-slate-100 dark:bg-slate-900/60 p-2 rounded border border-slate-200/50 dark:border-slate-800">
                Instruktion: {result.prompt}
              </div>
            </CardContent>
          </Card>
        );
      }

      if (result.status === 'failed') {
        return (
          <Card className={`glass-card shadow-xl flex flex-col items-center justify-center text-center p-6 ${isFullscreen ? 'h-full' : 'h-full min-h-[300px]'}`}>
            <CardContent className="space-y-4">
              <XCircle className="h-8 w-8 text-rose-500 mx-auto" />
              <h3 className="font-bold text-sm text-rose-600 dark:text-rose-400">Generering misslyckades</h3>
              <p className="text-[11px] text-slate-450 max-w-xs leading-normal">
                Ett fel uppstod under skapandet av makrot. Försök igen eller justera instruktionen.
              </p>
              {result.error && (
                <div className="text-[10px] text-rose-600 dark:text-rose-400 bg-rose-500/5 dark:bg-rose-950/20 p-3 rounded border border-rose-500/20 max-w-xs text-left overflow-y-auto max-h-[150px] font-mono leading-normal">
                  {result.error}
                </div>
              )}
            </CardContent>
          </Card>
        );
      }

      return (
        <Card className="glass-card shadow-xl h-full flex flex-col overflow-hidden border-t-2 border-t-blue-500">
          <CardHeader className="pb-2 pt-4 px-5 shrink-0">
            <div className="flex justify-between items-center gap-2">
              <div className="min-w-0">
                <CardTitle className="text-sm font-bold truncate">Makro genererat</CardTitle>
                <CardDescription className="text-[9px] dark:text-slate-400 font-mono truncate mt-0.5">{result.fileName}</CardDescription>
              </div>
              <Badge variant="outline" className="font-mono text-[9px] px-1.5 py-0.2 shrink-0 border-white/20 bg-blue-500/5 text-blue-600 dark:text-blue-400">
                VBA (.swb)
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col overflow-hidden p-0">
            {/* Action Bar (Download & Copy) */}
            <div className="px-5 py-2 border-b border-slate-200/50 dark:border-slate-850/50 bg-slate-500/5 flex items-center justify-between shrink-0 gap-2">
              <div className="flex gap-2">
                <Button size="sm" onClick={downloadFile} className="h-7 text-[11px] bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1 px-2.5">
                  <Download className="h-3.5 w-3.5" /> Ladda ner
                </Button>
                <Button size="sm" variant="outline" onClick={copyToClipboard} className="h-7 text-[11px] border-slate-205 dark:border-slate-805 hover:bg-slate-505/10 flex items-center gap-1 px-2.5">
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" /> Kopierad!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Kopiera
                    </>
                  )}
                </Button>
              </div>
              <Button size="sm" variant="ghost" onClick={() => generateMacro()} className="h-7 text-[10px] text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 flex items-center gap-1">
                <RefreshCw className="h-3 w-3" /> Generera om
              </Button>
            </div>

            {/* Content areas (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs pr-3 mr-1">
              {/* Explanation section */}
              <div className="space-y-1.5">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Beskrivning & Funktion</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-350 leading-relaxed bg-white/40 dark:bg-slate-950/20 p-3 rounded border border-slate-200/50 dark:border-slate-850 font-normal">
                  {result.explanation}
                </p>
              </div>

              {/* Code Preview block */}
              <div className="space-y-1.5">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Källkod förhandsgranskning</h4>
                <div className="bg-zinc-950 text-zinc-100 border border-zinc-800 rounded overflow-hidden relative group">
                  <div className="bg-zinc-900 px-3 py-1.5 border-b border-zinc-850 text-[10px] font-mono text-zinc-400 flex items-center justify-between select-none">
                    <span>{result.fileName}</span>
                    <Button size="icon" variant="ghost" onClick={copyToClipboard} className="h-5 w-5 hover:bg-zinc-850 text-zinc-400 hover:text-zinc-200">
                      {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                  <pre className="p-3 text-[10px] font-mono overflow-x-auto max-h-[250px] overflow-y-auto leading-normal bg-zinc-950 text-zinc-200 select-all">
                    {result.code}
                  </pre>
                </div>
              </div>

              {/* Run instructions */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Hur använder jag makrot i SOLIDWORKS?</h4>
                <div className="space-y-2 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  <div className="p-2 bg-blue-500/5 rounded border border-blue-500/10">
                    <p className="font-semibold text-slate-800 dark:text-slate-200 text-[10px] uppercase tracking-wider mb-1">Metod A: Kopiera källkod till ny .swp (Rekommenderas för alla versioner)</p>
                    <ol className="list-decimal pl-4 space-y-0.5">
                      <li>Klicka på <strong>Kopiera</strong> för att kopiera hela källkoden till ditt urklipp.</li>
                      <li>I SOLIDWORKS, gå till: <strong>Verktyg &gt; Makro &gt; Nytt...</strong> (Tools &gt; Macro &gt; New...).</li>
                      <li>Spara makrot som en ny <strong>.swp</strong>-fil (VBA Project).</li>
                      <li>SOLIDWORKS öppnar automatiskt VBA-redigeraren. Ersätt all kod i fönstret genom att klistra in (<code>Ctrl+V</code>) din kopierade kod, och spara.</li>
                      <li>Kör makrot direkt inifrån VBA-redigeraren (Grön play-knapp eller <code>F5</code>).</li>
                    </ol>
                  </div>
                  <div className="p-2 bg-slate-500/5 rounded border border-slate-200/50 dark:border-slate-800">
                    <p className="font-semibold text-slate-800 dark:text-slate-200 text-[10px] uppercase tracking-wider mb-1">Metod B: Kör .swb direkt (Kräver stöd för SWBasic)</p>
                    <ol className="list-decimal pl-4 space-y-0.5">
                      <li>Klicka på <strong>Ladda ner</strong> för att ladda ner <code>.swb</code>-filen till din dator.</li>
                      <li>I SOLIDWORKS, gå till: <strong>Verktyg &gt; Makro &gt; Kör...</strong> (Tools &gt; Macro &gt; Run...).</li>
                      <li>I fildialogen, ändra filtyp till <strong>SWBasic Macros (*.swb)</strong> längst ner till höger.</li>
                      <li>Markera den nedladdade filen och klicka på <strong>Öppna</strong> för att köra direkt.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className="bg-zinc-950 text-zinc-100 border-zinc-800 shadow-xl h-full flex flex-col overflow-hidden relative select-none">
        {/* Mock Editor Header */}
        <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-850 text-xs font-mono text-zinc-450 flex items-center justify-between shrink-0 border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="ml-2 font-semibold text-zinc-400">SolidWorksMacro.swb</span>
          </div>
          <Badge variant="outline" className="font-mono text-[8px] text-zinc-500 border-zinc-800 bg-zinc-900/50">
            VBA Editor
          </Badge>
        </div>
        
        <CardContent className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
          {/* Watermark Mock Code */}
          <div className="absolute inset-0 p-4 font-mono text-[9px] text-zinc-900/30 dark:text-zinc-900/20 select-none pointer-events-none text-left leading-normal">
            <code>{`Attribute VB_Name = "SolidWorksMacro"
Sub main()
    Dim swApp As Object
    Dim Part As Object
    Dim boolstatus As Boolean
    Dim longstatus As Long, longwarnings As Long
    
    Set swApp = Application.SldWorks
    Set Part = swApp.ActiveDoc
    
    ' Create new part if none open
    If Part Is Nothing Then
        Set Part = swApp.NewDocument("C:\\ProgramData\\...", 0, 0, 0)
    End If
    
    ' Configured dimensions
    Dim width As Double, height As Double
    width = 0.25 ' meters
    height = 0.5 ' meters
End Sub`}</code>
          </div>

          {/* Centered Graphic and Text */}
          <div className="z-10 text-center space-y-4 max-w-xs bg-zinc-950/80 p-6 rounded-xl border border-zinc-900/50 backdrop-blur-md">
            <div className="inline-flex p-3 rounded-full bg-zinc-900 border border-zinc-800 shadow-inner">
              <Wrench className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
            </div>
            <div className="space-y-1">
              <h4 className="font-semibold text-xs text-zinc-300">Ingen kod genererad</h4>
              <p className="text-[10px] text-zinc-500 leading-relaxed font-normal">
                Skriv in instruktioner i rutan till vänster eller välj en ritning i arkivet för att generera ditt VBA-makro.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="w-full p-4 md:p-6 text-slate-800 dark:text-slate-100 bg-transparent">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-7xl mx-auto w-full mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent flex items-center gap-2">
            <FileCode className="h-8 w-8 text-blue-500 shrink-0" />
            SolidWorks Makrogenerator
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Generera och ladda ner färdiga `.swb`-filer för att automatisera ritningar, exporter och geometriskapande.
          </p>
        </div>
        
        {(docId || selectedUploadedDoc) && (
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1.5 self-start border-white/20"
            onClick={() => {
              setDocId(null);
              setDocTitle(null);
              setSelectedUploadedDoc(null);
              setResult(null);
              setError(null);
            }}
          >
            <ArrowLeft className="h-4 w-4" /> Rensa val och återställ
          </Button>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-12 max-w-7xl mx-auto w-full">
        {/* Column 1: Sökbart Arkiv / Sparade makron (3/12 cols) */}
        <div className="lg:col-span-3">
          <Card className="glass-card shadow-lg flex flex-col h-[620px] overflow-hidden">
            <div className="flex border-b border-slate-200 dark:border-slate-800 shrink-0">
              <button
                type="button"
                onClick={() => setSidebarTab('docs')}
                className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-1.5 border-b-2 transition-all ${
                  sidebarTab === 'docs'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-500/5'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <FolderOpen className="h-3.5 w-3.5" />
                Ritningar
              </button>
              <button
                type="button"
                onClick={() => setSidebarTab('macros')}
                className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-1.5 border-b-2 transition-all ${
                  sidebarTab === 'macros'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-500/5'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <FileCode className="h-3.5 w-3.5" />
                Sparade makron
              </button>
            </div>

            {sidebarTab === 'docs' ? (
              <>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <FolderOpen className="h-4 w-4 text-indigo-500" />
                    Skyddsprodukter ritningsarkiv
                  </CardTitle>
                  <CardDescription className="dark:text-slate-400">Välj en ritning för att generera makro utifrån underlaget.</CardDescription>
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
                                  <div className="font-medium truncate text-slate-700 dark:text-slate-350">
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
                            {newDocs.map((doc) => (
                              <div 
                                key={doc.id}
                                onClick={() => {
                                  setSelectedUploadedDoc(doc);
                                  setDocId(null);
                                  setDocTitle(null);
                                  setResult(null);
                                  setError(null);
                                  if (doc.isNew) {
                                    fetch(`/api/archive/${doc.id}`, {
                                      method: 'PUT',
                                      headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify({ isNew: false })
                                    }).then(() => {
                                      doc.isNew = false;
                                      setArchive(prev => prev.map(d => d.id === doc.id ? { ...d, isNew: false } : d));
                                    }).catch(err => console.error(err));
                                  }
                                }}
                                className={`p-2 rounded-lg border text-xs flex flex-col gap-1 transition-all cursor-pointer ${
                                  selectedUploadedDoc && selectedUploadedDoc.id === doc.id
                                    ? 'bg-blue-500/10 border-blue-500/30'
                                    : 'bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10'
                                }`}
                              >
                                <div className="font-semibold truncate text-slate-900 dark:text-slate-100 flex items-center justify-between gap-1.5">
                                  <span className="truncate">{doc.customName}</span>
                                  <span className="bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.2 rounded uppercase shrink-0 animate-pulse">
                                    Ny
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-[9px] text-slate-400">
                                  <span>{doc.fileType}</span>
                                  <span>{new Date(doc.createdAt).toLocaleDateString('sv-SE')}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {historicalDocs.length > 0 && (
                        <div>
                          <div className="text-[10px] uppercase font-bold text-slate-500 mb-1.5 tracking-wider">
                            Historiska ritningar ({historicalDocs.length})
                          </div>
                          <div className="space-y-1.5">
                            {historicalDocs.map((doc) => (
                              <div 
                                key={doc.id}
                                onClick={() => {
                                  setSelectedUploadedDoc(doc);
                                  setDocId(null);
                                  setDocTitle(null);
                                  setResult(null);
                                  setError(null);
                                }}
                                className={`p-2 rounded-lg border text-xs flex flex-col gap-1 transition-all cursor-pointer ${
                                  selectedUploadedDoc && selectedUploadedDoc.id === doc.id
                                    ? 'bg-blue-500/10 border-blue-500/30'
                                    : 'bg-white/40 dark:bg-slate-950/10 border-white/25 dark:border-slate-850 hover:bg-white/80 dark:hover:bg-slate-950/30'
                                }`}
                              >
                                <div className="font-medium truncate text-slate-800 dark:text-slate-205">
                                  {doc.customName}
                                </div>
                                <div className="flex items-center justify-between text-[9px] text-slate-400">
                                  <span>{doc.fileType}</span>
                                  <span>{new Date(doc.createdAt).toLocaleDateString('sv-SE')}</span>
                                </div>
                              </div>
                            ))}
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
                                className="p-2 rounded-lg border border-rose-500/25 bg-rose-500/5 text-xs"
                              >
                                <div className="font-medium truncate text-rose-600 dark:text-rose-400">
                                  {doc.customName}
                                </div>
                                <div className="text-[9px] text-rose-450 mt-0.5">
                                  Tolkning misslyckades.
                                </div>
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
              </>
            ) : (
              <>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <FileCode className="h-4 w-4 text-blue-500" />
                    Sparade makron
                  </CardTitle>
                  <CardDescription className="dark:text-slate-400">
                    Visa historik och ladda ner tidigare genererade SolidWorks-makron.
                  </CardDescription>
                </CardHeader>
                <CardContent className="overflow-y-auto flex-1 p-0 px-6 pb-4">
                  <div className="space-y-2 mt-2">
                    {macrosList.map((macro) => (
                      <div
                        key={macro.id}
                        onClick={() => {
                          setSelectedMacroId(macro.id || null);
                          setResult(macro);
                          if (typeof window !== 'undefined' && macro.id) {
                            localStorage.setItem('activeMacroId', macro.id);
                          }
                        }}
                        className={`p-2.5 rounded-lg border text-xs flex flex-col gap-1.5 transition-all cursor-pointer relative group ${
                          selectedMacroId === macro.id
                            ? 'bg-blue-500/10 border-blue-500/30'
                            : 'bg-white/40 dark:bg-slate-950/10 border-white/25 dark:border-slate-850 hover:bg-white/80 dark:hover:bg-slate-950/30'
                        }`}
                      >
                        <div className="flex justify-between items-start gap-2 pr-5">
                          <div className="font-semibold truncate text-slate-900 dark:text-slate-100 font-mono text-[11px] leading-tight">
                            {macro.fileName || 'Genererar...'}
                          </div>
                          {macro.status === 'pending' ? (
                            <Loader2 className="h-3 w-3 animate-spin text-blue-500 shrink-0 mt-0.5" />
                          ) : macro.status === 'failed' ? (
                            <XCircle className="h-3 w-3 text-rose-500 shrink-0 mt-0.5" />
                          ) : (
                            <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0 mt-0.5" />
                          )}
                        </div>
                        
                        {macro.docTitle && (
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                            Källa: {macro.docTitle}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between text-[9px] text-slate-400 mt-0.5">
                          <span className="truncate max-w-[120px] italic">
                            {macro.prompt}
                          </span>
                          <span className="shrink-0">
                            {macro.createdAt ? new Date(macro.createdAt).toLocaleString('sv-SE', {
                              month: 'numeric',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            }) : ''}
                          </span>
                        </div>
                        
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (macro.id) {
                              if (confirm(`Vill du ta bort makrot "${macro.fileName || 'detta makro'}"?`)) {
                                deleteMacro(macro.id);
                              }
                            }
                          }}
                          className="absolute right-2 top-2 p-1 text-slate-400 hover:text-rose-500 rounded bg-slate-100/50 hover:bg-rose-500/10 border border-slate-200/50 dark:border-slate-800 dark:bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Ta bort makro"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    {macrosList.length === 0 && (
                      <div className="text-center py-12 text-slate-400 dark:text-slate-500 text-xs">
                        Inga sparade makron hittades.
                      </div>
                    )}
                  </div>
                </CardContent>
              </>
            )}
          </Card>
        </div>

        {selectedUploadedDoc ? (
          <>
            {/* Column 2: Document Preview Card (5/12 cols) */}
            <div className="lg:col-span-5 h-[620px] flex flex-col">
              {renderPreviewCard()}
            </div>

            {/* Column 3: Stacked Prompt and Output cards (4/12 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6 h-[620px]">
              {renderPromptCard(true)}
              {renderOutputCard(false)}
            </div>
          </>
        ) : (
          <>
            {/* Column 2: Input panel (4/12 cols) */}
            <div className="lg:col-span-4 flex flex-col h-[620px]">
              {renderPromptCard(false)}
            </div>

            {/* Column 3: Output & Preview panel (5/12 cols) */}
            <div className="lg:col-span-5 h-[620px] flex flex-col">
              {renderOutputCard(true)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
