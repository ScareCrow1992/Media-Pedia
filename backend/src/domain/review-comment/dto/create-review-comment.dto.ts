import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreateReviewCommentDto{
  @ApiProperty({
    type: Number,
    description: "리뷰 문자열",
    example: "영화에 대한 소감"
  })
  @IsString()
  content: string;

}