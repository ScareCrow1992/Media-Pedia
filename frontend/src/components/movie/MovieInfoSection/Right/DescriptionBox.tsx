import { MovieProps } from "src/types/movie";



export default function DescriptionBox({ movie }: MovieProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow text-gray-800">
      <span>{movie.description}</span>
    </div>
  );
}