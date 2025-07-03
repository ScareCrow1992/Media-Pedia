import { MovieDetailDTO } from "src/apis/services/movie/types";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  dto: MovieDetailDTO;
  linkUrl: string;
  label?: string;
  bottomInfo?: ReactNode;
};

export default function MovieCard({ dto, linkUrl, label, bottomInfo }: Props) {
  return (
    <Link to={`${linkUrl}/${dto.id}`}>
      <div className="w-fit h-fit m-[0.5rem]">
        <div className="
                    relative rounded-lg overflow-hidden bg-zinc-500
                    w-[8rem] h-[12rem]
                    sm:w-[8rem] sm:h-[12rem]
                    md:w-[12rem] md:h-[18rem]
                    lg:w-[14rem] lg:h-[21rem]
                    xl:w-[16rem] xl:h-[24rem]
                    ">

          <img className="w-full h-full object-cover object-center" src={`/movies/${dto.id}/poster.webp`} />


          {label && (
            <div className="absolute top-1 left-1 bg-black/70 text-white px-2  rounded">
              <p className="font-bold tracking-tight font-NatoSansKR text-base align-middle">{label}</p>
            </div>
          )}


        </div>

        <p className='text-base font-medium text-base tracking-tight font-NatoSansKR mt-1'>
          {dto.title}
        </p>

        {bottomInfo && (<>{bottomInfo}</>
          

        )}

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