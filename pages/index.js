// pages/index.js or app/page.js (depending on if you're using App Router)
'use client';  // Add this if using App Router
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('../components/Globe'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Globe />
    </main>
  );
}