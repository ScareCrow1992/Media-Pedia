import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class AdminMoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepo: Repository<Movie>,
  ) {}

  async createMovie(dto: CreateMovieDto): Promise<Movie> {
    const movie = this.movieRepo.create(dto);
    return await this.movieRepo.save(movie);
  }
}