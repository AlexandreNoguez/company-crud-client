import { useState } from 'react';

export function useConfirmDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [onConfirm, setOnConfirm] = useState<() => void>(() => () => {});

  const openConfirm = (action: () => void) => {
    setIsOpen(true);
    setOnConfirm(() => action);
  };

  const closeConfirm = () => setIsOpen(false);

  return {
    isOpen,
    openConfirm,
    closeConfirm,
    onConfirm,
  };
}
