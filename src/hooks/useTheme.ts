import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setThemeState] = useState<Theme>('light');

  const setTheme = (newTheme: Theme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setThemeState(newTheme);
  };

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme') as Theme | null;

    if (saveTheme === 'light' || saveTheme === 'dark') {
      setTheme(saveTheme);
    } else {
      const prefersDark = window.matchMedia(
        'prefers-color-scheme: dark'
      ).matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  return [theme, setTheme];
}
