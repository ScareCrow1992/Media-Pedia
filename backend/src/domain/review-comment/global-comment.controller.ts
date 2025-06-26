import { Controller, Param, Post, UseGuards } from "@nestjs/common";
import { ReviewCommentService } from "./review-comment.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { ApiTags } from "@nestjs/swagger";
import { UserInfo } from "src/common/decorators/user.decorator";

@Controller("comments")
export class GlobalCommentController {

  constructor(
    private readonly reviewCommentService: ReviewCommentService
  ) { }





  @Post(':comment_id/like')
  @UseGuards(JwtAuthGuard)
  @ApiTags("Comment")
  async toggleLike(
    @UserInfo() user_info,
    @Param("comment_id") comment_id: number) {

    // console.log("user_info", user_info);
    // console.log("comment_id", comment_id);

    return this.reviewCommentService.toggleCommentLike(user_info.id, comment_id);
  }


}