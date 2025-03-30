import { Box, CircularProgress } from '@mui/material';
import CustomTypography from './CustomTypography';

export default function FullScreenLoader({ message = 'Carregando...' }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <CircularProgress color="inherit" />
      <CustomTypography variant="h6" sx={{ mt: 2 }}>
        {message}
      </CustomTypography>
    </Box>
  );
}
