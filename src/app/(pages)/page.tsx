'use client';

import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-4xl font-medium">Hello world</h1>
      <button
        className="cursor-pointer"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        switch theme
      </button>
    </div>
  );
}
