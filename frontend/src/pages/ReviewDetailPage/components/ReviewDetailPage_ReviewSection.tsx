import { fetchGetReview } from "src/apis/services/review";
import { ReviewDTO } from "src/apis/services/review/types";
import ReviewCard from "src/components/review/ReviewCard";
import { useQuery } from "@tanstack/react-query";


interface Props {
  review_id: string;
}



export default function ReviewDetailPage_ReviewSection({ review_id }: Props) {

  const {
    data: review,
    isLoading,
    isError,
  } = useQuery<ReviewDTO>({
    queryKey: ['review_detail', review_id],
    queryFn: () => fetchGetReview(review_id ? review_id.toString() : "1")
  });


  if (isLoading) {
    return <div className="text-white text-center mt-10">로딩 중...</div>;
  }
  if (isError || !review) {
    return <div className="text-red-500 text-center mt-10">리뷰 정보를 불러올 수 없습니다.</div>;
  }

  if (!review_id) {
    return <div>잘못된 리뷰 id 입니다.</div>
  }


  return (
    <>
      <ReviewCard review_card_url={null} review={review} />
    </>
  )
}