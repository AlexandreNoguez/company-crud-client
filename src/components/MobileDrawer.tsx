import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ThemeToggleButton } from './ThemeToggleButton';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; to: string }[];
}

export default function MobileDrawer({
  open,
  onClose,
  links,
}: MobileDrawerProps) {
  return (
    <Drawer anchor="bottom" open={open} onClose={onClose}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>
          {links.map(({ label, to }) => (
            <ListItem key={to} disablePadding>
              <ListItemButton component={RouterLink} to={to}>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem>
            <ThemeToggleButton />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
