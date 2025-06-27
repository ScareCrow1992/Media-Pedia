import { apiPublicClient } from "../../client";
import { CreateCastDto, CreateMovieDto, CreateUpdateMovieDto, UpdateMovieDto } from "./type";

export const adminPostMovie = async (createMovieDTO: CreateMovieDto) => {
  const res = await apiPublicClient.post("/admin/movies", createMovieDTO);
  return res.data;
}

export const adminUpdateMovie = async (movie_id: string, updateMovieDTO: UpdateMovieDto) => {
  const res = await apiPublicClient.patch(`/admin/movies/${movie_id}`, updateMovieDTO);
  return res.data;
}


export const adminPostCast = async (createCastDTO: CreateCastDto) => {
  const res = await apiPublicClient.post("/admin/cast", createCastDTO);
  return res.data;
}


export const adminUpdateCast = async (cast_id: string, createCastDTO: CreateCastDto) => {
  const res = await apiPublicClient.patch(`/admin/cast/${cast_id}`, createCastDTO);
  return res.data;
}