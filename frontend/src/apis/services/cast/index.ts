import {apiPublicClient} from '../../client';
import { CastDTO } from './types';

export const fetchCastsByMovie = async(movie_id: string): Promise<CastDTO[]> => {
    const res = await apiPublicClient.get(`/query/movie/${movie_id}/casts`)
    return res.data;
}

export const fetchGetCasts = async(limit_cnt: string): Promise<CastDTO[]> => {
  const res = await apiPublicClient.get(`/cast/limit/${limit_cnt}`)
  return res.data;
}

export const fetchGetCast = async(cast_id: string): Promise<CastDTO> =>{
  const res= await apiPublicClient.get(`/cast/${cast_id}`)
  return res.data;
}