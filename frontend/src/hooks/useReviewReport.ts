import { ReviewDTO } from "@/apis/services/review/types";
import { fetchCreateReport } from "src/apis/services/report";
import { CreateReportDto, ReportType } from "src/apis/services/report/types";
import { useModal } from "src/hooks/useModal";
// import apiClient from "src/libs/apiClient";

export function useReviewReport() {
  const spoilerModal = useModal();
  const inappropriateModal = useModal();

  const reportSpoiler = async (review_id: number) => {
    try {
      let createReportDto: CreateReportDto = {
        reportType: ReportType.SPOILER
      }
      await fetchCreateReport(review_id, createReportDto);
      // await apiClient.post("/reports/reviews", { type: "spoiler" });
    } catch (error) {
      console.error("스포일러 신고 실패", error);
    } finally {
      spoilerModal.close();
    }
  };

  const reportInappropriate = async (review_id: number) => {
    try {
      let createReportDto: CreateReportDto = {
        reportType: ReportType.INAPPROPRIATE
      }
      await fetchCreateReport(review_id, createReportDto);
      // await apiClient.post("/reports/reviews", { type: "inappropriate" });
    } catch (error) {
      console.error("부적절한 표현 신고 실패", error);
    } finally {
      inappropriateModal.close();
    }
  };

  return {
    spoilerModal,
    inappropriateModal,
    reportSpoiler,
    reportInappropriate,
  };
}
