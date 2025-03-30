import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CustomTypography from './CustomTypography';
import { ThemeToggleButton } from './ThemeToggleButton';
import {
  ROUTE_EMPRESAS,
  ROUTE_EMPRESAS_CADASTRAR,
  ROUTE_HOME,
} from '../constants/headerRoutes';

export default function Header() {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomTypography
          variant="h6"
          component={RouterLink}
          to={ROUTE_HOME}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          Projeto Empresas - KPMG
        </CustomTypography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={RouterLink} to={ROUTE_EMPRESAS} color="inherit">
            Listar Empresas
          </Button>
          <Button
            component={RouterLink}
            to={ROUTE_EMPRESAS_CADASTRAR}
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
