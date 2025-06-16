import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity('movie_keywords')
export class MovieKeyword {
  @PrimaryColumn({ name: 'movie_id' })
  movieId: number;

  @PrimaryColumn()
  keyword: string;

  @ManyToOne(() => Movie, movie => movie.keywords, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;
}