import { ReviewDTO, ToggleReviewLikeResponseDto } from "src/apis/review/types";
import LikeToggleButton from "../common/LikeToggleButton";
import { fetchToggleReviewLike } from "src/apis/review";



interface Prop {
  review: ReviewDTO
}

export default function ReviewCard({ review }: Prop) {

  const onSubmit = ()=>{
    fetchToggleReviewLike(review.id).then(res =>{
      console.log(res);
    })

  }

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
            좋아요 <span className="ml-1">1419</span>
          </div>
          <div>
            댓글 <span className="ml-1">20</span>
          </div>
        </div>

        {/* 첨부 이미지 썸네일 */}
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="w-12 h-12">
            <LikeToggleButton isLiked={false} onSubmit = {onSubmit} />
          </div>
          <div className="w-12 h-12 bg-gray-300 rounded" />
          <div className="w-12 h-12 bg-gray-300 rounded" />
          <div className="w-12 h-12 bg-gray-300 rounded ml-auto" />
        </div>
      </div>
    </div>
  );
}