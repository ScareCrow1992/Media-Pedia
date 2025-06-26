import { MovieProps } from "src/types/movie";



export default function DescriptionBox({ movie }: MovieProps) {
  return (
    <div className="p-4 text-sm bg-white rounded-lg shadow tracking-tight font-NatoSansKR text-[#7E7E7E]">
      <span>{movie.description}</span>
    </div>
  );
}