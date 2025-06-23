import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { CreateReviewCommentDto } from "./dto/create-review-comment.dto";
import { ReviewComment } from "./entities/review-comment.entity";
import { User } from "../users/entities/user.entity";
import { ReviewCommentDto } from "./dto/review-comment.dto";
import { ToggleReviewCommentLikeResponseDto } from "./dto/toggle-review-comment-like-response.dto";
import { ReviewCommentLike } from "./entities/review-comment-like.entity";


@Injectable()
export class ReviewCommentService {
  constructor(
    @InjectRepository(ReviewComment)
    private readonly review_commentRepo: Repository<ReviewComment>,

    private readonly dataSource: DataSource
  ) { }

  async postComment(
    review_id: number,
    user_info: User,
    dto: CreateReviewCommentDto
  ): Promise<void> {

    // user_id와 review_id에 해당하는 record가 반드시 각각의 테이블에 존재해야함
    if (!user_info || typeof user_info.id !== 'number' || !Number.isInteger(user_info.id)) {
      throw new BadRequestException('잘못된 유저 ID입니다.');
    }

    await this.review_commentRepo.save({
      user: { id: user_info.id },
      review: { id: review_id },
      content: dto.content,
    })
  }


  async getComments(reviewId: number, limitCnt: number) {

    const raw_datas = await this.review_commentRepo
      .createQueryBuilder("rc")
      .leftJoinAndSelect("rc.user", "u")
      .select([
        "rc.id AS comment_id",
        "rc.review_id AS review_id",
        "rc.user_id AS user_id",
        "rc.content AS content",
        "rc.created_at AS created_at",
        "rc.updated_at AS updated_at",
        "rc.likes_count AS likes_count",
        "u.nickname AS nickname",
        "u.profile_image_url AS profile_image_url",
      ])
      .where("rc.review_id = :reviewId", { reviewId })
      .orderBy("rc.created_at", "ASC")
      .limit(limitCnt)
      .getRawMany();

    return ReviewCommentDto.fromRawArray(raw_datas);
  }


  async toggleCommentLike(userId: number, commentId: number): Promise<ToggleReviewCommentLikeResponseDto> {
    let ret_existing: boolean = false;
    let ret_like_count: number = 0;

    await this.dataSource.transaction(async (manager) => {
      const existing = await manager.getRepository(ReviewCommentLike)
        .createQueryBuilder('rcl')
        .setLock('pessimistic_write') // FOR UPDATE
        .where('rcl.user_id = :userId AND rcl.review_comment_id = :commentId', { userId, commentId })
        .getOne();

      if (existing) {
        await manager.getRepository(ReviewCommentLike).delete({ user_id: userId, review_comment_id: commentId });
        ret_existing = false;
      } else {
        await manager.getRepository(ReviewCommentLike).insert({ user_id: userId, review_comment_id: commentId });
        ret_existing = true;
      }

      ret_like_count = await manager.getRepository(ReviewCommentLike)
        .createQueryBuilder('rcl')
        .where('rcl.review_comment_id = :commentId', { commentId })
        .getCount();
    });

    return ToggleReviewCommentLikeResponseDto.fromRaw(
      true, ret_existing, ret_like_count, commentId, ""
    );


  }

}