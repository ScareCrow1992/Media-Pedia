import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewComment } from './entities/review-comment.entity';
import { ReviewCommentService } from './review-comment.service';
import { GlobalCommentController } from './global-comment.controller';
import { ReviewCommentController } from './review-comment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewComment])],
  controllers: [ReviewCommentController, GlobalCommentController],
  providers:[ReviewCommentService],
  exports:[ReviewCommentService]
})
export class ReviewCommentModule {}