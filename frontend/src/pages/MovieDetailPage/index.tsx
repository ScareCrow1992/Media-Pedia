import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { fetchMovieById } from "src/apis/movie";
import { MovieDetailDTO } from "src/apis/movie/types";
// import { fetchMovieById } from "@/apis/movie";


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
  });



  if (isLoading) {
    return <div className="text-white text-center mt-10">로딩 중...</div>;
  }
  if (isError || !movie) {
    return <div className="text-red-500 text-center mt-10">영화 정보를 불러올 수 없습니다.</div>;
  }


  console.log(movie.directors)
  // console.log(JSON.stringify(movie));

  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="
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
      </div>

      <div className="flex mx-[4rem] bg-gray-200">
        <div className="w-[20rem] my-[2rem]">
          <div className="
              relative rounded-lg overflow-hidden bg-zinc-500
              w-[12rem] h-[18rem]
              sm:w-[14rem] sm:h-[21rem]
              md:w-[16rem] md:h-[24rem]
              lg:w-[18rem] lg:h-[27rem]
              xl:w-[20rem] xl:h-[30rem]
              ">

            <img className="w-full h-full object-cover object-center text-black" src="/posters/interstellar.webp" />
          </div>

          <div className="text-black">
            <p className="">별점 그래프</p>
            <span>평균 ★ 4.3</span>
            <span>(129.6만명)</span>
          </div>

          <div className="w-full aspect-[3/1] bg-sky-500">
            GRAPH
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex w-full h-[8rem] my-[2rem] bg-pink-500">
            <div className="m-[0.5rem] w-[18rem] bg-green-100"></div>
            <div className="m-[0.5rem] w-[10rem] bg-green-100"></div>
            <div className="ml-auto m-[0.5rem] w-[10rem] bg-green-100"></div>
          </div>
          <div className="bg-yellow-100 m-[1rem] flex-1">
            <span>{movie.description}</span>
          </div>

          <div className="bg-yellow-200 w-full h-[15rem]">

          </div>
        </div>
      </div>

      <div>
        <div className="mx-[4rem] my-[2rem] ">
          <h1 className="text-2xl font-bold mb-4">출연/제작</h1>
          <div className="h-[20rem] bg-teal-200">
            높이가 3인 grid 형태로 동적 생성해야함<br />
            가로방향으로 스크롤 가능<br />
            추후 h-.. 는 지워야 함(높이가 동적임)
          </div>

          <p>선택된 영화 ID: <span className="text-pink-400 font-mono">{id}</span></p>

        </div>
      </div>


      <div className="bg-gray-200">
        <div className="mx-[4rem] my-[2rem] ">
          <h1 className="text-2xl font-bold mb-4">코멘트</h1>
          <div className="h-[20rem] bg-teal-200">
            가로4 x 세로2 사이즈로 코멘트 넣기<br />
            h-... 지우기(높이 동적으로)
          </div>

          <p>선택된 영화 ID: <span className="text-pink-400 font-mono">{id}</span></p>

        </div>
      </div>

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
      </div>
    </div>
  );
}