import { Injectable } from '@nestjs/common';
import { MoviesService } from 'src/domain/movies/movies.service';
import { ReviewsService } from 'src/domain/reviews/reviews.service';
import { CastService } from 'src/domain/cast/cast.service';
import { DirectorService } from 'src/domain/director/director.service';

@Injectable()
export class QueryService {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly reviewsService: ReviewsService,
    private readonly castService: CastService,
    private readonly directorService: DirectorService,
  ) {}

  async getMovieDetail(movieId: number) {
    // const movie = await this.moviesService.findOne(movieId);
    // const reviews = await this.reviewsService.findByMovieId(movieId);
    // const cast = await this.castService.findByMovieId(movieId);
    // const director = await this.directorService.findByMovieId(movieId);

    // return {
    //   movie,
    //   reviews,
    //   cast,
    //   director,
    // };
    return {};
  }
}