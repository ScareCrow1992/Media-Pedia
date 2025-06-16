import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Movie } from "./movie.entity";

@Entity('movie_genres')
export class MovieGenre {
  @PrimaryColumn({ name: 'movie_id' })
  movieId: number;

  @PrimaryColumn()
  genre: string;

  @ManyToOne(() => Movie, movie => movie.genres, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;
}