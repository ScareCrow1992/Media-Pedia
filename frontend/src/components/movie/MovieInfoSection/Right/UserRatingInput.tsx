import { useState } from "react";
import RatingSelector from "./RatingSelector";
import ReviewModal from "src/components/common/Modal/modals/ReviewModal";
import { fetchCreateReview } from "src/apis/services/review";
// import { useParams } from "react-router-dom";
import { CreateReviewDTO } from "src/apis/services/review/types"
import { MovieProps } from "src/types/movie";
import { useUserInfo } from "src/contexts/UserInfoContext";

function toInt(value: any): number {
  const num = parseInt(value, 10);
  return Number.isNaN(num) ? 0 : num;
}


export default function UserRatingInput({ movie }: MovieProps) {
  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useUserInfo();

  return (
    <>
      {/* 별점 선택 및 기타 요소 */}
      <div className="flex items-center justify-between h-24 px-4 rounded-lg bg-white shadow">
        <div className="w-72">
          <RatingSelector onChange={(val) => setRating(val)} />
        </div>
        {/* 추가 정보나 버튼을 배치할 수 있는 공간 (임시로 비워둠) */}
        {user && (
          <button
            className="px-6 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600"
            onClick={() => setIsModalOpen(true)}
          >
            코멘트 남기기
          </button>
        )}
      </div>

      {/* 코멘트 작성 안내 영역 */}
      <div className="flex items-center justify-between h-16 mt-4 px-6 rounded-lg bg-white shadow">
        <span className="text-sm text-gray-700">
          이 작품에 대한 {user?.nickname}님의 평가를 글로 남겨보세요.
        </span>

      </div>

      {/* 리뷰 모달 */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(text) => {
          if (user) {
            let createReviewDTO: CreateReviewDTO = {
              rating: rating * 2,
              content: text,
              movie_id: toInt(movie.id),
              user_id: user.id
            };

            fetchCreateReview(createReviewDTO);
          }

          // 
          setIsModalOpen(false);
        }}
      />
    </>
  );
}