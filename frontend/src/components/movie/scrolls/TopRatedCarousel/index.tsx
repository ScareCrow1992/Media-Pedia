import { fetchGetLatestMovies, MovieListResponse } from "src/apis/services/movie";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import HorizontalScroller from "src/components/common/HorizontalScrollerProps";
import MovieCard from "src/components/common/MovieCard";
import { useEffect, useRef, useState } from "react";
import FadeInGlobal from "src/components/common/FadeInGlobal";


export default function TopRatedCarousel() {

  /*
  const {
    data: movie_dtos,
    isLoading,
    isError,
  } = useQuery<MovieDetailDTO[]>({
    queryKey: ['TopPopularCarousel', 0],
    queryFn: () => fetchGetLatestMovies(12)
  });
  */

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError
  } = useInfiniteQuery<MovieListResponse, Error>({
    queryKey: ['TopPopularCarousel'],
    queryFn: ({ pageParam = 1 }) =>
      fetchGetLatestMovies({ page: pageParam as number, size: 12 }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasMore ? allPages.length + 1 : undefined,
    initialPageParam: 1
  });
  
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [observerRef, hasNextPage, fetchNextPage]);

  const allMovies = data?.pages.flatMap((page) => page.movies) ?? [];

  return (
    <>
      <HorizontalScroller>
        {isLoading ? (
          <div className="text-center text-gray-500 mt-10">불러오는 중...</div>
        ) : isError ? (
          <div className="text-center text-red-500 mt-10">영화 정보를 불러올 수 없습니다.</div>
        ) : allMovies.length === 0 ? (
          <div className="text-center text-gray-400 mt-10">아직 영화가 없습니다.</div>
        ) : (
          <>
            {allMovies.map((movie_dto, i) => (

              <FadeInGlobal key={movie_dto.id}>
                <MovieCard key={movie_dto.id} dto={movie_dto} linkUrl="/movies" />
              </FadeInGlobal>
            ))}
            <div ref={observerRef} className="w-[1px] h-[1px]" />
            {isFetchingNextPage && (
              <div className="flex items-center justify-center w-32 text-gray-400">
                로딩 중...
              </div>
            )}
          </>
        )}
      </HorizontalScroller>
    </>
  );
}