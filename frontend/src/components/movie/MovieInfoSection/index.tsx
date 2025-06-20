import { MovieDetailDTO } from "src/apis/movie/types";
import MovieInfoLeftPanel from "./Left";
import MovieInfoRightPanel from "./Right";


interface MovieProps {
    movie: MovieDetailDTO;
}

export default function MovieInfoSection() {
  return (
    <div className="flex gap-8 px-6 py-6 bg-gray-100">
      <MovieInfoLeftPanel />
      <MovieInfoRightPanel />
    </div>
  );
}