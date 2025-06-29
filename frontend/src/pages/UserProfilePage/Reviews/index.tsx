import { fetchGetUserReviewWithMovie } from "src/apis/services/profile";
import { UserReviewWithMovieDto } from "src/apis/services/profile/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import MovieReviewCard from "src/components/common/MovieReviewCard";



export default function UserReviewListPage() {
  const { id } = useParams();

  const {
    data: review_with_movie,
    isLoading,
    isError,
  } = useQuery<UserReviewWithMovieDto[]>({
    queryKey: ['review', id],
    queryFn: () => fetchGetUserReviewWithMovie(id ? id : "0")
  });


  if (isLoading) {
    return <div className="text-white text-center mt-10">로딩 중...</div>;
  }
  if (isError || !review_with_movie) {
    return <div className="text-red-500 text-center mt-10">리뷰 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <div className="mt-navH">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-xl font-bold mb-4">평가한 작품들</h2>

        {/* 반응형 그리드 레이아웃 (auto-fill로 자식의 너비 설정, truncate 사용 가능하게 만듬) */}
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(120px,1fr))]">
          {review_with_movie.map(({ review_dto, movie_dto }, key_) => {
            return (
              <div key={key_}>
                <MovieReviewCard review_dto={review_dto} movie_dto={movie_dto} linkUrl="/movies" />
              </div>
            )
          })}

        </div>
      </div>
    </div>

  );
}