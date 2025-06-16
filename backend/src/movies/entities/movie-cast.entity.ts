import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity('movie_casts')
export class MovieCast {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'cast_name' })
  castName: string;

  @ManyToOne(() => Movie, movie => movie.casts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;
}
