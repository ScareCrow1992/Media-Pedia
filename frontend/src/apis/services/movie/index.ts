import { apiPublicClient } from '../../client';
import { MovieDetailDTO } from './types';

interface FetchMovieParams {
  page: number;
  size: number;
}

export interface MovieListResponse {
  movies: MovieDetailDTO[];
  hasMore: boolean;
}

export const fetchGetLatestMovies = async ({
  page,
  size,
}: FetchMovieParams): Promise<MovieListResponse> => {
  const res = await apiPublicClient.get(`/movies/latest?page=${page}&size=${size}`);
  return res.data;
}


export const fetchMovieById = async (id: string): Promise<MovieDetailDTO> => {
  const res = await apiPublicClient.get(`/movies/${id}`);
  return res.data;
};