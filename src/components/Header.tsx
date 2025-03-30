import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Box, IconButton } from '@mui/material';

import MobileDrawer from './MobileDrawer';
import { ThemeToggleButton } from './ThemeToggleButton';

import { useBreakpoints } from '../hooks/useBreakpoints';
import {
  ROUTE_EMPRESAS,
  ROUTE_EMPRESAS_CADASTRAR,
  ROUTE_HOME,
} from '../constants/headerRoutes';
import CustomNavLink from './CustomNavLink';
import CustomTypography from './CustomTypography';

const navLinks = [
  { label: 'Listar Empresas', to: ROUTE_EMPRESAS },
  { label: 'Cadastrar Empresa', to: ROUTE_EMPRESAS_CADASTRAR },
];
export default function Header() {
  const { isMobile } = useBreakpoints();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomNavLink to={ROUTE_HOME}>
          <CustomTypography variant="h6">
            Projeto Empresas - KPMG
          </CustomTypography>
        </CustomNavLink>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <MobileDrawer
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              links={navLinks}
            />
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <CustomNavLink to={ROUTE_EMPRESAS} color="inherit">
              Listar Empresas
            </CustomNavLink>
            <ThemeToggleButton />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
