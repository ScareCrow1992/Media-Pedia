import { Module } from '@nestjs/common';
import { QueryService } from './query.service';

import { MoviesModule } from 'src/domain/movies/movies.module';
import { ReviewsModule } from 'src/domain/reviews/reviews.module';
import { CastModule } from 'src/domain/cast/cast.module';
import { DirectorModule } from 'src/domain/director/director.module';



@Module({
  imports: [MoviesModule, ReviewsModule, CastModule, DirectorModule],
  providers: [QueryService],
  exports: [QueryService]
})
export class QueryModule {}