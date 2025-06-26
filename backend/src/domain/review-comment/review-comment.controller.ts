import { Body, Controller, Get, Param, Post, Query, UseGuards } from "@nestjs/common";
import { ReviewCommentService } from "./review-comment.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { ApiTags } from "@nestjs/swagger";
import { UserInfo } from "src/common/decorators/user.decorator";
import { CreateReviewCommentDto } from "./dto/create-review-comment.dto";

@Controller("reviews/:review_id/comment")
export class ReviewCommentController {

  constructor(
    private readonly reviewCommentService: ReviewCommentService
  ) { }


  @Post('')
  @UseGuards(JwtAuthGuard)
  async postReviewComment(
    @UserInfo() user_info,
    @Param('review_id') review_id: number,
    @Body() dto: CreateReviewCommentDto
  ): Promise<void> {

    await this.reviewCommentService.postComment(review_id, user_info, dto);
  }


  @Get('')
  async getReviewCommets(
    @Param('review_id') review_id: number,
    @Query('limit_cnt') limit_cnt: number) {

    return await this.reviewCommentService.getComments(review_id, limit_cnt);
  }


}