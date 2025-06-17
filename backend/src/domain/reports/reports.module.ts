import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewReport} from "./entity/review-report.entity"
import { ReviewCommentReport } from './entity/review-comment-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewReport,ReviewCommentReport])],
  controllers: [ReportsController],
  providers: [ReportsService],
  exports: [ReportsService]
})
export class ReportsModule {}
