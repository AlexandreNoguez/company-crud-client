import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import CustomButton from './CustomButton';

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  content?: string;
}

export default function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title = 'Confirmar ação',
  content = 'Tem certeza que deseja continuar?',
}: ConfirmDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: 'center' }}>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <CustomButton onClick={onClose} color="inherit">
          Cancelar
        </CustomButton>
        <CustomButton onClick={onConfirm} color="error" variant="contained">
          Confirmar
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
}
