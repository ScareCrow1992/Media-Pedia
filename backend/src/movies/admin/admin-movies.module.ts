import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../entities/movie.entity';
import { AdminMoviesService } from './admin-movies.service';
import { AdminMoviesController } from './admin-movies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [AdminMoviesController],
  providers: [AdminMoviesService]
})
export class AdminMoviesModule {}