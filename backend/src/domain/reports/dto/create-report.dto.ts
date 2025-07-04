import { IsEnum } from "class-validator";
import { ReportType } from "src/domain/reviews/entities/review-report.entity";

export class CreateReportDto {
  @IsEnum(ReportType)
  reportType: ReportType;
}