export class ToggleReviewLikeResponseDto {
  success: boolean;
  liked: boolean;
  like_count: number;
  reviewId: number;
  message?: string;

  static fromRaw(success: boolean, liked: boolean, likeCount: number, review_id, message: string): ToggleReviewLikeResponseDto {
    const ret: ToggleReviewLikeResponseDto = {
      success: success,
      liked: liked,
      like_count: likeCount,
      reviewId: review_id,
      message: message
    };

    return ret;
  }
}
