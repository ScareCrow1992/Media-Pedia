import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { PipesModule } from 'src/common/pipes/pipes.module';
import { User } from '../users/entities/user.entity';
import { Movie } from '../movies/entities/movie.entity';
import { ReviewLike } from './entities/review-like.entity';
import { ReviewCommentModule } from '../review-comment/review-comment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Review, User, Movie, ReviewLike]),
    PipesModule,
    ReviewCommentModule
  ],
  controllers: [ReviewsController],
  providers: [ReviewsService],
  exports: [ReviewsService]
})
export class ReviewsModule {}
