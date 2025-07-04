import { apiStrictAuthclient } from "src/apis/client";
import { CreateReportDto } from "./types";


export const fetchCreateReport = async(review_id: number, dto: CreateReportDto)=> {
  const res = await apiStrictAuthclient.post(`/reports/reviews/${review_id}`, dto);
  return res.data;
}