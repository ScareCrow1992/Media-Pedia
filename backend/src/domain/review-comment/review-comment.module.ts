import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewComment } from './entities/review-comment.entity';
import { ReviewCommentService } from './review-comment.service';
import { ReviewCommentController } from './review-comment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewComment])],
  controllers: [ReviewCommentController],
  providers:[ReviewCommentService],
  exports:[ReviewCommentService]
})
export class ReviewCommentModule {}