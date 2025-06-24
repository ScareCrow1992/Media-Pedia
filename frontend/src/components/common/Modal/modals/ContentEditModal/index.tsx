// components/ReviewModal.tsx
import React, { useState } from "react";
import ModalPortal from "../../ModalPortal";

interface ContentEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (text: string) => void;
}

export default function ContentEditModal({ isOpen, onClose, onSubmit }: ContentEditModalProps) {

  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content.trim());
    }
  };

  
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white w-[600px] max-w-[90vw] rounded-2xl p-6 relative shadow-xl">
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
          >
            ×
          </button>

          {/* 제목 */}
          <h2 className="text-xl font-bold mb-4">편집</h2>

          {/* 텍스트 에어리어 */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={`영화에 대한 생각을 자유롭게 표현해주세요.`}
            rows={8}
            maxLength={10000}
            className="w-full resize-none outline-none p-3 text-base text-gray-800 placeholder-gray-400 border border-gray-200 rounded-lg"
          />

          {/* 하단 글자 수 + 저장 버튼 */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">{content.length}/10000</span>

            <button
              disabled={!content.trim()}
              onClick={handleSubmit}
              className={`
              px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors
              ${content.trim()
                  ? "bg-pink-400 hover:bg-pink-500"
                  : "bg-pink-200 cursor-not-allowed"}
            `}
            >
              편집
            </button>
          </div>
        </div>
      </div>

    </ModalPortal>

  );
}