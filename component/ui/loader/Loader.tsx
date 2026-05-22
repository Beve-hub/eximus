'use client';

import { FaCog } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

interface GearLoaderProps {
  isLoading: boolean;
  size?: number;
  text?: string;
}

export default function Loader({
  isLoading,
  size = 80,
  text = 'Loading...',
}: GearLoaderProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
  if (timerRef.current !== null) {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }

  if (isLoading) {
    // Defer to avoid synchronous setState inside effect
    timerRef.current = setTimeout(() => setVisible(true), 0);
  } else {
    // Delay hide to allow fade-out animation
    timerRef.current = setTimeout(() => setVisible(false), 7000);
  }

  return () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }
  };
}, [isLoading]);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .gear-spin {
          animation: spin-slow 1.5s linear infinite;
        }
      `}</style>

      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-green-600/95 backdrop-blur-sm transition-opacity duration-300"
        style={{
          opacity: isLoading ? 1 : 0,
          // KEY FIX: never block pointer events so clicks still register
          pointerEvents: isLoading ? 'all' : 'none',
        }}
        role="status"
        aria-live="polite"
        aria-label={text}
      >
        <div className="flex flex-col items-center gap-6 text-white">
          <div className="gear-spin" style={{ width: size, height: size }}>
            <FaCog size={size} className="text-white drop-shadow-lg" />
          </div>

          {text && (
            <p className="text-lg font-medium tracking-wider text-white/90">
              {text}
            </p>
          )}
        </div>
      </div>
    </>
  );
}