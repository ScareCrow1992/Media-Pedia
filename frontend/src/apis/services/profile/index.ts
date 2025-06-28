import { apiStrictAuthclient, apiPublicClient } from "../../client";
import { ProfileDTO, UserReviewWithMovieDto } from "./types";

export const fetchGetProfile = async (user_id: string): Promise<ProfileDTO> => {
  const res = await apiStrictAuthclient.get(`/profile/${user_id}`)
  return res.data;
}


export const fetchGetUserReviewWithMovie = async(user_id: string): Promise<UserReviewWithMovieDto[]> => {
  const res = await apiPublicClient.get(`/profile/${user_id}/reviews`)
  return res.data;
}