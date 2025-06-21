import { apiPublicClient } from '../client';
import { MovieDetailDTO } from './types';

export const fetchMovieById = async (id: string): Promise<MovieDetailDTO> => {
    const res = await apiPublicClient.get(`/movies/${id}`);
    return res.data;
};