import { fetchToggleReviewCommentLike } from "src/apis/services/review";
import { ReviewCommentDto, ToggleReviewCommentLikeResponseDto } from "src/apis/services/review/types";
import { useState } from "react";
import LikeToggleButton from "../LikeToggleButton";
import EllipsisMenu from "../EllipsisMenu";


interface ReviewCommentProp {
  reviewCommentDto: ReviewCommentDto
}


export default function ReviewComment({ reviewCommentDto }: ReviewCommentProp) {

  const [isLiked, setIsLiked] = useState(reviewCommentDto.is_liked);
  const [likeCnt, setLikeCnt] = useState(reviewCommentDto.likes_count)
  
  const comment = reviewCommentDto;

  // 낙관적 업데이트(Ooptimistic UI)
  const handleToggle = async () => {
    const prev = isLiked;

    setIsLiked(!prev); // 1️⃣ 즉시 UI 반영

    if (!prev) {
      setLikeCnt(currentLikeCount => currentLikeCount + 1)
    }
    else {
      setLikeCnt(currentLikeCount => currentLikeCount - 1)
    }

    try {
      const result: ToggleReviewCommentLikeResponseDto = await fetchToggleReviewCommentLike(comment.comment_id);

      // 2️⃣ 서버 결과와 실제 불일치하면 반영 (정합성 맞추기)
      if (result.liked !== !prev) {
        setIsLiked(result.liked);
      }
      if (result.like_count !== likeCnt)
        setLikeCnt(result.like_count);


    } catch (e) {
      // 3️⃣ 에러 발생 시 롤백
      setIsLiked(prev);
      console.error("좋아요 토글 실패", e);
    }
  };



  return (
    <div className="border-b pb-4">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
        <span className="font-semibold">{comment.nickname}</span>
        <span>•</span>
        <span className="text-xs text-gray-400">10년 전</span>
      </div>
      <p className="text-sm text-gray-800">{comment.content}</p>
      <div className="flex mt-1 text-sm text-gray-500 flex items-center gap-1">
        <span className="text-lg">
          <LikeToggleButton isLiked={isLiked} onToggle={handleToggle} />
        </span> 좋아요 {99}

        <EllipsisMenu className = "ml-auto">
          <span className="text-lg p-2">댓글 수정</span>
          <span className="text-lg p-2">댓글 삭제</span>
        </EllipsisMenu>

        {/* <Ellipsis className="ml-auto" /> */}
      </div>
    </div>
  );
}