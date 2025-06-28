import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Review } from '../reviews/entities/review.entity';
import { ReviewsModule } from '../reviews/reviews.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Review]), ReviewsModule],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
