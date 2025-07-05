import StarRating from "src/components/common/StarRating";
import { useState } from "react";

export default function RatingSelector({ onChange }: { onChange: (v: number) => void }) {
  const [selected, setSelected] = useState(5.0);

  // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const value = parseFloat(e.target.value);
  //   console.log(value);
  //   setSelected(value);
  //   onChange(value);
  // };

  const handleChange = (value: number) => {
    setSelected(value)
    onChange(value)
  }

  return (
    <div>
      <StarRating value={selected} onChange={handleChange} />
    </div>
  );
}
