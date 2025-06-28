import { MovieDetailDto } from "src/domain/movies/dto/movie-detail.dto";
import { ReviewDto } from "./review.dto";


export class UserReviewWithMovieDto {
  review_dto: ReviewDto;
  movie_dto: MovieDetailDto;

  static fromRaw(raw: any): UserReviewWithMovieDto {

    const raw_review = {
      id: raw.review_id,
      rating: raw.review_rating,
      content: raw.review_content,
      movie_id: raw.movie_id,
      created_at: raw.review_created_at
    }

    const raw_movie = {

      id: raw.movie_id,
      title: raw.movie_title,
      slug: raw.movie_slug,
      releaseDate: raw.movie_releaseDate,
      runningTime: raw.movie_runningTime

    }

    return {
      review_dto: ReviewDto.fromRaw(raw_review),
      movie_dto: MovieDetailDto.fromRaw(raw_movie)
    };
  }
}