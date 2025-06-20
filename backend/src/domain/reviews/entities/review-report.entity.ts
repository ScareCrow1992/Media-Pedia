import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
  Column,
  Unique,
} from 'typeorm';
import { Review } from './review.entity';
import { User } from 'src/domain/users/entities/user.entity';

export enum ReportType {
  INAPPROPRIATE = 'INAPPROPRIATE',
  SPOILER = 'SPOILER',
}

@Entity('review_reports')
@Unique(['review', 'user']) // 동일 유저가 동일 리뷰에 중복 신고 못하도록
export class ReviewReport {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Review, (review) => review.reviewReports, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'review_id' })
  review: Review;

  @ManyToOne(() => User, (user) => user.reviewReports, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    type: 'enum',
    enum: ReportType,
  })
  reportType: ReportType;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}