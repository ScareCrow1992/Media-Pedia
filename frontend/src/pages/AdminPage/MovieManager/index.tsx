import { fetchGetLatestMovies } from "src/apis/services/movie";
import { Link } from "react-router-dom";
import { MovieDetailDTO } from "src/apis/services/movie/types";
import { useState } from "react";
import MovieCard from "src/components/common/MovieCard";

export default function MovieManager() {

  return(<></>);
  /*
  const [movieList, setMovieList] = useState<MovieDetailDTO[]>([]);

  const handleRefresh = async () => {

    try {
      const movie_details: MovieDetailDTO[] = await fetchGetLatestMovies(50);
      setMovieList(movie_details);
    }
    catch (error: any) {
      setMovieList([]);
      console.error("에러발생");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 gap-4">
        <h1 className="text-xl font-bold">🎬 영화 관리</h1>
        <button
          onClick={handleRefresh}
          className="bg-blue-500 text-white ml-auto px-4 py-2 rounded hover:bg-blue-700"
        >
          새로고침
        </button>
        <Link
          to="/admin/movies/create"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + 영화 추가
        </Link>
      </div>

      <div className="min-h-0 overflow-y-auto grow border border-gray-300 p-4 rounded">
        {movieList.length === 0 ? (
          <p className="text-gray-500">영화 목록이 여기에 표시됩니다.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {movieList.map((movie) => (
              <MovieCard key={movie.id}
                dto={movie}
                linkUrl={"/admin/movies/edit"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
  */
}