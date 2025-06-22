import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({
    type: Number,
    description: "영화 평가",
    example: "0~10 (INT)"
  })
  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @ApiProperty({
    type: Number,
    description: "리뷰 문자열",
    example: "영화에 대한 소감"
  })
  @IsString()
  content: string;

  @ApiProperty({
    type: Number,
    description: "영화 ID",
    example: "1"
  })
  @IsInt()
  movie_id: number;

  @ApiProperty({
    type: Number,
    description: "유저 ID",
    example: "1"
  })
  @IsInt()
  user_id: number;
}