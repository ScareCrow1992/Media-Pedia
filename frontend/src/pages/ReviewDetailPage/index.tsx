import { fetchGetReview } from "src/apis/review";
import { ReviewDTO } from "src/apis/review/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ReviewCard from "src/components/review/ReviewCard";
import ReviewDetailPage_ReviewSection from "./components/ReviewDetailPage_ReviewSection";
import ReviewDetailPage_CommentsSection from "./components/ReviewDetailPage_CommentsSection";


export default function ReviewDetailPage() {
  const { review_id } = useParams();

  // console.log("review_id", review_id);

  if (!review_id) {
    return <div>잘못된 리뷰 id 입니다.</div>
  }


  return (
    <div className="mx-auto flex flex-col w-full max-w-screen-xl justify-center">
      <div className="mt-navH flex flex-col w-full max-w-screen-xl justify-center gap-4">
        <ReviewDetailPage_ReviewSection review_id={review_id} />
        <ReviewDetailPage_CommentsSection review_id={Number(review_id)}/>
      </div>
    </div>
  )
}