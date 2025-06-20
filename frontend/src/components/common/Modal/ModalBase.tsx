import { ReactNode } from "react";
import ModalPortal from "./ModalPortal";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export default function ModalBase({ children, onClose }: Props) {
  return (
    <ModalPortal>
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-xl shadow-lg p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-black"
            onClick={onClose}
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}