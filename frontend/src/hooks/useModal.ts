import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(prev => !prev);
  const close = () => setIsOpen(false);
  return { isOpen, toggle, close };
}