export class ToggleReviewCommentLikeResponseDto {
  success: boolean;
  liked: boolean;
  like_count: number;
  comment_id: number;
  message?: string;

  static fromRaw(success: boolean, liked: boolean, likeCount: number, review_id, message: string): ToggleReviewCommentLikeResponseDto {
    const ret: ToggleReviewCommentLikeResponseDto = {
      success: success,
      liked: liked,
      like_count: likeCount,
      comment_id: review_id,
      message: message
    };

    return ret;
  }
}
