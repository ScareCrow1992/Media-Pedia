import { apiClient } from '../client';
import { MovieDetailDTO } from './types';

export const fetchMovieById = async (id: string): Promise<MovieDetailDTO> => {
    const res = await apiClient.get(`/movies/${id}`);
    return res.data;
};