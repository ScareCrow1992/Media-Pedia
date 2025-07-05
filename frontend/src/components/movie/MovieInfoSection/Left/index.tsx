// import { MovieDetailDTO } from "src/apis/services/movie/types";
import PosterImage from "./PosterImage"
import RatingGraph from "./RatingGraph";
import RatingSummary from "./RatingSummary";
import { MovieProps } from "src/types/movie";
import { useMovie } from "src/contexts/MoviePageContext";



export default function MovieInfoLeftPanel() {
  const { movie } = useMovie();
  return (
    <div className="w-[24rem] flex flex-col gap-6">
      <PosterImage movie_dto={movie} />
      <RatingSummary movie_dto={movie} />
      <RatingGraph />
    </div>
  );
}