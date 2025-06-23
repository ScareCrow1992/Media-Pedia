import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  Index,
} from 'typeorm';
import { User } from 'src/domain/users/entities/user.entity';
import { Review } from 'src/domain/reviews/entities/review.entity';
// import { ReviewCommentLike } from './review-comment-like.entity';
import { ReviewCommentReport } from 'src/domain/reports/entity/review-comment-report.entity';
import { ReviewCommentLike } from './review-comment-like.entity';
// import { ReviewCommentReport } from './review-comment-report.entity';

@Entity('review_comments')
@Index('idx_review_comment_review_id', ['review'])
@Index('idx_review_comment_user_id', ['user'])
export class ReviewComment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Review, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'review_id' })
  review: Review;

  // 외래키 설정
  // @Column({ type: 'int' })
  // user_id: number;

  // @Column({ type: 'int' })
  // review_id: number;

  @Column({ type: 'text' })
  content: string;

  @Column({ name: 'likes_count', type: 'int', default: 0 })
  likesCount: number;

  @Column({ name: 'report_count', type: 'int', default: 0 })
  reportCount: number;

  @Column({ name: 'engagement_score', type: 'int', default: 0 })
  engagementScore: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;

  @OneToMany(() => ReviewCommentLike, (like) => like.reviewComment)
  reviewCommentLikes: ReviewCommentLike[];

  @OneToMany(() => ReviewCommentReport, (report) => report.comment)
  reviewCommentReports: ReviewCommentReport[];
}