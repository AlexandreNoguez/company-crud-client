import { createTheme, PaletteMode } from '@mui/material';

const commonSettings = {
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
};

const lightPalette = {
  mode: 'light' as const,
  primary: {
    main: '#1976d2',
  },
  secondary: {
    main: '#9c27b0',
  },
  background: {
    default: '#f5f5f5',
    paper: '#fff',
  },
  text: {
    primary: '#000',
    secondary: '#333',
  },
};

const darkPalette = {
  mode: 'dark' as const,
  primary: {
    main: '#90caf9',
  },
  secondary: {
    main: '#ce93d8',
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },
  text: {
    primary: '#fff',
    secondary: '#bbb',
  },
};

const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: mode === 'light' ? lightPalette : darkPalette,
    ...commonSettings,
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: '1rem',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 6,
          },
        },
      },
    },
  });

export default getTheme;
