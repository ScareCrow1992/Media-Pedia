import { apiAuthclient, apiPublicClient } from "../client";
import { ProfileDTO } from "./types";

export const fetchGetProfile = async (user_id: string): Promise<ProfileDTO> => {
  const res = await apiAuthclient.get(`/profile/${user_id}`)
  return res.data;
}