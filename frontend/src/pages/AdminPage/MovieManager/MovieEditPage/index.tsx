
import { useParams } from "react-router-dom";
import MovieForm from "../components/Movieform";
import { useQuery } from "@tanstack/react-query";
import { MovieDetailDTO } from "src/apis/services/movie/types";
import { fetchMovieById } from "src/apis/services/movie";
import { adminUpdateMovie } from "src/apis/services/admin";
import { CreateUpdateMovieDto, toUpdateMovieDto, UpdateMovieDto } from "src/apis/services/admin/type";


export default function MovieEditPage() {
  const { movie_id } = useParams(); //

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery<MovieDetailDTO>({
    queryKey: ['movie', movie_id],
    queryFn: () => fetchMovieById(movie_id!),
    enabled: !!movie_id,
  });

  if (isLoading) {
    return <div className="text-white text-center mt-10">로딩 중...</div>;
  }
  if (isError || !movie) {
    return <div className="text-red-500 text-center mt-10">영화 정보를 불러올 수 없습니다.</div>;
  }

  if (!movie_id) {
    return <div>잘못된 영화 id 입니다.</div>
  }

  const onSubmit = async (partial_dto: CreateUpdateMovieDto) => {
    try {
      const dto: UpdateMovieDto = toUpdateMovieDto(partial_dto);
      // console.log(dto)
      adminUpdateMovie(movie_id, dto);
    }
    catch (e: any) {
      console.error(e);
    }
  }

  return (
    <MovieForm movieDto={movie} onSubmitProp={onSubmit} />
  )
}
