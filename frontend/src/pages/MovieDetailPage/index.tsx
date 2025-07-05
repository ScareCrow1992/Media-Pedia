import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { fetchMovieById } from "src/apis/services/movie";
import { MovieDetailDTO } from "src/apis/services/movie/types";
import { MovieContext } from "src/contexts/MoviePageContext";
import PageSection from "src/components/common/Layout/PageSection";
import MovieHeaderSection from "src/components/movie/MovieHeaderSection";
import MovieInfoSection from "src/components/movie/MovieInfoSection";
import CastAndCrewSection from "src/components/movie/CastAndCrewSection";
import MovieReviewsSection from "src/components/movie/MovieReviewsSection";
import { useEffect, useState } from "react";
import LoadingModal from "src/components/common/Modal/modals/LoadingModal";

export default function MovieDetailPage() {
  const { id } = useParams();

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery<MovieDetailDTO>({
    queryKey: ['movie', id],
    queryFn: () => fetchMovieById(id!),
    enabled: !!id,
    retry: 2
  });

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (!isLoading && movie) {
      timer = setTimeout(() => {
        setShowLoading(false);
      }, 300); // 페이드 아웃 타이밍
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isLoading, movie]);


  // if(!movie){
  //   return <div className="text-red-500 text-center mt-10">영화 정보를 불러올 수 없습니다.</div>;
  // }

  if (isError || (!isLoading && !movie)) {
    return <div className="text-red-500 text-center mt-10">영화 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <div className="relative">
      {/* 로딩 모달 */}
      <LoadingModal show={showLoading} />

      {/* 실제 콘텐츠 */}
      {movie && (
        <div className={`transition-opacity duration-700 ${showLoading ? 'opacity-0' : 'opacity-100'}`}>
          <MovieContext.Provider value={{ movie }}>
            <MovieHeaderSection />
            <PageSection>
              <MovieInfoSection />
            </PageSection>

            <PageSection title="출연/제작" marginY="my-20">
              <CastAndCrewSection />
            </PageSection>

            <PageSection title="리뷰" link={`/reviews/${id}`} marginY="my-20">
              <MovieReviewsSection />
            </PageSection>
          </MovieContext.Provider>
        </div>
      )}

    </div>
  );
}
