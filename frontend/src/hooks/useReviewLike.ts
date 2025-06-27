import { useState } from "react";
import { fetchToggleReviewLike } from "src/apis/services/review";
import { ToggleReviewLikeResponseDto } from "src/apis/services/review/types";

export function useReviewLike(reviewId: number, initialIsLiked: boolean, initialLikeCount: number) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likeCnt, setLikeCnt] = useState<number>(initialLikeCount);

  const toggle = async () => {
    const prev = isLiked;
    setIsLiked(!prev);
    setLikeCnt(cnt => cnt + (prev ? -1 : 1));

    try {
      const result: ToggleReviewLikeResponseDto = await fetchToggleReviewLike(reviewId);
      if (result.liked !== !prev) setIsLiked(result.liked);
      if (result.like_count !== likeCnt) setLikeCnt(result.like_count);
    } catch (e) {
      setIsLiked(prev);
      console.error("좋아요 토글 실패", e);
    }
  };

  return { isLiked, likeCnt, toggle };
}