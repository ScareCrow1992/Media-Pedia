import { applyDecorators } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';

export function ApiDocsForPreviewReview() {
  return applyDecorators(
    ApiParam({ name: 'movie_id', type: Number, description: "movie's id" }),
    ApiQuery({ name: 'limit', type: Number, description: 'count of reviews' }),
    ApiResponse({ status: 404, description: 'movie_id 영화가 존재하지 않습니다.' }),
  );
}