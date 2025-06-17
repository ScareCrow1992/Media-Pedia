import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity('movie_images')
export class MovieImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @ManyToOne(() => Movie, movie => movie.images, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;
}