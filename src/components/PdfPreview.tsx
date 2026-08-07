'use client';

import React, { useEffect, useRef, useState } from 'react';

interface PdfPreviewProps {
  url: string;
  className?: string;
}

export default function PdfPreview({ url }: PdfPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [pageNum, setPageNum] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const renderTaskRef = useRef<any>(null);

  useEffect(() => {
    let active = true;
    
    const loadPdfJs = async () => {
      try {
        // @ts-ignore
        if (!window.pdfjsLib) {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
          script.async = true;
          document.body.appendChild(script);
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = () => reject(new Error('Kunde inte ladda PDF-motorn.'));
          });
        }
        
        // @ts-ignore
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        
        if (active) {
          await loadPdf();
        }
      } catch (err: any) {
        if (active) {
          setError(err.message || 'Kunde inte initiera PDF-läsaren.');
          setLoading(false);
        }
      }
    };

    const loadPdf = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // @ts-ignore
        const loadingTask = window.pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;
        
        if (active) {
          setPdfDoc(pdf);
          setNumPages(pdf.numPages);
          setPageNum(1);
          setLoading(false);
        }
      } catch (err: any) {
        if (active) {
          console.error("PDF loading error:", err);
          setError("Kunde inte läsa PDF-filen.");
          setLoading(false);
        }
      }
    };

    loadPdfJs();

    return () => {
      active = false;
    };
  }, [url]);

  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    let active = true;

    const renderPage = async () => {
      try {
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
        }

        const page = await pdfDoc.getPage(pageNum);
        if (!active) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext('2d');
        if (!context) return;

        const containerWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 600;
        const unscaledViewport = page.getViewport({ scale: 1 });
        const scale = (containerWidth - 24) / unscaledViewport.width; // 24px padding
        const viewport = page.getViewport({ scale: Math.max(scale, 0.5) });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;
        
        await renderTask.promise;
        renderTaskRef.current = null;
      } catch (err: any) {
        if (err.name !== 'RenderingCancelledException') {
          console.error("Page render error:", err);
        }
      }
    };

    renderPage();

    return () => {
      active = false;
    };
  }, [pdfDoc, pageNum]);

  const handlePrevPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNum < numPages) {
      setPageNum(pageNum + 1);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-500 dark:text-slate-400 text-xs">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mb-3" />
        Genererar visualisering av ritningen...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 text-red-500 text-xs font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center bg-slate-950/20 dark:bg-slate-900/40 rounded-md border border-slate-200 dark:border-slate-800/80 p-3 overflow-hidden">
      {numPages > 1 && (
        <div className="flex items-center gap-3 mb-3 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200">
          <button 
            type="button"
            onClick={handlePrevPage} 
            disabled={pageNum <= 1}
            className="hover:text-blue-600 dark:hover:text-blue-400 disabled:opacity-30 disabled:hover:text-slate-700 dark:disabled:hover:text-slate-200 transition-colors"
          >
            Föregående
          </button>
          <span className="text-slate-400">|</span>
          <span>Sida {pageNum} av {numPages}</span>
          <span className="text-slate-400">|</span>
          <button 
            type="button"
            onClick={handleNextPage} 
            disabled={pageNum >= numPages}
            className="hover:text-blue-600 dark:hover:text-blue-400 disabled:opacity-30 disabled:hover:text-slate-700 dark:disabled:hover:text-slate-200 transition-colors"
          >
            Nästa
          </button>
        </div>
      )}
      <div className="w-full overflow-x-auto flex justify-center bg-white dark:bg-slate-950 p-2 rounded-md border border-slate-200 dark:border-slate-900">
        <canvas ref={canvasRef} className="shadow-sm max-w-full bg-white" />
      </div>
    </div>
  );
}
