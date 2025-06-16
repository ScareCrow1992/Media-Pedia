import {
  Entity, PrimaryGeneratedColumn, Column,
  ManyToOne, CreateDateColumn, Unique, JoinColumn
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/reviews/entities/comment.entity';
import { ReportType } from './review-report.entity';

@Entity('review_comment_reports')
@Unique(['user', 'comment'])
export class ReviewCommentReport {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Comment, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'comment_id' })
  comment: Comment;

  @Column({ type: 'enum', enum: ReportType, name: 'report_type' })
  reportType: ReportType;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
