// import { MovieDetailDTO } from "src/apis/services/movie/types";
import MovieInfoLeftPanel from "./Left";
import MovieInfoRightPanel from "./Right";


export default function MovieInfoSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 px-6 py-6 bg-gray-100">
      <MovieInfoLeftPanel />
      <MovieInfoRightPanel />
    </div>
  );
}