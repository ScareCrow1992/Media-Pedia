import {apiPublicClient} from '../client';
import { CastDTO } from './types';

export const fetchCastsByMovie = async(movie_id: string): Promise<CastDTO[]> => {
    const res = await apiPublicClient.get(`/query/movie/${movie_id}/casts`)
    return res.data;
}