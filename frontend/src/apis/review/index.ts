import { apiPublicClient } from '../client';
import { CastsByMovieDTO, CreateReviewDTO, ReviewDTO } from './types';

export const fetchGetPreviewReviewsForMovie = async (movie_id: string, limit_cnt: string): Promise<ReviewDTO[]> => {
    const res = await apiPublicClient.get(`/reviews/preview/movie/${movie_id}?limit=${limit_cnt}`)
    return res.data;
}

export const fetchCreateReview = async(data: CreateReviewDTO) => {
    try{
        await apiPublicClient.post(`/reviews/${data.movie_id}`, data)
    }
    catch(error){
        console.log("Post 실패 : ", error);
    }
}