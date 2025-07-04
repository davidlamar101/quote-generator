import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark');
      setIsDark(!isDark);
      localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    }
  };

useEffect(() => {
  if (typeof document !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }
}, []);

  return (
<button
  onClick={toggleTheme}
  className="theme-toggle"
  style={{
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000
  }}
>
  {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
</button>

  );
}
