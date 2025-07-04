import { ReportItemDto } from "src/apis/services/admin/type";
import ReportTable from "../components/ReportTable";
import { useQuery } from "@tanstack/react-query";
import Pagination from "src/components/common/Pagination";
import { useState } from "react";
import EntriesPerPage from "src/components/common/EntriesPerPage";
import { adminGetReports } from "src/apis/services/admin";



export default function ReviewReportPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5); // 초기값 더미로 설정
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  console.log(currentPage, entriesPerPage);

  const { data: reports = [] } = useQuery<ReportItemDto[]>({
    queryKey: ['admin', 'reports', currentPage],
    queryFn: async () => {

      // { id: 1, reviewId: 203, reportType: "SPOILER", createdAt: "2025-07-04", reporterName: "진용민", status: "대기중" },

      let reports_data = await adminGetReports(currentPage, entriesPerPage);
      // console.log(reports_data);
      // TODO: 나중에 axios 호출로 교체
      return reports_data;
    },
  });


  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-4">신고함</h1>

      <EntriesPerPage
        entriesPerPage={entriesPerPage}
        onChange={setEntriesPerPage}
      />

      <ReportTable reports={reports.slice(0, entriesPerPage)} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );

}