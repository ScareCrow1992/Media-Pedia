import { Module } from '@nestjs/common';
import { QueryService } from './query.service';
import { QueryController } from './query.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/domain/movies/entities/movie.entity';
import { MovieCast } from 'src/domain/movies/entities/movie-cast.entity';
import { Cast } from 'src/domain/movies/entities/cast.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieCast, Cast])],
  controllers: [QueryController],
  providers: [QueryService]
})

export class QueryModule {}