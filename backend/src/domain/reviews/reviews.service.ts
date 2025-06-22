import { Body, Injectable, Move } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewDto } from './dto/review.dto';
import { User } from '../users/entities/user.entity';
import { Movie } from '../movies/entities/movie.entity';
import { ReviewLike } from './entities/review-like.entity';
import { ToggleReviewLikeResponseDto } from './dto/toggle-revie-like-response.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,

    @InjectRepository(ReviewLike)
    private readonly review_likeRepo: Repository<ReviewLike>,

    private readonly dataSource: DataSource,
  ) { }


  async getPreviewReviewsForMovie(movieId: number, limit: number): Promise<ReviewDto[]> {

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
      .limit(limit)
      .getRawMany();

    const result: ReviewDto[] = rawReviews.map(ReviewDto.fromRaw);
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
  async toggleLike(userId: number, reviewId: number) : Promise<ToggleReviewLikeResponseDto> {

    let ret_existing : boolean = false;

    await this.dataSource.transaction(async (manager) => {
      const existing = await manager.getRepository(ReviewLike)
        .createQueryBuilder('rl')
        .setLock('pessimistic_write') // FOR UPDATE
        .where('rl.user_id = :userId AND rl.review_id = :reviewId', { userId, reviewId })
        .getOne();

      if (existing) {
        await manager.getRepository(ReviewLike).delete({ user_id: userId, review_id: reviewId });
        ret_existing = false;
      } else {
        await manager.getRepository(ReviewLike).insert({ user_id: userId, review_id: reviewId });
        ret_existing = true;
      }
    });

    // console.log(userId, reviewId);
    /*
    const raw_data = await this.review_likeRepo.query(`
      DO $$
      DECLARE
        v_user_id int := ${userId};
        v_review_id int := ${reviewId};
      BEGIN
        IF EXISTS (SELECT 1 FROM review_likes WHERE user_id = v_user_id AND review_id = v_review_id) THEN
          DELETE FROM review_likes WHERE user_id = v_user_id AND review_id = v_review_id;
        ELSE
          INSERT INTO review_likes (user_id, review_id) VALUES (v_user_id, v_review_id);
        END IF;
      END
      $$;
    `);
    */

    let like_count = 5;
    return ToggleReviewLikeResponseDto.fromRaw(
      true, ret_existing, like_count, reviewId, ""
    );

  }
}
