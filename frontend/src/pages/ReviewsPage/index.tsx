import ReviewCard from "src/components/review/ReviewCard";
import { useParams } from "react-router-dom";
import { ReviewDTO } from "src/apis/services/review/types";
import { useQuery } from "@tanstack/react-query";
import { fetchGetPreviewReviewsForMovie } from "src/apis/services/review";

export default function ReviewsPage() {

  const { id } = useParams();

  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery<ReviewDTO[]>({
    queryKey: ['review', id],
    queryFn: () => fetchGetPreviewReviewsForMovie(id ? id.toString() : "1", "100")
  });


  if (isLoading) {
    return <div className="text-white text-center mt-10">로딩 중...</div>;
  }
  if (isError || !reviews) {
    return <div className="text-red-500 text-center mt-10">리뷰 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <>
      <div className="mt-navH w-full flex justify-center">
        <div className="flex flex-col gap-[1rem] w-[42rem]">
          <div className="h-[2rem]"/>
          <h1  className="text-3xl tracking-tight font-NatoSansKR font-bold mb-4">리뷰</h1>
          <div className="h-[2rem]"/>
          {
            reviews?.map(review => (
              <div key={review.id} className="h-[17rem] p-[0.25rem]">
                <ReviewCard review_card_url={`/review_detail/${review.id}`} review={review} />
              </div>
            ))
          }
        </div>
      </div>

    </>
  );
}