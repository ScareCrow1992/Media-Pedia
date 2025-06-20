import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MovieCast } from './movie-cast.entity';

@Entity('casts')
export class Cast {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;


    // 한명의 배우(cast)는 여러개의 영화 출연 기록(movieCast)를 가질 수 있다.
    @OneToMany(() => MovieCast, movieCast => movieCast.cast)
    movieCasts: MovieCast[];
}