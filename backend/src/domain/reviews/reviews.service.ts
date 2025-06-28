import { BadRequestException, Body, ForbiddenException, Injectable, Move, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewDto } from './dto/review.dto';
import { User } from '../users/entities/user.entity';
import { ReviewLike } from './entities/review-like.entity';
import { ToggleReviewLikeResponseDto } from './dto/toggle-revie-like-response.dto';
import { EditReviewDto } from './dto/edit-review.dto';
import { UserDto } from '../users/dto/user.dto';
import { UserReviewWithMovieDto } from './dto/user-review-with-movie.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,

    @InjectRepository(ReviewLike)
    private readonly review_likeRepo: Repository<ReviewLike>,

    private readonly dataSource: DataSource,
  ) { }


  async getPreviewReviewsForMovie(movieId: number, limit: number, user_info: User | null): Promise<ReviewDto[]> {

    /* select
    reviews.id as "id",
    reviews.content as content,
    reviews.rating as rating,
    users.nickname as nickname,
    reviews.movie_id
    from reviews
    left Join users on reviews.user_id = users.id
    where reviews.movie_id = 1; */

    let user_id = user_info ? user_info.id : 0;

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
      .leftJoin(
        qb => qb
          .select('review_comments.review_id', 'review_id')
          .addSelect('COUNT(*)', 'comment_count')
          .from('review_comments', 'review_comments')
          .groupBy('review_comments.review_id'),
        'comment_summary',
        'comment_summary.review_id = reviews.id'
      )
      .select([
        'reviews.id AS id',
        'reviews.content AS content',
        'reviews.rating AS rating',
        'users.nickname AS nickname',
        'reviews.movie_id AS movie_id',
        'rl.id AS rl_id',
        'CASE WHEN rl.id IS NOT NULL THEN true ELSE false END AS is_liked',
        'COALESCE(like_summary.like_count, 0) AS likes_count',
        'COALESCE(comment_summary.comment_count, 0) AS comments_count',
      ])
      .where('reviews.movie_id = :movieId', { movieId })
      .orderBy('reviews.rating', 'DESC')
      .limit(limit)
      .getRawMany();


    const result: ReviewDto[] = rawReviews.map(ReviewDto.fromRaw);


    /*
        const rawReviews_ = await this.reviewRepo
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
            'rl.id AS rl_id', // ✅ 반드시 추가
            'CASE WHEN rl.id IS NOT NULL THEN true ELSE false END AS is_liked',
            'COALESCE(like_summary.like_count, 0) AS likes_count',
          ])
          .where('reviews.movie_id = :movieId', { movieId })
          .orderBy('reviews.rating', 'DESC')
          .limit(limit)
          .getRawMany();
    
          // .getSql();
    
        console.log(rawReviews_);
        */

    return result;
  }

  async getReview(review_id: number, user_info: User | null): Promise<ReviewDto> {

    let user_id = user_info ? user_info.id : 0;

    if (typeof review_id !== 'number' || !Number.isInteger(review_id)) {
      // 400
      throw new BadRequestException('잘못된 Review_ID입니다.');
    }

    // const review_raw = await this.reviewRepo.findOne({ where: { id: review_id } });
    // if (!review_raw) {
    //   // 404
    //   throw new NotFoundException('존재하지 않는 리뷰입니다.');
    // }


    const review_raw = await this.reviewRepo
      .createQueryBuilder('reviews')
      .leftJoin('reviews.user', 'users')
      .leftJoin(
        'review_likes',
        'rl',
        'rl.user_id = :user_id',
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
      .leftJoin(
        qb => qb
          .select('review_comments.review_id', 'review_id')
          .addSelect('COUNT(*)', 'comment_count')
          .from('review_comments', 'review_comments')
          .groupBy('review_comments.review_id'),
        'comment_summary',
        'comment_summary.review_id = reviews.id'
      )
      .select([
        'reviews.id AS id',
        'reviews.content AS content',
        'reviews.rating AS rating',
        'users.nickname AS nickname',
        'rl.id AS rl_id',
        'CASE WHEN rl.id IS NOT NULL THEN true ELSE false END AS is_liked',
        'COALESCE(like_summary.like_count, 0) AS likes_count',
        'COALESCE(comment_summary.comment_count, 0) AS comments_count',
      ])
      .where('reviews.id = :reviewId', { reviewId: review_id })
      .getRawOne();

    if (!review_raw) {
      // 404
      throw new NotFoundException('존재하지 않는 리뷰입니다.');
    }


    return ReviewDto.fromRaw(review_raw)
  }


  async createReview(@Body() dto: CreateReviewDto): Promise<Review> {
    const review = this.reviewRepo.create(dto);
    return await this.reviewRepo.save(review);

  }


  async editReview(
    user: User,
    review_id: number,
    dto: EditReviewDto) {

    // console.log(user);
    // console.log(review_id);
    // console.log(typeof review_id === 'number');
    // console.log(Number.isInteger(review_id));



    if (typeof review_id !== 'number' || !Number.isInteger(review_id)) {
      // 400
      throw new BadRequestException('잘못된 Review_ID입니다.');
    }

    const review = await this.reviewRepo.findOne({ where: { id: review_id } });
    if (!review) {
      // 404
      throw new NotFoundException('존재하지 않는 리뷰입니다.');
    }

    if (user.id !== review.user_id) {
      // 403
      throw new ForbiddenException('본인의 리뷰만 수정할 수 있습니다.');
    }

    await this.reviewRepo.update({ id: review_id }, { content: dto.content })



    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });

    return "PONG";
  }


  async deleteReview(
    user: User,
    review_id: number) {

    if (typeof review_id !== 'number' || !Number.isInteger(review_id)) {
      // 400
      throw new BadRequestException('잘못된 Review_ID입니다.');
    }

    const review = await this.reviewRepo.findOne({ where: { id: review_id } });
    if (!review) {
      // 404
      throw new NotFoundException('존재하지 않는 리뷰입니다.');
    }

    if (user.id !== review.user_id) {
      // 403
      throw new ForbiddenException('본인의 리뷰만 수정할 수 있습니다.');
    }

    // await this.reviewRepo.update({id: review_id}, {deletedAt: new Date() } )
    await this.reviewRepo.softDelete({ id: review_id });

    return "PONG";
  }


  async restoreReview() {
    /*
      await this.reviewRepo.update(
        { id: review_id },
        { deletedAt: null }
      );
    */
  }


  async toggleLike(userId: number, reviewId: number): Promise<ToggleReviewLikeResponseDto> {

    let ret_existing: boolean = false;
    let ret_like_count: number = 0;

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

      ret_like_count = await manager.getRepository(ReviewLike)
        .createQueryBuilder('rl')
        .where('rl.review_id = :reviewId', { reviewId })
        .getCount();
    });


    // await new Promise(resolve => {
    //   setTimeout(resolve, 1000);
    // });

    let like_count = ret_like_count;
    return ToggleReviewLikeResponseDto.fromRaw(
      true, ret_existing, like_count, reviewId, ""
    );


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
  }


  async getLikedUsersByReviewId(reviewId: number): Promise<UserDto[]> {
    const rawUsers = await this.review_likeRepo.query(
      `
      SELECT u.id, u.email, u.nickname, u.profile_image_url
      FROM review_likes rl
      INNER JOIN users u ON rl.user_id = u.id
      WHERE rl.review_id = $1
      `,
      [reviewId]
    );

    this.review_likeRepo.query
    // console.log(rawUsers);

    return rawUsers.map(UserDto.fromRaw);
  }



  async getUserReviewWithMovie(user_id: number) : Promise<UserReviewWithMovieDto[]> {
    const raws = await this.reviewRepo.createQueryBuilder('reviews')
      .innerJoin('reviews.movie', 'movies')
      .where('reviews.user_id = :user_id', { user_id })
      .select([
        'reviews.id AS review_id',
        'reviews.rating AS review_rating',
        'reviews.content AS review_content',
        'reviews.created_at AS review_created_at',
        'movies.id AS movie_id',
        'movies.title AS movie_title',
        'movies.slug AS movie_slug',
        'movies.release_date AS movie_releaseDate',
        'movies.running_time AS movie_runningTime'
      ])
      .getRawMany();

    // console.log(raws);

    return raws.map(UserReviewWithMovieDto.fromRaw);

  }

}
