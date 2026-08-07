'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/compliance');
  }, [router]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-50 dark:bg-zinc-950">
      <div className="text-slate-500 dark:text-slate-400 animate-pulse text-sm font-medium">
        Laddar...
      </div>
    </div>
  );
}
