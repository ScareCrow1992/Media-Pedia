// hooks/useCommentModal.ts
import { useState } from "react";

export function useCommentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(prev => !prev);
  const close = () => setIsOpen(false);
  return { isOpen, toggle, close };
}