// src/movies/admin/admin-movies.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { AdminMoviesService } from './admin-movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from '../entities/movie.entity';

@Controller('admin/movies')
export class AdminMoviesController {
  constructor(private readonly adminMoviesService: AdminMoviesService) {}

  @Post()
  async create(@Body() dto: CreateMovieDto): Promise<Movie> {
    return this.adminMoviesService.createMovie(dto);
  }
}