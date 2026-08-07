import './globals.css'
import type { Metadata } from 'next'
import { Sidebar } from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'MCF Skyddsrumsportal',
  description: 'Skyddsprodukter i Sverige AB - Automatiskt sök-, regelkontrolls- och makroverktyg för skyddsrum.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden text-slate-900 dark:text-slate-50 relative">
        {/* Glowing background circles for visual depth (Glassmorphism layout) */}
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-5%] h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-sky-400/25 to-blue-400/20 blur-[110px] dark:from-sky-500/10 dark:to-blue-500/10" />
          <div className="absolute bottom-[15%] right-[-5%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/15 blur-[120px] dark:from-indigo-500/10 dark:to-purple-500/10" />
          <div className="absolute top-[45%] right-[20%] h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-emerald-300/20 to-sky-300/15 blur-[90px] dark:from-emerald-500/10 dark:to-sky-500/10" />
        </div>

        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 bg-transparent relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
