// src/movies/admin/admin-movies.controller.ts
import { Body, Controller, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AdminMoviesService } from './admin-movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from '../entities/movie.entity';
import { CreateMovie2DirectorDto } from './dto/create-movie2director.dto';
import { MovieDirector } from '../entities/movie-director.entity';
import { CreateMovie2CastDto } from './dto/create-movie2cast.dto';
import { MovieCast } from '../entities/movie-cast.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('admin/movies')
export class AdminMoviesController {
  constructor(private readonly adminMoviesService: AdminMoviesService) { }

  @Post("cast")
  async addCast(@Body() dto: CreateMovie2CastDto): Promise<MovieCast> {
    return this.adminMoviesService.addCast(dto);
  }

  // admin/movies/director/
  @Post("director")
  async addDirector(@Body() dto: CreateMovie2DirectorDto): Promise<MovieDirector> {
    return this.adminMoviesService.addDirector(dto);
  }

  @Post()
  async create(@Body() dto: CreateMovieDto): Promise<Movie> {
    return this.adminMoviesService.createMovie(dto);
  }

  @Patch(":movie_id")
  async patchMovie(
    @Param("movie_id", ParseIntPipe) movie_id : number,
    @Body() dto: UpdateMovieDto
  ){

    return this.adminMoviesService.updateMovie(movie_id, dto);

    // console.log("[PATCH]")
    // console.log("movie_id", movie_id);
    // console.log(dto);

    // return "Hello";
  }

}