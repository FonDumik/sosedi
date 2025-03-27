import {useCallback, useState} from 'react';

export type TUseToggle = {
  isOpen: boolean;
  toggle: () => void;
  update: (newValue: boolean) => void;
  onClose: () => void;
  onOpen: () => void;
};

export const useToggle = (initialValue = false): TUseToggle => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const onClose = useCallback(() => setIsOpen(false), []);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const toggle = useCallback(() => setIsOpen((newValue) => !newValue), []);
  const update = useCallback((newValue: boolean) => setIsOpen(newValue), []);

  return {isOpen, toggle, update, onClose, onOpen};
};
