'use client';

import dynamic from 'next/dynamic';
// Removed react-icons to avoid build issues; using emoji instead

// Use dynamic import for the clock component as it requires client-side functionality
const AnalogClock = dynamic(() => import('../components/AnalogClock'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl flex flex-col items-center">
        <div className="text-center mb-[20px]">
          <p className="text-instruction">
            <span className="text-base tracking-[0.2em] uppercase font-light text-gray-400 dark:text-gray-500">
              Explore History
            </span>
            <span className="block  text-sm tracking-wide text-gray-500/60 dark:text-gray-400/60 font-light">
              Click any hour on the clock to discover moments in time
            </span>
          </p>
        </div>
        <div className="clock-wrapper mt-12">
          <AnalogClock />
        </div>
        
        
      </div>
    </div>
  );
}
