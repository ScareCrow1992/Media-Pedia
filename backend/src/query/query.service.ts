import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CastDto } from 'src/domain/movies/dto/cast.dto';
import { Cast } from 'src/domain/movies/entities/cast.entity';
import { MovieCast } from 'src/domain/movies/entities/movie-cast.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QueryService {
  constructor(
    @InjectRepository(MovieCast)
    private readonly movieCastRepository: Repository<MovieCast>,

    @InjectRepository(Cast)
    private readonly castRepository: Repository<Cast>,

  ) { }

  async getMovieCasts(movie_id: number): Promise<CastDto[]> {

    const rawRows = await this.castRepository
      .createQueryBuilder('cast')
      .innerJoin('cast.movieCasts', 'movie_cast') // Cast -> MovieCast
      .where('movie_cast.movie_id = :movie_id', { movie_id })
      .select([
        'cast.id AS id',
        'cast.name As name'
      ])
      .getRawMany();

    const result: CastDto[] = rawRows.map(CastDto.fromRaw);
    return result;
  }

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