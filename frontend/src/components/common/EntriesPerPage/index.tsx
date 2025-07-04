export default function EntriesPerPage({
  entriesPerPage,
  onChange,
}: {
  entriesPerPage: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <select
        value={entriesPerPage}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border rounded px-2 py-1"
      >
        {[10, 20, 50, 100].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <span className="text-white">entries per page</span>
    </div>
  );
}