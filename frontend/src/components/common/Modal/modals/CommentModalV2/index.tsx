import { fetchGetReviewCommends } from "src/apis/review";
import { ReviewCommentDto } from "src/apis/review/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ReviewComment from "src/components/common/ReviewComment";


interface CommentModalV2Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (content: string) => void;
  review_id: number
}


export default function CommentModalV2({
  review_id,
  isOpen,
  onClose,
  onSubmit,
}: CommentModalV2Props) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content.trim());
      setContent("");
    }
  };

  // useQuery를 사용해서 코멘트목록 불러오기
  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery<ReviewCommentDto[]>({
    queryKey: ['review_comment', review_id],
    queryFn: () => fetchGetReviewCommends(review_id, 10)
  });


  if (!isOpen) return null;

  if (isLoading) {
    return <div className="text-white text-center mt-10">로딩 중...</div>;
  }
  if (isError || !comments) {
    return <div className="text-red-500 text-center mt-10">리뷰 정보를 불러올 수 없습니다.</div>;
  }


  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[640px] max-h-[75vh] rounded-2xl relative flex flex-col overflow-hidden">

        {/* 상단 헤더 */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-bold">댓글</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-xl">×</button>
        </div>

        {/* 댓글 리스트 (스크롤 영역) */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {comments.map(comment => (
            <ReviewComment key= {comment.comment_id} reviewCommentDto = {comment} />
          ))}
        </div>

        {/* 하단 고정 입력창 */}
        <div className="px-6 py-4 border-t bg-white sticky bottom-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="flex items-center gap-2"
          >
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="리뷰에 댓글을 남겨보세요"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none"
            />
            <button
              type="submit"
              disabled={!content.trim()}
              className={`px-4 py-1.5 text-sm rounded-full text-white transition-colors ${content.trim() ? "bg-pink-500 hover:bg-pink-600" : "bg-pink-200 cursor-not-allowed"
                }`}
            >
              댓글
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}