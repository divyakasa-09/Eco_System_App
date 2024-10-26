// app/page.js
'use client';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('@/components/Globe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-2xl">Loading Earth...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Globe />
    </main>
  );
}