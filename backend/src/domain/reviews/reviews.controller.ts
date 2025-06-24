import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { ParseMoviePipe } from 'src/common/pipes/parse-movie.pipe';
import { ParseUserPipe } from 'src/common/pipes/parse-user.pipe';
import { Movie } from '../movies/entities/movie.entity';
import { User } from '../users/entities/user.entity';
import { ReviewDto } from './dto/review.dto';
import { ApiBody, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ToggleReviewLikeResponseDto } from './dto/toggle-revie-like-response.dto';
import { UserInfo } from 'src/common/decorators/user.decorator';
import { OptionalJwtAuthGuard } from '../auth/guards/optional-jwt.guard';
import { ReviewCommentService } from '../review-comment/review-comment.service';
import { CreateReviewCommentDto } from '../review-comment/dto/create-review-comment.dto';
import { EditReviewDto } from './dto/edit-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(
    private readonly reviewsService: ReviewsService,
    private readonly reviewCommentService: ReviewCommentService
  ) { }


  @Get('preview/movie/:movie_id')
  @UseGuards(OptionalJwtAuthGuard)
  @ApiTags('Review')
  @ApiParam({ name: "movie_id", type: Number, description: "movie's id" })
  @ApiQuery({ name: "limit", type: Number, description: "count of reviews" })
  @ApiResponse({ status: 404, description: 'movie_id 영화가 존재하지 않습니다.' })
  async getPreviewReviewsForMovie(
    @UserInfo() user_info,
    @Param('movie_id') movie_id: number,
    @Query('limit') limit: number = 8): Promise<ReviewDto[]> {

    return await this.reviewsService.getPreviewReviewsForMovie(movie_id, limit, user_info);
  }


  @Post(':id')
  @ApiTags('Review')
  @ApiBody({ type: CreateReviewDto })
  @ApiResponse({ status: 404, description: 'movie_id 영화가 존재하지 않습니다.' })
  async createReview(
    @Body('movie_id', ParseMoviePipe) movie: Movie,
    @Body('user_id', ParseUserPipe) user: User,
    @Body() dto: CreateReviewDto): Promise<CreateReviewDto> {

    this.reviewsService.createReview(dto);
    return dto;
  }


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


  @Delete(':review_id')
  @UseGuards(JwtAuthGuard)
  async deleteReview(
    @UserInfo() user,
    @Param('review_id', ParseIntPipe) review_id: number) {


    return await this.reviewsService.deleteReview(user, review_id);
  }


  // @Get("all")
  // async getAllReviews():Promise<ReviewDto[]>{}


  @Post(':id/like')
  @UseGuards(JwtAuthGuard)
  @ApiTags('Review')
  async toggleLike(
    @UserInfo() user_info,
    @Param('id') review_id: number
  )/*: Promise<ToggleReviewLikeResponseDto>*/ {

    return await this.reviewsService.toggleLike(user_info.id, review_id);
  }


  @Post(':review_id/comment')
  @UseGuards(JwtAuthGuard)
  async postReviewComment(
    @UserInfo() user_info,
    @Param('review_id') review_id: number,
    @Body() dto: CreateReviewCommentDto
  ): Promise<void> {

    await this.reviewCommentService.postComment(review_id, user_info, dto);
  }


  @Get(':review_id/comment')
  async getReviewCommets(
    @Param('review_id') review_id: number,
    @Query('limit_cnt') limit_cnt: number) {

    return await this.reviewCommentService.getComments(review_id, limit_cnt);
  }
}