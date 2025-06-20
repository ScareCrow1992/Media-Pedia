import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { ParseMoviePipe } from 'src/common/pipes/parse-movie.pipe';
import { ParseUserPipe } from 'src/common/pipes/parse-user.pipe';
import { Movie } from '../movies/entities/movie.entity';
import { User } from '../users/entities/user.entity';
import { ReviewDto } from './dto/review.dto';

@Controller('reviews')
export class ReviewsController {
    constructor(
        private readonly reviewsService: ReviewsService
    ) { }


    @Get('preview/movie/:movie_id')
    async getPreviewReviewsForMovie(
        @Param('movie_id') movie_id: number,
        @Query('limit') limit = 8): Promise<ReviewDto[]> {


        return this.reviewsService.getPreviewReviewsForMovie(movie_id, limit);
    }



    @Post(':id')
    async createReview(
        @Body('movie_id', ParseMoviePipe) movie: Movie,
        @Body('user_id', ParseUserPipe) user: User,
        @Body() dto: CreateReviewDto): Promise<CreateReviewDto> {
        // console.log(dto);
        this.reviewsService.createReview(dto);
        return dto;
    }
    // @Get("all")
    // async getAllReviews():Promise<ReviewDto[]>{}
}
