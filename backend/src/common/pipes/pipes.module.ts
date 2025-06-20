import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParseUserPipe } from './parse-user.pipe';
import { ParseMoviePipe } from './parse-movie.pipe';
import { User } from 'src/domain/users/entities/user.entity';
import { Movie } from 'src/domain/movies/entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Movie])],
  providers: [ParseUserPipe, ParseMoviePipe],
  exports: [ParseUserPipe, ParseMoviePipe],
})
export class PipesModule {}