export interface CastsByMovieDTO {
  rating: number;      // 0 ~ 10 (실제로는 0~5, 0.5단위)
  content: string;
  movie_id: number;
  nickname: string;    // 로그인 전 임시 식별자
}


export interface CreateReviewDTO {
  rating: number;      // 0 ~ 10 (실제로는 0~5, 0.5단위)
  content: string;
  movie_id: number;
  user_id: number;

}


export interface ReviewDTO {
  id: number;
  rating: number;      // 0 ~ 10 (실제로는 0~5, 0.5단위)
  content: string;
  movie_id: number;
  nickname: string;
  is_liked: boolean;
  likes_count: number;
  comments_count: number;
}


export interface ToggleReviewLikeResponseDto {
  success: boolean;
  liked: boolean;
  like_count: number;
  reviewId: number;
  message?: string;
}


export interface CreateReviewCommentDto {
  content: string;
}


export interface ReviewCommentDto {
  comment_id: number;
  review_id: number;
  user_id: number;
  content: string;
  created_at: Date;
  updated_at: Date;
  likes_count: number;
  nickname: string;
  profile_image_url: string;
  is_liked: boolean;
}

export interface ToggleReviewCommentLikeResponseDto{
  success: boolean;
  liked: boolean;
  like_count: number;
  comment_id: number;
  message?: string;
}


export interface EditReviewDto {
  review_id: number;
  rating: number;
  content: string;
}