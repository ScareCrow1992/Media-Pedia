import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Movie } from './movie.entity';
import { Cast } from './cast.entity';

@Entity('movie_casts')
export class MovieCast {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cast_id: number;
  
  @Column()
  movie_id: number;

  @ManyToOne(() => Movie, movie => movie.casts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @ManyToOne(() => Cast, (cast) => cast.movieCasts)
  @JoinColumn({ name: 'cast_id' }) // 실제 컬럼과 매핑
  cast: Cast; // 관계형 필드 이름은 자유롭게 가능 (보통 대상 엔티티 이름을 씀)
}
