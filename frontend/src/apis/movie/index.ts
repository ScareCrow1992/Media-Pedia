import { apiPublicClient } from '../client';
import { MovieDetailDTO } from './types';

export const fetchGetLatestMovies = async (limit_cnt: number): Promise<MovieDetailDTO[]>=>{
    const res = await apiPublicClient.get(`/movies/latest/${limit_cnt}`);
    return res.data;
}


export const fetchMovieById = async (id: string): Promise<MovieDetailDTO> => {
    const res = await apiPublicClient.get(`/movies/${id}`);
    return res.data;
};