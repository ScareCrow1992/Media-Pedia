import { ReportType } from "src/domain/reviews/entities/review-report.entity";


export class ReportItemDto{
  reportId : number;  // 신고 id
  reviewId : number;  // 리뷰 id
  reportType: ReportType; // 신고 유형
  createdAt: Date;  // 생성일시
  reporterName : string;  // 신고자 이름

  static fromRaw(raw_data : any){
    return {
      id : raw_data.id,
      reviewId : raw_data.reviewid,
      reporterName : raw_data.reportername,
      reportType : raw_data.reporttype,
      createdAt : raw_data.createdat,
    }
  }
}