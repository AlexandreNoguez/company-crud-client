import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from '@mui/material';

import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import { useAppTheme } from './stores/useAppTheme';
import getTheme from './themes';

function App() {
  const { currentTheme } = useAppTheme();

  const theme = getTheme(currentTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor: theme.palette.background.default,
          },
        })}
      />
      <Header />
      <Container maxWidth="lg">
        <Box mt={4}>
          <AppRoutes />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
