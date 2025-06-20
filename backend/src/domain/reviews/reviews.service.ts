import { Body, Injectable, Move } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewDto } from './dto/review.dto';
import { User } from '../users/entities/user.entity';
import { Movie } from '../movies/entities/movie.entity';
import { ReviewLike } from './entities/review-like.entity';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(Review)
        private readonly reviewRepo: Repository<Review>,

        @InjectRepository(ReviewLike)
        private readonly review_likeRepo: Repository<ReviewLike>,
    ) { }


    async getPreviewReviewsForMovie(movieId: Number, limit: Number): Promise<ReviewDto[]> {


        /* select
        reviews.id as "id",
        reviews.content as content,
        reviews.rating as rating,
        users.nickname as nickname,
        reviews.movie_id
        from reviews
        left Join users on reviews.user_id = users.id
        where reviews.movie_id = 1; */

        let user_id = "2"

        const rawReviews = await this.reviewRepo
            .createQueryBuilder('reviews')
            .leftJoin('reviews.user', 'users')
            .leftJoin(
                'review_likes',
                'rl',
                'rl.review_id = reviews.id AND rl.user_id = :user_id',
                { user_id }
            )
            .leftJoin(
                qb => qb
                    .select('review_likes.review_id', 'review_id')
                    .addSelect('COUNT(*)', 'like_count')
                    .from('review_likes', 'review_likes')
                    .groupBy('review_likes.review_id'),
                'like_summary',
                'like_summary.review_id = reviews.id'
            )
            .select([
                'reviews.id AS id',
                'reviews.content AS content',
                'reviews.rating AS rating',
                'users.nickname AS nickname',
                'reviews.movie_id AS movie_id',
                'CASE WHEN rl.id IS NOT NULL THEN true ELSE false END AS is_liked',
                'COALESCE(like_summary.like_count, 0) AS likes_count',
            ])
            .where('reviews.movie_id = :movieId', { movieId })
            .orderBy('reviews.rating', 'DESC')
            .limit(8)
            .getRawMany();

        const result: ReviewDto[] = rawReviews.map(ReviewDto.fromRaw);
        console.log(result);
        return result;
        // await this.reviewRepository.find({
        //     where: { movie: { id: movieId } }, // movie는 relation 기준
        //     order: { rating: 'DESC' },
        //     take: 8,
        // });

    }


    async createReview(@Body() dto: CreateReviewDto): Promise<Review> {
        const review = this.reviewRepo.create(dto);
        return await this.reviewRepo.save(review);

    }


    // 점검필요
    async toggleLike(userId, reviewId) {
        await this.review_likeRepo.query(`
            DO $$
            BEGIN
                IF EXISTS (
                SELECT 1 FROM review_likes WHERE user_id = $1 AND review_id = $2
                ) THEN
                DELETE FROM review_likes WHERE user_id = $1 AND review_id = $2;
                ELSE
                INSERT INTO review_likes (user_id, review_id) VALUES ($1, $2);
                END IF;
            END
            $$;
            `, [userId, reviewId]);
    }
}
