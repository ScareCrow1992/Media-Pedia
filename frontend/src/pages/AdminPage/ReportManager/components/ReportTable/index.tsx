import { ReportItemDto } from "src/apis/services/admin/type";


export default function ReportTable({ reports }: { reports: ReportItemDto[] }) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2">번호</th>
          <th className="p-2">리뷰 ID</th>
          <th className="p-2">신고자</th>
          <th className="p-2">신고 유형</th>
          <th className="p-2">신고일시</th>
          <th className="p-2">처리 상태</th>
        </tr>
      </thead>
      <tbody className="text-white">
        {reports.map((report, index) => (
          <tr key={report.reviewId} className="border-b">
            <td className="p-2">{index + 1}</td>
            <td className="p-2">{report.reviewId}</td>
            <td className="p-2">{report.reporterName}</td>
            <td className="p-2">{report.reportType}</td>
            <td className="p-2">{report.createdAt}</td>
            <td className="p-2">{report.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}