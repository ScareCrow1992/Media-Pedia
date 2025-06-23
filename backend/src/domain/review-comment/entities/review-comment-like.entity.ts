import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  Unique,
} from 'typeorm';
import { ReviewComment } from './review-comment.entity';
import { User } from 'src/domain/users/entities/user.entity';

@Entity('review_comment_likes')
@Unique(['user_id', 'review_comment_id'])
export class ReviewCommentLike {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => ReviewComment, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'review_comment_id' })
  reviewComment: ReviewComment;

  @Column()
  user_id: number;

  @Column()
  review_comment_id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}