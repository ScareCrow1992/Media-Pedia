export enum ReportType {
  INAPPROPRIATE = 'INAPPROPRIATE',
  SPOILER = 'SPOILER',
}

export interface CreateReportDto {
  reportType: ReportType;
}