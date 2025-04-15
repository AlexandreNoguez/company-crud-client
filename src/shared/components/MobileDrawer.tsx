import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { ThemeToggleButton } from './ThemeToggleButton';
import CustomGrid from './CustomGrid';

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
      <CustomGrid role="presentation" onClick={onClose} onKeyDown={onClose}>
        <List>
          {links.map(({ label, to }) => (
            <ListItem key={to} disablePadding>
              <ListItemButton component={RouterLink} to={to}>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem>
            <ThemeToggleButton sx={{ alignSelf: 'center' }} />
          </ListItem>
        </List>
      </CustomGrid>
    </Drawer>
  );
}
