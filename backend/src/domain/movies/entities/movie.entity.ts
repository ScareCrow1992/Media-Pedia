import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn, DeleteDateColumn,
  OneToMany
} from 'typeorm';
import { MovieGenre } from './movie-genre.entity';
import { MovieCast } from './movie-cast.entity';
import { MovieDirector } from './movie-director.entity';
import { MovieImage } from './movie-image.entity';
import { MovieVideo } from './movie-video.entity';
import { MovieKeyword } from './movie-keyword.entity';


@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ unique: true })
  slug: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ name: 'release_date', type: 'date', nullable: true })
  releaseDate: Date;

  @Column({ name: 'running_time', type: 'int', nullable: true })
  runningTime: number;

  @Column({ name: 'age_rating', nullable: true })
  ageRating: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  language: string;

  @Column({ name: 'thumbnail_url', nullable: true })
  thumbnailUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  // Relations
  @OneToMany(() => MovieGenre, genre => genre.movie)
  genres: MovieGenre[];

  @OneToMany(() => MovieCast, cast => cast.movie)
  casts: MovieCast[];

  @OneToMany(() => MovieDirector, director => director.movie)
  directors: MovieDirector[];

  @OneToMany(() => MovieImage, image => image.movie)
  images: MovieImage[];

  @OneToMany(() => MovieVideo, video => video.movie)
  videos: MovieVideo[];

  @OneToMany(() => MovieKeyword, keyword => keyword.movie)
  keywords: MovieKeyword[];
}