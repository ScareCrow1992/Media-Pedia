import { fetchGetPreviewReviewsForMovie } from "src/apis/services/review";
import { ReviewDTO } from "src/apis/services/review/types";
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
      {/* 모바일 가로: 수평 스크롤 */}
      <div className="block sm:hidden overflow-x-auto snap-x snap-mandatory">
        <div className="flex w-full ㅈ-">
          {reviews?.map((review, idx) => (
            <div key={review.id} className="snap-start w-full shrink-0 px-4 py-3">
              <div className="h-[21rem]">
                <ReviewCard
                  review_card_url={`/review_detail/${review.id}`}
                  review={review}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 태블릿 이상: 고정형 그리드 */}
      <div className="hidden sm:grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 ">
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