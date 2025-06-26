// NestJS
import {
  Controller, Get, Post, Patch, Delete,
  Param, Body, Query,
  UseGuards, ParseIntPipe, BadRequestException
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// Guards & Decorators
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OptionalJwtAuthGuard } from '../auth/guards/optional-jwt.guard';
import { UserInfo } from 'src/common/decorators/user.decorator';

// Pipes
import { ParseMoviePipe } from 'src/common/pipes/parse-movie.pipe';
import { ParseUserPipe } from 'src/common/pipes/parse-user.pipe';

// DTO & Entity
import { CreateReviewDto } from './dto/create-review.dto';
import { EditReviewDto } from './dto/edit-review.dto';
import { ReviewDto } from './dto/review.dto';
import { Movie } from '../movies/entities/movie.entity';
import { User } from '../users/entities/user.entity';

// Service
import { ReviewsService } from './reviews.service';

// Swagger
import { ApiDocsForPreviewReview } from './utils/swagger/ApiDocsForPreviewReview';
import { ApiDocsForCreateReview } from './utils/swagger/ApiDocsForCreateReview';




@Controller('reviews')
export class ReviewsController {
  constructor(
    private readonly reviewsService: ReviewsService,
  ) { }

  // =================================
  // 특정 영화의 리뷰 목록
  // =================================
  @Get('preview/movie/:movie_id')
  @UseGuards(OptionalJwtAuthGuard)

  @ApiTags('Review')
  @ApiDocsForPreviewReview()
  async getPreviewReviewsForMovie(
    @UserInfo() user_info,
    @Param('movie_id') movie_id: number,
    @Query('limit') limit: number = 8): Promise<ReviewDto[]> {

    return await this.reviewsService.getPreviewReviewsForMovie(movie_id, limit, user_info);
  }


  @Get(':review_id')
  @UseGuards(OptionalJwtAuthGuard)
  async getReview(
    @UserInfo() user_info,
    @Param('review_id', ParseIntPipe) review_id: number
  ) : Promise<ReviewDto> {

    return await this.reviewsService.getReview(review_id, user_info);
  }


  // =================================
  // 리뷰 생성
  // =================================
  @Post(':id')
  @ApiTags('Review')
  @ApiDocsForCreateReview()
  async createReview(
    @Body('movie_id', ParseMoviePipe) movie: Movie,
    @Body('user_id', ParseUserPipe) user: User,
    @Body() dto: CreateReviewDto): Promise<CreateReviewDto> {

    this.reviewsService.createReview(dto);
    return dto;
  }


  // 리뷰 수정
  @Patch(':review_id')
  @UseGuards(JwtAuthGuard)
  async editReview(
    @UserInfo() user,
    @Param('review_id', ParseIntPipe) review_id: number,
    @Body() dto: EditReviewDto) {

    if (!dto || typeof dto !== 'object' || !dto.content) {
      // 400
      throw new BadRequestException('요청 본문이 없습니다.');
    }

    return await this.reviewsService.editReview(user, review_id, dto);
  }


  // 리뷰 삭제
  @Delete(':review_id')
  @UseGuards(JwtAuthGuard)
  async deleteReview(
    @UserInfo() user,
    @Param('review_id', ParseIntPipe) review_id: number) {


    return await this.reviewsService.deleteReview(user, review_id);
  }



  // 리뷰 좋아요 토글
  @Post(':id/like')
  @UseGuards(JwtAuthGuard)
  @ApiTags('Review')
  async toggleLike(
    @UserInfo() user_info,
    @Param('id') review_id: number
  )/*: Promise<ToggleReviewLikeResponseDto>*/ {

    return await this.reviewsService.toggleLike(user_info.id, review_id);
  }



  @Get(':review_id/likes')
  async getLikedUsersByReviewId(
    @Param('review_id') review_id: number
  ){
    return await this.reviewsService.getLikedUsersByReviewId(review_id);
  }

}