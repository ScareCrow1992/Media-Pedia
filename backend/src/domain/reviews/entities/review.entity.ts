import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  Index,
} from 'typeorm';
import { User } from 'src/domain/users/entities/user.entity';
import { Movie } from 'src/domain/movies/entities/movie.entity';

@Entity('reviews')
@Index('idx_movie_id', ['movie'])
@Index('idx_user_id', ['user'])
@Index('idx_engagement_score', ['engagementScore'])
@Index('idx_likes_count', ['likesCount'])
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Movie, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Column({ type: 'int' })
  rating: number; // 0 ~ 10 (CHECK 제약은 DB에만 적용됨)

  @Column({ type: 'text' })
  content: string;

  @Column({ name: 'likes_count', type: 'int', default: 0 })
  likesCount: number;

  @Column({ name: 'comment_count', type: 'int', default: 0 })
  commentCount: number;

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
}