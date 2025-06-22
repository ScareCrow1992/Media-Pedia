import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { ParseMoviePipe } from 'src/common/pipes/parse-movie.pipe';
import { ParseUserPipe } from 'src/common/pipes/parse-user.pipe';
import { Movie } from '../movies/entities/movie.entity';
import { User } from '../users/entities/user.entity';
import { ReviewDto } from './dto/review.dto';
import { ApiBody, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ToggleReviewLikeResponseDto } from './dto/toggle-revie-like-response.dto';
import { UserInfo } from 'src/common/decorators/user.decorator';

@Controller('reviews')
export class ReviewsController {
  constructor(
    private readonly reviewsService: ReviewsService
  ) { }


  @Get('preview/movie/:movie_id')
  @ApiTags('Review')
  @ApiParam({name:"movie_id", type: Number, description: "movie's id"})
  @ApiQuery({name:"limit", type: Number, description: "count of reviews"})
  @ApiResponse({ status: 404, description: 'movie_id 영화가 존재하지 않습니다.' })
  async getPreviewReviewsForMovie(
    @Param('movie_id') movie_id: number,
    @Query('limit') limit:number = 8): Promise<ReviewDto[]> {


    return this.reviewsService.getPreviewReviewsForMovie(movie_id, limit);
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
  // @Get("all")
  // async getAllReviews():Promise<ReviewDto[]>{}


  @Post(':id/like')
  @UseGuards(JwtAuthGuard)
  @ApiTags('Review')
  async toggleLike(
    @UserInfo() user_info,
    @Param('id') review_id: number
  )/*: Promise<ToggleReviewLikeResponseDto>*/{

    return this.reviewsService.toggleLike(user_info.id, review_id);

  }

}
