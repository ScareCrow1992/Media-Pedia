import { Link } from "react-router-dom";

type Props = {
    id: number;
    title: string;
    year: number;
    posterUrl: string;
};

export default function MovieCard() {
    return (
        <Link to ="/movies/1">
            <div className="inline-block bg-cyan-500 w-fit h-fit m-[0.5rem] p-[0.5rem]">
                <div className="
                    relative rounded-lg overflow-hidden bg-zinc-500
                    w-[8rem] h-[12rem]
                    sm:w-[10rem] sm:h-[15rem]
                    md:w-[12rem] md:h-[18rem]
                    lg:w-[14rem] lg:h-[21rem]
                    xl:w-[16rem] xl:h-[24rem]
                    ">

                    <img className="w-full h-full object-cover object-center" src="/posters/interstellar.webp" />

                    <div className="absolute top-1 left-1 bg-black/70 text-white text-xs px-2  rounded">
                        <p className="font-bold text-xl align-middle">D-3</p>
                    </div>

                </div>

                <p>인터스텔라</p>
                <div className="flex">
                    <span>평균</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M5.651 1.806a.375.375 0 0 1 .673 0l1.361 2.759a.13.13 0 0 0 .094.068l3.044.442c.308.045.43.423.208.64L8.828 7.862a.13.13 0 0 0-.036.11l.52 3.032a.375.375 0 0 1-.544.395L6.046 9.97a.13.13 0 0 0-.117 0l-2.722 1.43a.375.375 0 0 1-.544-.395l.52-3.031a.13.13 0 0 0-.036-.111L.944 5.715a.375.375 0 0 1 .208-.64l3.044-.442a.13.13 0 0 0 .094-.068z"></path></svg>

                    <span>2.5</span>
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