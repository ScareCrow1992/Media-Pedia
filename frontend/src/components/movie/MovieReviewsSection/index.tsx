import { fetchGetPreviewReviewsForMovie } from "src/apis/review";
import { ReviewDTO } from "src/apis/review/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ReviewCard from "src/components/review/ReviewCard";


export default function MovieReviewsSection() {

  const { id } = useParams();
  // if(!id)
  //     return(<></>);

  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery<ReviewDTO[]>({
    queryKey: ['review', id],
    queryFn: () => fetchGetPreviewReviewsForMovie(id ? id.toString() : "1", "8")
  });


  if (isLoading) {
    return <div className="text-white text-center mt-10">로딩 중...</div>;
  }
  if (isError || !reviews) {
    return <div className="text-red-500 text-center mt-10">리뷰 정보를 불러올 수 없습니다.</div>;
  }


  // reviews?.map(review => { console.log(JSON.stringify(review)) })

  const padding = "p-[0.25rem]"
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2">
        {
          reviews?.map(review => (
            <div key={review.id} className={`h-[21rem] ${padding}`}>
              <ReviewCard review_card_url={`/review_detail/${review.id}`} review={review} />
            </div>
          ))
        }
      </div>
    </>
  );
}