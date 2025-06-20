import { MovieDetailDTO } from "src/apis/movie/types";
import PosterImage from "./PosterImage"
import RatingGraph from "./RatingGraph";
import RatingSummary from "./RatingSummary";
import { MovieProps } from "src/types/movie";
import { useMovie } from "src/contexts/MoviePageContext";



export default function MovieInfoLeftPanel() {
  const { movie } = useMovie();
  return (
    <div className="w-[20rem] flex flex-col gap-6">
      <PosterImage />
      <RatingSummary />
      <RatingGraph />
    </div>
  );
}