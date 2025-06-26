import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CreateReviewDto } from '../../dto/create-review.dto';


export function ApiDocsForCreateReview() {
  return applyDecorators(
    ApiBody({ type: CreateReviewDto }),
    ApiResponse({ status: 404, description: 'movie_id 영화가 존재하지 않습니다.' }),
  );
}