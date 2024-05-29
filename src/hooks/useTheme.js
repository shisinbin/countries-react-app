import React from 'react';
import { lightTheme, darkTheme } from '../themes';

export const useTheme = () => {
  const [theme, setTheme] = React.useState(
    () => window.localStorage.getItem('preferred-mode') || 'light'
  );

  const themeToggler = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  React.useEffect(() => {
    window.localStorage.setItem('preferred-mode', theme);
  }, [theme]);

  return {
    theme,
    themeToggler,
    currentTheme: theme === 'light' ? lightTheme : darkTheme,
  };
};
