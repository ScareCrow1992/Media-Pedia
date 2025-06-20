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
}