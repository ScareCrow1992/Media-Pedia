// components/ReviewModal.tsx
import React from "react";
import ModalPortal from "../../ModalPortal";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (text: string) => void;
}

export default function ReviewModal({ isOpen, onClose, onSubmit }: ReviewModalProps) {
  const [text, setText] = React.useState("");
  const [rating, setRating] = React.useState(5.0);

  if (!isOpen) return null;

  return (

    <ModalPortal>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 relative">


          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
              <h2 className="text-xl font-bold mb-4">리뷰 작성</h2>

              <label className="block mb-2">별점</label>
              <select
                className="w-full border p-2 rounded mb-4"
                value={rating}
                onChange={(e) => setRating(parseFloat(e.target.value))}
              >
                {Array.from({ length: 10 }).map((_, i) => {
                  const value = (i + 1) * 0.5;
                  return <option key={value} value={value}>{value.toFixed(1)} 점</option>;
                })}
              </select>

              <textarea
                className="w-full h-32 border p-2 rounded mb-4 resize-none"
                placeholder="코멘트를 작성해주세요"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <div className="flex justify-end gap-2">
                <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">취소</button>
                <button
                  onClick={() => onSubmit(text)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  등록
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </ModalPortal>

  );
}