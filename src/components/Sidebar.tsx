'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FileCheck, FileCode, BookOpen, History } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-[250px] flex-col bg-white dark:bg-zinc-950 border-r border-slate-200 dark:border-zinc-800/60 text-slate-800 dark:text-zinc-100">
      <div className="flex flex-col pt-10 pb-6 border-b border-slate-100 dark:border-zinc-800 px-6 justify-center">
        <div className="flex items-center gap-2 font-semibold justify-center w-full">
          <Image
            src="/logo.png"
            alt="Skyddsprodukter"
            width={170}
            height={45}
            className="object-contain opacity-95"
            priority
          />
        </div>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-4">
          <Link
            href="/compliance"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-zinc-50 ${
              pathname === "/compliance" || pathname === "/"
                ? "bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-zinc-50 font-medium"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            <FileCheck className="h-4 w-4 text-blue-500" />
            Regelkontroll
          </Link>
          <Link
            href="/macros"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-zinc-50 ${
              pathname === "/macros"
                ? "bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-zinc-50 font-medium"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            <FileCode className="h-4 w-4 text-indigo-500" />
            SolidWorks-makron
          </Link>
          <Link
            href="/manual"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-zinc-50 ${
              pathname === "/manual"
                ? "bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-zinc-50 font-medium"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            <BookOpen className="h-4 w-4 text-emerald-500" />
            Användarmanual
          </Link>
          <Link
            href="/versions"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-zinc-50 ${
              pathname === "/versions"
                ? "bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-zinc-50 font-medium"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            <History className="h-4 w-4 text-amber-500" />
            Versionshistorik
          </Link>
        </nav>
      </div>
    </div>
  );
}
