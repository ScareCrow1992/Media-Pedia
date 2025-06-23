import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { ReviewsModule } from './reviews/reviews.module';
import { UsersModule } from './users/users.module';
import { CastModule } from './cast/cast.module';
import { DirectorModule } from './director/director.module';
import { ReportsModule } from './reports/reports.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ReviewCommentModule } from './review-comment/review-comment.module';

@Module({
  imports: [
    MoviesModule,
    ReviewsModule,
    UsersModule,
    CastModule,
    DirectorModule,
    ReportsModule,
    AuthModule,
    ProfileModule,
    ReviewCommentModule
  ],
  exports: [
    MoviesModule,
    ReviewsModule,
    UsersModule,
    CastModule,
    DirectorModule,
    ReportsModule,
    AuthModule,
    ReviewCommentModule
  ],
})
export class DomainModule { }