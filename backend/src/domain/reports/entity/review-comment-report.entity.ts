import {
  Entity, PrimaryGeneratedColumn, Column,
  ManyToOne, CreateDateColumn, Unique, JoinColumn
} from 'typeorm';
import { User } from 'src/domain/users/entities/user.entity';
// import { Comment } from 'src/domain/reviews/entities/comment.entity';
import { ReviewComment } from 'src/domain/review-comment/entities/review-comment.entity';
import { ReportType } from 'src/domain/reviews/entities/review-report.entity';

@Entity('review_comment_reports')
@Unique(['user', 'comment'])
export class ReviewCommentReport {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => ReviewComment, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'comment_id' })
  comment: ReviewComment;

  @Column({ type: 'enum', enum: ReportType, name: 'report_type' })
  reportType: ReportType;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
