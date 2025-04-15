import { create } from 'zustand';
import { PaletteMode } from '@mui/material';

interface ThemeState {
  currentTheme: PaletteMode;
  toggleTheme: () => void;
}

/**
 *
 * @returns the initial theme mode based on localStorage or default to 'light'
 */
const getInitialTheme = (): PaletteMode => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('app-theme') as PaletteMode) || 'light';
  }
  return 'light';
};

/**
 * useAppTheme is a Zustand store for managing the application's theme.
 * It provides the current theme and a method to toggle between light and dark modes.
 */
export const useAppTheme = create<ThemeState>((set, get) => ({
  currentTheme: getInitialTheme(),
  toggleTheme: () => {
    const newTheme = get().currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('app-theme', newTheme);
    set({ currentTheme: newTheme });
  },
}));
