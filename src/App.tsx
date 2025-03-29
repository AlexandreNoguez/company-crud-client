import { Box, Container } from '@mui/material';

import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Box mt={4}>
          <AppRoutes />
        </Box>
      </Container>
    </div>
  );
}

export default App;
