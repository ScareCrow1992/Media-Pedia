import { ReportItemDto } from "./report-item.dto";


export class GetReportsDto {
  reports: ReportItemDto[];
  totalCount: number;
  currentPage: number;
  totalPages: number;

  static fromRaw(raw_data : any){
    console.log(raw_data);
    return raw_data;
  }
}