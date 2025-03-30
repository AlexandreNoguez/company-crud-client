import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';

import CustomTypography from './CustomTypography';
import { ThemeToggleButton } from './ThemeToggleButton';
import { useBreakpoints } from '../hooks/useBreakpoints';
import MobileDrawer from './MobileDrawer';

import {
  ROUTE_EMPRESAS,
  ROUTE_EMPRESAS_CADASTRAR,
  ROUTE_HOME,
} from '../constants/headerRoutes';

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
        <CustomTypography
          variant="h6"
          component={RouterLink}
          to={ROUTE_HOME}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          Projeto Empresas - KPMG
        </CustomTypography>

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
            {navLinks.map(({ label, to }) => (
              <Button key={to} component={RouterLink} to={to} color="inherit">
                {label}
              </Button>
            ))}
            <ThemeToggleButton />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
