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
// import { fetchMovieById } from "src/apis/movie";


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

  if (isLoading) {
    return <div className="text-white text-center mt-10">로딩 중...</div>;
  }
  if (isError || !movie) {
    return <div className="text-red-500 text-center mt-10">영화 정보를 불러올 수 없습니다.</div>;
  }

  const sectionMarginX = [0, 1, 2, 3, 6];
  //className="absolute top-0 left-0 w-full"
  return (
    <div>
      <div>

        <MovieContext.Provider value={{ movie }}>

          <MovieHeaderSection />
          <PageSection marginX={sectionMarginX}>
            <MovieInfoSection />
          </PageSection>

          <PageSection
            title="출연/제작"
            marginX={sectionMarginX}
            marginY="my-20">
            <CastAndCrewSection />
          </PageSection>

          <PageSection
            title="리뷰"
            marginX={sectionMarginX}
            link={`/reviews/${id}`}
            marginY="my-20">
            <MovieReviewsSection />
          </PageSection>

        </MovieContext.Provider>

        {/* <div className="
        relative
        bg-cyan-500
        h-[34rem]
      ">
        <img className="w-full h-full object-cover object-top" src="/posters/interstellar_big.jpg" />

        <div className="absolute bottom-[0rem] m-[2rem] text-white">
          <h1 className="font-bold text-xl">{movie.title}</h1>
          <p>interstellar</p>
          <p>2014 · 모험/드라마/SF · 미국, 영국, 캐나다</p>
          <p>2시간 49분 · 12세</p>
        </div>
      </div> */}


{/* 
        <div>
          <div className="mx-[4rem] my-[2rem] ">
            <h1 className="text-2xl font-bold mb-4">갤러리</h1>
            <div className="h-[17rem] bg-teal-200">
              가로방향 스크롤로 미리보기 이미지 제공<br />
              my-... 지우기(높이 동적으로)
            </div>

            <p>선택된 영화 ID: <span className="text-pink-400 font-mono">{id}</span></p>

          </div>
        </div>


        <div className="bg-gray-200">
          <div className="mx-[4rem] my-[2rem] ">
            <h1 className="text-2xl font-bold mb-4">동영상</h1>
            <div className="h-[17rem] bg-teal-200">
              가로방향 스크롤로 유튜브 썸네일 제공<br />
              클릭시 유튜브 링크로 이동<br />
              my-... 지우기(높이 동적으로)
            </div>

            <p>선택된 영화 ID: <span className="text-pink-400 font-mono">{id}</span></p>

          </div>
        </div> */}
      </div>
    </div>
  );
}