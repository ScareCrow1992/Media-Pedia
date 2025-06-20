import { User } from 'src/domain/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  Unique,
  JoinColumn,
  Column,
} from 'typeorm';
import { Review } from './review.entity';

@Entity('review_likes')
@Unique(['review_id', 'user_id']) // 중복 좋아요 방지
export class ReviewLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  review_id: number;

  @Column()
  user_id: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Review, (review) => review.reviewLikes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'review_id' })
  review: Review;

  @ManyToOne(() => User, (user) => user.reviewLikes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

}