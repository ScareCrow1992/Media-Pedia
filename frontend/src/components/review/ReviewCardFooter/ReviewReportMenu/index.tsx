import { useModal } from "src/hooks/useModal";
import EllipsisMenu from "src/components/common/EllipsisMenu";
import ConfirmModal from "src/components/common/Modal/modals/ConfirmModal";
import { useReviewReport } from "src/hooks/useReviewReport";
import { ReviewDTO } from "src/apis/services/review/types";
import { ReportType } from "src/apis/services/report/types";


interface Props {
  review: ReviewDTO
}

export default function ReviewReportMenu({ review }: Props) {

  const {
    spoilerModal,
    inappropriateModal,
    reportSpoiler,
    reportInappropriate,
  } = useReviewReport();

  return (
    <EllipsisMenu>
      <button
        className="hover:bg-gray-300 cursor-pointer text-lg p-2 text-left"
        onClick={spoilerModal.toggle}
      >
        스포일러 신고
      </button>
      <button
        className="hover:bg-gray-300 cursor-pointer text-lg p-2 text-left"
        onClick={inappropriateModal.toggle}
      >
        부적절한 표현 신고
      </button>

      <ConfirmModal
        message="스포일러로 신고하시겠어요?"
        isOpen={spoilerModal.isOpen}
        onConfirm={() => { reportSpoiler(review.id) }}
        onCancel={spoilerModal.close}
      />

      <ConfirmModal
        message="부적절한 표현으로 신고하시겠어요?"
        isOpen={inappropriateModal.isOpen}
        onConfirm={() => { reportInappropriate(review.id) }}
        onCancel={inappropriateModal.close}
      />
    </EllipsisMenu>
  );
}