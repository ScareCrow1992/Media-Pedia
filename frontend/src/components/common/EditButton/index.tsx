import { useState } from "react";
import { Pencil } from "lucide-react";

interface EditButton {
  onClick: () => void;
  className: string
}

export default function EditButton({ onClick, className }: EditButton) {
  return (
    <button
      onClick={onClick}
      className={`gap-1 ${className}`}
    >
      <Pencil className={`w-full h-full transition-colors text-gray-400 hover:text-black`}/>
    </button>
  );
}