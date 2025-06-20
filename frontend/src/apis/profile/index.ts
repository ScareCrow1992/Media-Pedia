import { apiClient } from "../client";
import { ProfileDTO } from "./types";

export const fetchGetProfile = async (user_id: string): Promise<ProfileDTO> => {
  const res = await apiClient.get(`/profile/${user_id}`)
  return res.data;
}