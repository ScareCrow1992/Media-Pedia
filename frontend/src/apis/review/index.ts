import { apiStrictAuthclient, apiPublicClient, apiOptionalAuthclient } from '../client';
import { CastsByMovieDTO, CreateReviewCommentDto, CreateReviewDTO, ReviewDTO, ToggleReviewCommentLikeResponseDto, ToggleReviewLikeResponseDto } from './types';

export const fetchGetPreviewReviewsForMovie = async (movie_id: string, limit_cnt: string): Promise<ReviewDTO[]> => {
  const res = await apiOptionalAuthclient.get(`/reviews/preview/movie/${movie_id}?limit=${limit_cnt}`)
  return res.data;
}

export const fetchCreateReview = async (data: CreateReviewDTO) => {
  try {
    await apiPublicClient.post(`/reviews/${data.movie_id}`, data)
  }
  catch (error) {
    console.log("Post 실패 : ", error);
  }
}


export const fetchToggleReviewLike = async (review_id: number): Promise<ToggleReviewLikeResponseDto> => {

  const res = await apiStrictAuthclient.post(`/reviews/${review_id}/like`)
  return res.data;

}


export const fetchPostComment = async (review_id: number, data: CreateReviewCommentDto) => {
  const res = await apiStrictAuthclient.post(`/reviews/${review_id}/comment`, data)
  return res.data;
}

export const fetchGetReviewCommends = async (review_id: number, limit_cnt: number) => {

  const res = await apiPublicClient.get(`/reviews/${review_id}/comment?limit_cnt=${limit_cnt}`)
  return res.data;
}


export const fetchToggleReviewCommentLike = async (comment_id: number):
  Promise<ToggleReviewCommentLikeResponseDto> => {
  const res = await apiStrictAuthclient.post(`/comments/${comment_id}/like`);
  return res.data;
}