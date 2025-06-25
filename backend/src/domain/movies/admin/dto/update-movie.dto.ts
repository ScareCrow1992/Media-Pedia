// src/movies/admin/dto/create-movie.dto.ts
import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  releaseDate?: Date;

  @IsOptional()
  @IsInt()
  runningTime?: number;

  @IsOptional()
  @IsString()
  age_rating?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsString()
  thumbnail_url?: string;
}
