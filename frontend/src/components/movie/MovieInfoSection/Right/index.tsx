import { useMovie } from "src/contexts/MoviePageContext";
import DescriptionBox from "./DescriptionBox"
import UserRatingInput from "./UserRatingInput"


export default function MovieInfoRightPanel() {
  const { movie } = useMovie();

  return (
    <div className="flex flex-col w-full gap-6">
      <UserRatingInput movie={movie} />
      <DescriptionBox movie={movie} />
      <div className="w-full h-[15rem] bg-gray-100 rounded-lg shadow" />
    </div>
  );
}