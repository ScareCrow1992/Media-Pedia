import { useState } from "react";
import { Trash2 } from "lucide-react";

interface EditButton {
  onClick: () => void;
  className: string
}

export default function DeleteButton({ onClick, className }: EditButton) {
  return (
    <button
      onClick={onClick}
      className={`gap-1 ${className}`}
    >
      <Trash2 className={`w-full h-full transition-colors text-gray-400 hover:text-black`}/>
    </button>
  );
}