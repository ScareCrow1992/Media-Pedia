import { fetchGetLatestMovies } from "src/apis/services/movie";
import { MovieDetailDTO } from "src/apis/services/movie/types";
import { useQuery } from "@tanstack/react-query";
import HorizontalScroller from "src/components/common/HorizontalScrollerProps";
import MovieCard from "src/components/common/MovieCard";




export default function TopPopularCarousel() {

  const {
    data: movie_dtos,
    isLoading,
    isError,
  } = useQuery<MovieDetailDTO[]>({
    queryKey: ['TopPopularCarousel', 0],
    queryFn: () => fetchGetLatestMovies(12)
  });



  // fetchGetLatestMovies(12)

  return (
    <>
      <HorizontalScroller>
        {isLoading ? (
          <div className="text-center text-gray-500 mt-10">불러오는 중...</div>
        ) : isError || !movie_dtos ? (
          <div className="text-center text-red-500 mt-10">영화 정보를 불러올 수 없습니다.</div>
        ) : movie_dtos.length === 0 ? (
          <div className="text-center text-gray-400 mt-10">아직 영화가 없습니다.</div>
        ) : (
          movie_dtos.map((movie_dto, i) => (
            <MovieCard key={i + 1}
              dto={movie_dto}
              linkUrl={"/movies"}
            />
          ))
        )}
      </HorizontalScroller>
    </>
  );

}