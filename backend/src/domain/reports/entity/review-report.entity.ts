import {
  Entity, PrimaryGeneratedColumn, Column,
  ManyToOne, CreateDateColumn, Unique, JoinColumn
} from 'typeorm';
import { User } from 'src/domain/users/entities/user.entity';
import { Review } from 'src/domain/reviews/entities/review.entity';
import { ReportType } from 'src/domain/reviews/entities/review-report.entity';


@Entity('review_reports')
@Unique(['user', 'review']) // 한 유저가 같은 리뷰를 중복 신고하지 못하게
export class ReviewReport_DEP_ {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Review, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'review_id' })
  review: Review;

  @Column({ type: 'enum', enum: ReportType, name: 'report_type' })
  reportType: ReportType;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
