import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity('movie_directors')
export class MovieDirector {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  director_id: number;

  @Column()
  movie_id: number;

  @ManyToOne(() => Movie, movie => movie.directors, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;
}