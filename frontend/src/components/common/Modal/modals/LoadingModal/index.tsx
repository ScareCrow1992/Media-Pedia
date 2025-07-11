// src/components/common/LoadingModal.tsx
import ModalPortal from "../../ModalPortal";

export default function LoadingModal({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <ModalPortal>
      <div className="fixed inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>,
      document.getElementById('modal-root')!
    </ModalPortal>
  );
}
