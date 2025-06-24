interface ConfirmModalProps {
  message: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({ message, isOpen, onConfirm, onCancel }: ConfirmModalProps) {

  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-80 text-center pt-4 px-4 pb-0">
        <h2 className="text-lg font-semibold mb-2">알림</h2>
        <p className="text-sm mb-6">{message}</p>
        <div className="flex border-t border-gray-200 divide-x">
          <button
            className="flex-1 py-3 text-pink-500 font-semibold"
            onClick={onCancel}
          >
            취소
          </button>
          <button
            className="flex-1 py-3 text-pink-500 font-semibold"
            onClick={onConfirm}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}