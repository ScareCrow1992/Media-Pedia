import { TypeOrmModule } from "@nestjs/typeorm";
import { ReviewReport } from "src/domain/reviews/entities/review-report.entity";
import { ReviewCommentReport } from "../entity/review-comment-report.entity";
import { Review } from "src/domain/reviews/entities/review.entity";
import { Module } from "@nestjs/common";
import { User } from "src/domain/users/entities/user.entity";
import AdminReportController from "./admin-reports.contoller";
import { AdminReportsService } from "./admin-reports.service";


@Module({
  imports: [TypeOrmModule.forFeature([Review, ReviewReport, ReviewCommentReport, User])],
  controllers: [AdminReportController],
  providers: [AdminReportsService],
  exports: []
})

export class AdminReportsModule { }