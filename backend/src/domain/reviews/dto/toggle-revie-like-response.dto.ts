export class ToggleReviewLikeResponseDto {
  success: boolean;
  liked: boolean;
  likeCount: number;
  reviewId: number;
  message?: string;

  static fromRaw(success: boolean, liked: boolean, likeCount: number, review_id, message: string): ToggleReviewLikeResponseDto {
    const ret: ToggleReviewLikeResponseDto = {
      success: success,
      liked: liked,
      likeCount: likeCount,
      reviewId: review_id,
      message: message
    };

    return ret;
  }
}
