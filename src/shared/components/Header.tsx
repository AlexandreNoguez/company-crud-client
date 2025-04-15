import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Box, IconButton } from '@mui/material';

import MobileDrawer from './MobileDrawer';
import { ThemeToggleButton } from './ThemeToggleButton';

import { useBreakpoints } from '../hooks/useBreakpoints';
import {
  ROUTE_HOME,
  ROUTE_COMPANY,
  ROUTE_COMPANY_CREATE,
} from '../constants/headerRoutes';
import CustomNavLink from './CustomNavLink';
import CustomTypography from './CustomTypography';
import SeedButton from './CustomSeeder';

const navLinks = [
  { label: 'Listar Empresas', to: ROUTE_COMPANY },
  { label: 'Cadastrar Empresa', to: ROUTE_COMPANY_CREATE },
];
export default function Header() {
  const { isMobile } = useBreakpoints();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomTypography variant="h6" to={ROUTE_HOME}>
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
            <SeedButton />
            <CustomNavLink to={ROUTE_COMPANY} color="inherit">
              Listar Empresas
            </CustomNavLink>
            <ThemeToggleButton />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
