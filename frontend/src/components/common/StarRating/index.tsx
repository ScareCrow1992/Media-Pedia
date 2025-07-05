import { Star, StarHalf } from "lucide-react";
import { useState } from "react";

interface Props{
  value: number;
  onChange: any
}


export default function StarRating({value, onChange} : Props) {
  const [hoverScore, setHoverScore] = useState(0);
  const [storedScore, setStoredScore] = useState(value);

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;

    const isLeft = x < width / 2;
    const newScore = isLeft ? index - 0.5 : index;
    setHoverScore(newScore);
  };

  return (
    <div className="flex" onClick = {()=> {setStoredScore(hoverScore); onChange(hoverScore)}}>
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          className="relative w-12 h-12"
          onMouseMove={(e) => handleMouseMove(index, e)}
          onMouseLeave={() => setHoverScore(storedScore)}
        >
          <div>
            {hoverScore >= index ? (
              <Star className="w-full h-full text-pink-500 fill-pink-500" />
            ) : hoverScore >= index - 0.5 ? (
              <div className = "relative">
                <Star className="w-full h-full text-gray-300" />
                <StarHalf className="absolute top-0 left-0 w-full h-full text-pink-500 fill-pink-500" />
              </div>
            ) : (
              <Star className="w-full h-full text-gray-300" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
