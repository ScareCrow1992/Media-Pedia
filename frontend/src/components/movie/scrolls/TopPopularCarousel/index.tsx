import { fetchGetLatestMovies, MovieListResponse } from "src/apis/services/movie";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import HorizontalScroller from "src/components/common/HorizontalScrollerProps";
import MovieCard from "src/components/common/MovieCard";
import { useEffect, useRef, useState } from "react";
import FadeInGlobal from "src/components/common/FadeInGlobal";
import MovieCardSkeleton from "src/components/common/MovieCard/MovieCardSkeleton";


export default function TopPopularCarousel() {

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
          <div className="flex">
            {Array.from({ length: 6 }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))}
          </div>
        ) : isError ? (
          <div className="text-center text-red-500 mt-10">영화 정보를 불러올 수 없습니다.</div>
        ) : allMovies.length === 0 ? (
          <div className="text-center text-gray-400 mt-10">아직 영화가 없습니다.</div>
        ) : (
          <>
            {allMovies.map((movie_dto, i) => (

              <FadeInGlobal key={movie_dto.id}>
                <MovieCard key={movie_dto.id} dto={movie_dto} linkUrl="/movies"
                  bottomInfo={<div className="flex gap-1 tracking-tight items-center text-[#7E7E7E]">
                    <span className="text-xs font-NatoSansKR">평균</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M5.651 1.806a.375.375 0 0 1 .673 0l1.361 2.759a.13.13 0 0 0 .094.068l3.044.442c.308.045.43.423.208.64L8.828 7.862a.13.13 0 0 0-.036.11l.52 3.032a.375.375 0 0 1-.544.395L6.046 9.97a.13.13 0 0 0-.117 0l-2.722 1.43a.375.375 0 0 1-.544-.395l.52-3.031a.13.13 0 0 0-.036-.111L.944 5.715a.375.375 0 0 1 .208-.64l3.044-.442a.13.13 0 0 0 .094-.068z"></path></svg>

                    <span className="text-xs font-NatoSansKR">2.5</span>
                  </div>}
                />
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