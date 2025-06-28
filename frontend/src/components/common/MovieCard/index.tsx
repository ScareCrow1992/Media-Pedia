import { MovieDetailDTO } from "src/apis/services/movie/types";
import { Link } from "react-router-dom";

type Props = {
  dto : MovieDetailDTO;
  linkUrl: string;
};

export default function MovieCard({ dto, linkUrl }: Props) {
  return (
    <Link to={`${linkUrl}/${dto.id}`}>
      <div className="w-fit h-fit m-[0.5rem]">
        <div className="
                    relative rounded-lg overflow-hidden bg-zinc-500
                    w-[8rem] h-[12rem]
                    sm:w-[8rem] sm:h-[12rem]
                    md:w-[10rem] md:h-[15rem]
                    lg:w-[12rem] lg:h-[18rem]
                    xl:w-[12rem] xl:h-[18rem]
                    ">

          <img className="w-full h-full object-cover object-center" src={`/movies/${dto.id}/poster.webp`} />

          <div className="absolute top-1 left-1 bg-black/70 text-white text-xs px-2  rounded">
            <p className="font-bold text-xl align-middle">D-3</p>
          </div>

        </div>

        <p className='text-base font-medium text-base tracking-tight font-NatoSansKR'>
          {dto.title}
        </p>
        <div className="flex gap-1 tracking-tight items-center text-[#7E7E7E]">
          <span className = "text-xs font-NatoSansKR">평균</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M5.651 1.806a.375.375 0 0 1 .673 0l1.361 2.759a.13.13 0 0 0 .094.068l3.044.442c.308.045.43.423.208.64L8.828 7.862a.13.13 0 0 0-.036.11l.52 3.032a.375.375 0 0 1-.544.395L6.046 9.97a.13.13 0 0 0-.117 0l-2.722 1.43a.375.375 0 0 1-.544-.395l.52-3.031a.13.13 0 0 0-.036-.111L.944 5.715a.375.375 0 0 1 .208-.64l3.044-.442a.13.13 0 0 0 .094-.068z"></path></svg>

          <span className = "text-xs font-NatoSansKR">2.5</span>
        </div>
      </div>
    </Link>

  );
}


/*
export default function MovieCard({ id, title, year, posterUrl }: Props) {
    return (
        <div className="bg-zinc-800 rounded overflow-hidden shadow-md hover:scale-[1.02] transition">
            <img
                src={posterUrl}
                alt={title}
                className="w-full aspect-[2/3] object-cover"
            />
            <div className="p-2">
                <h3 className="text-sm font-semibold truncate">{title}</h3>
                <p className="text-xs text-zinc-400">{year}</p>
            </div>
        </div>
    );
}
*/