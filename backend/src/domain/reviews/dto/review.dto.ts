import { IsBoolean, IsInt, IsString, Max, Min } from 'class-validator';

export class ReviewDto {
  @IsInt()
  id: number;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsString()
  content: string;

  @IsInt()
  movie_id: number;

  @IsString()
  nickname: string;

  @IsBoolean()
  is_liked: boolean;

  @IsInt()
  likes_count: number;

  @IsInt()
  comments_count: number;

  static fromRaw(raw: any): ReviewDto {


    return {
      id: Number(raw.id),
      rating: Number(raw.rating),
      content: raw.content,
      movie_id: Number(raw.movie_id),
      nickname: raw.nickname,
      is_liked: raw.is_liked,
      likes_count: Number(raw.likes_count),
      comments_count: Number(raw.comments_count)
    };
  }
}