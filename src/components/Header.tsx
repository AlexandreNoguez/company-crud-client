import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CustomTypography from './CustomTypography';
import { ThemeToggleButton } from './ThemeToggleButton';

export default function Header() {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomTypography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          Projeto Empresas - KPMG
        </CustomTypography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={RouterLink} to="/empresas" color="inherit">
            Listar Empresas
          </Button>
          <Button
            component={RouterLink}
            to="/empresas/cadastrar"
            color="inherit"
          >
            Cadastrar Empresa
          </Button>

          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
