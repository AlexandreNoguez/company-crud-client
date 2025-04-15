import {
  Box,
  Container,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from '@mui/material';

import Header from './shared/components/Header';
import AppRoutes from './presentation/routes/AppRoutes';
import { useAppTheme } from './shared/hooks/useAppTheme';
import getTheme from './presentation/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer draggable position="bottom-right" />
    </ThemeProvider>
  );
}

export default App;
