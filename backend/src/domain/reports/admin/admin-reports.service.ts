import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ReviewReport } from "src/domain/reviews/entities/review-report.entity";
import { Review } from "src/domain/reviews/entities/review.entity";
import { Repository } from "typeorm";
import { ReviewCommentReport } from "../entity/review-comment-report.entity";
import { User } from "src/domain/users/entities/user.entity";
import { GetReportsDto } from "./dto/get-reports.dto";
import { ReportItemDto } from "./dto/report-item.dto";




@Injectable()
export class AdminReportsService {

  constructor(
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,

    @InjectRepository(ReviewReport)
    private readonly reviewReportRepo: Repository<ReviewReport>,

    @InjectRepository(ReviewCommentReport)
    private readonly reviewCommentRepo: Repository<ReviewCommentReport>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

  ) { }


  async getReports(page: number, limit: number) /*: Promise<GetReportsDto>*/ {
    // 데이터 쿼리
    const reports = await this.reviewReportRepo
      .createQueryBuilder('report')
      .leftJoinAndSelect('report.user', 'user')
      .leftJoinAndSelect('report.review', 'review')
      .orderBy('report.createdAt', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getMany();

    // 이후 DTO 변환
    const data = reports.map((report) => ({
      reportId: report.id,
      reviewId: report.review.id,
      reportType: report.reportType,
      createdAt: report.createdAt,
      reporterName: report.user.nickname,
    }));

    // 총 개수 쿼리 (별도로)
    // const total = await this.reviewReportRepo.count();

    return data;
  }


}