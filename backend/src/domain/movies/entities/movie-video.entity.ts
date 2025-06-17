import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity('movie_videos')
export class MovieVideo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'video_url' })
  videoUrl: string;

  @Column()
  type: string; // 예: trailer, interview

  @ManyToOne(() => Movie, movie => movie.videos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;
}
