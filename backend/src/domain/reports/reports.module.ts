import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewCommentReport } from './entity/review-comment-report.entity';
import { Review } from '../reviews/entities/review.entity';
import { ReviewReport } from '../reviews/entities/review-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, ReviewReport,ReviewCommentReport])],
  controllers: [ReportsController],
  providers: [ReportsService],
  exports: [ReportsService]
})
export class ReportsModule {}
