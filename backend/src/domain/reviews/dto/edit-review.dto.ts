import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, Min } from 'class-validator';

export class EditReviewDto {
  @IsInt()
  review_id: number;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsString()
  content: string;

}