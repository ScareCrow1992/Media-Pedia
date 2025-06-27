import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { CreateMovie2DirectorDto } from './dto/create-movie2director.dto';
import { MovieDirector } from '../entities/movie-director.entity';
import { CreateMovie2CastDto } from './dto/create-movie2cast.dto';
import { MovieCast } from '../entities/movie-cast.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class AdminMoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepo: Repository<Movie>,

    @InjectRepository(MovieDirector)
    private readonly movieDirectorRepo: Repository<MovieDirector>,

    @InjectRepository(MovieCast)
    private readonly movieCastRepo: Repository<MovieCast>

  ) { }


  async addCast(dto: CreateMovie2CastDto): Promise<MovieCast> {
    const movie_casts = this.movieCastRepo.create(dto);
    return await this.movieCastRepo.save(movie_casts);
  }

  async addDirector(dto: CreateMovie2DirectorDto): Promise<MovieDirector> {
    const movie_director = this.movieDirectorRepo.create(dto);
    return await this.movieDirectorRepo.save(movie_director);
  }

  async createMovie(dto: CreateMovieDto): Promise<Movie> {
    // console.log(dto)
    const movie = this.movieRepo.create(dto);
    return await this.movieRepo.save(movie);
  }

  async updateMovie(movie_id: number, dto: UpdateMovieDto) {
    if (typeof movie_id !== 'number' || !Number.isInteger(movie_id)) {
      throw new BadRequestException('잘못된 ID입니다.');
    }

    // console.log(dto);
    // await this.movieRepo.update(movie_id, dto);
    await this.movieRepo.createQueryBuilder()
      .update(Movie)
      .set({
        title:dto.title,
        slug:dto.slug,
        description:dto.description,
        runningTime:dto.runningTime,
        releaseDate:dto.releaseDate
      })
      .where("id=:id", {id:movie_id})
      .execute();

    return "PONG";
  }

}