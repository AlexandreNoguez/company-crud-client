import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useAppTheme } from '../stores/useAppTheme';

export function ThemeToggleButton() {
  const { currentTheme, toggleTheme } = useAppTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {currentTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
