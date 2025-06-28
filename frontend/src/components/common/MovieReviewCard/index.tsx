import { Link } from "react-router-dom";
import { MovieDetailDTO } from "src/apis/services/movie/types";
import { ReviewDTO } from "src/apis/services/review/types";
import { Star } from "lucide-react";

interface Props {
  review_dto: ReviewDTO;
  movie_dto: MovieDetailDTO;
  linkUrl: string;
};

export default function MovieReviewCard({ review_dto, movie_dto, linkUrl }: Props) {


  return (
    <Link to={`${linkUrl}/${movie_dto.id}`}>
      <div className="w-full">
        <div className="relative rounded-lg overflow-hidden bg-zinc-500 w-full aspect-[2/3]">

          <img className="w-full h-full object-cover object-center" src={`/movies/${movie_dto.id}/poster.webp`} />

          <div className="absolute top-1 left-1 bg-black/80 text-white text-xs px-1  rounded">
            <div className="flex w-full h-full items-center">
              <Star className="h-full aspect-square text-yellow-500 fill-current" />
              <span className="ml-2 text-xl font-NatoSansKR">{review_dto.rating / 2}</span>
            </div>
          </div>

        </div>

        <p className='mt-1 font-medium tracking-tight font-NatoSansKR truncate overflow-hidden whitespace-nowrap w-full'>
          {movie_dto.title}
        </p>
      </div>
    </Link>

  );
}