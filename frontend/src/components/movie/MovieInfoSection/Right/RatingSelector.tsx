import { useState } from "react";

export default function RatingSelector({ onChange }: { onChange: (v: number) => void }) {
  const [selected, setSelected] = useState(5.0);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseFloat(e.target.value);
    setSelected(value);
    onChange(value);
  };

  return (
    <div>
      <label htmlFor="rating" className="mr-2">별점 선택:</label>
      <select
        id="rating"
        value={selected}
        onChange={handleChange}
        className="border rounded p-1"
      >
        {Array.from({ length: 10 }, (_, i) => (i + 1) * 0.5).map((v) => (
          <option key={v} value={v}>{v.toFixed(1)} 점</option>
        ))}
      </select>
    </div>
  );
}
