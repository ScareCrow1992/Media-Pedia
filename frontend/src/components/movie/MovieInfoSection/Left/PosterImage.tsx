import { MovieDetailDTO } from "src/apis/services/movie/types";

interface Props{
  movie_dto: MovieDetailDTO;
}


export default function PosterImage({movie_dto} : Props) {
  return (
    <div className="w-full aspect-[2/3] max-w-[20rem] overflow-hidden bg-gray-200">
      <img
        className="w-full h-full object-cover object-center"
        src={`/movies/${movie_dto.id}/poster.webp`}
        alt="Poster"
      />
    </div>
  );
}