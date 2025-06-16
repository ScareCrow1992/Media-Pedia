// src/movies/admin/dto/create-movie.dto.ts
import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  release_date?: string;

  @IsOptional()
  @IsInt()
  running_time?: number;

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
