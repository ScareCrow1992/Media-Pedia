import { CreateReviewCommentDto, ReviewDTO, ToggleReviewLikeResponseDto } from "src/apis/review/types";
import LikeToggleButton from "../common/LikeToggleButton";
import { fetchPostComment, fetchToggleReviewLike } from "src/apis/review";
import { useState } from "react";
import CommentButton from "../common/Comment";
import CommentModal from "../common/Modal/modals/CommentModal";
import CommentModalV2 from "../common/Modal/modals/CommentModalV2";


interface Prop {
  review: ReviewDTO
}

export default function ReviewCard({ review }: Prop) {
  // console.log(review.likes_count);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCommentClicked = () => {
    setIsModalOpen(current_state => !current_state);
  }

  // ReviewCard가 "좋아요" 버튼의 상태를 직접 관리한다.
  // 상태 변경시 최대한 동일 배치내에 렌더링이 재수행 되도록 코드 설계 할 것
  const [isLiked, setIsLiked] = useState(review.is_liked);
  const [likeCnt, setLikeCnt] = useState(review.likes_count)

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
      const result: ToggleReviewLikeResponseDto = await fetchToggleReviewLike(review.id);

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
    <div className="flex flex-col w-full h-full rounded-lg overflow-hidden bg-white shadow">
      {/* 헤더 영역 */}
      <div className="flex items-center justify-between px-4 h-16 bg-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <span className="text-sm font-medium">{review.nickname}</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-400">★</span>
          <span className="font-semibold">{review.rating / 2}</span>
        </div>
      </div>

      {/* 내용 */}
      <div className="px-4 py-3 text-sm leading-relaxed grow line-clamp-3">
        {review.content}
      </div>

      {/* 하단 기능 바 */}
      <div className="flex flex-col bg-gray-50 border-t">
        <div className="flex items-center h-10 px-4 text-xs gap-4 text-gray-600">
          <div>
            좋아요 <span className="ml-1">{likeCnt}</span>
          </div>
          <div>
            댓글 <span className="ml-1">{review.comments_count}</span>
          </div>
        </div>

        {/* 첨부 이미지 썸네일 */}
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="w-12 h-12">
            <LikeToggleButton isLiked={isLiked} onToggle={handleToggle} />
          </div>
          <div className="w-12 h-12">
            <CommentButton onClicked={onCommentClicked} />
          </div>
          <div className="w-12 h-12 bg-gray-300 rounded" />
          <div className="w-12 h-12 bg-gray-300 rounded ml-auto" />
        </div>
      </div>
      {/* 코멘트 모달 */}

      {
        isModalOpen && (
          <CommentModalV2
            review_id={review.id}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={(text) => {

              const comment_data: CreateReviewCommentDto = {
                content: text,
              }

              fetchPostComment(review.id, comment_data);
              setIsModalOpen(false);
            }}
          />

        )
      }


      {/* <CommentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(text) => {

          const comment_data : CreateReviewCommentDto = {
            content: text,
          }

          fetchPostComment(review.id, comment_data);


          // if (user) {
          //   let createReviewDTO: CreateReviewDTO = {
          //     rating: rating * 2,
          //     content: text,
          //     movie_id: toInt(movie.id),
          //     user_id: user.id
          //   };

          //   fetchCreateReview(createReviewDTO);
          // }

          // 
          setIsModalOpen(false);
        }}
      /> */}
    </div>
  );
}