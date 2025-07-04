import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewCommentReport } from './entity/review-comment-report.entity';
import { CreateReportDto } from './dto/create-report.dto';
import { User } from '../users/entities/user.entity';
import { Review } from '../reviews/entities/review.entity';
import { ReviewReport } from '../reviews/entities/review-report.entity';

@Injectable()
export class ReportsService {

  constructor(
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,

    @InjectRepository(ReviewReport)
    private readonly reviewReportRepo: Repository<ReviewReport>,

    @InjectRepository(ReviewCommentReport)
    private readonly reviewCommentRepo: Repository<ReviewCommentReport>,
  ) { }


  async createReport(user: User, reviewId: number, dto: CreateReportDto) {
    const review = await this.reviewRepo.findOne({ where: { id: reviewId } });
    if (!review) {
      throw new NotFoundException("리뷰를 찾을 수 없습니다");
    }

    const existingReport = await this.reviewReportRepo.findOne({
      where: { user: { id: user.id }, review: { id: review.id } },
    });

    if (existingReport) {
      throw new ConflictException("이미 신고한 리뷰입니다");
    }

    const report = this.reviewReportRepo.create({
      user: user,         // OK: 전체 엔티티
      review: review,     // OK: 전체 엔티티
      reportType: dto.reportType,
    });
    await this.reviewReportRepo.save(report);

    return { success: true };
  }

}
