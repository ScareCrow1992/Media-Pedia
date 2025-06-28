import { MovieDetailDTO } from "../movie/types";
import { ReviewDTO } from "../review/types";

export interface ProfileDTO{
  id: number;
  email: string;
  nickname: string;
  review_cnt: number;
}



export interface UserReviewWithMovieDto{
  review_dto:ReviewDTO;
  movie_dto: MovieDetailDTO;

}