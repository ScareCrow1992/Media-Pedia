import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../entities/movie.entity';
import { AdminMoviesService } from './admin-movies.service';
import { AdminMoviesController } from './admin-movies.controller';
import { MovieDirector } from '../entities/movie-director.entity';
import { MovieCast } from '../entities/movie-cast.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, MovieDirector, MovieCast])],
  controllers: [AdminMoviesController],
  providers: [AdminMoviesService]
})
export class AdminMoviesModule {}