import { useMovie } from "src/contexts/MoviePageContext";


export default function MovieHeaderSection() {

    const { movie } = useMovie();

    return (
        <div className="relative h-[40rem]">
            <img className="w-full h-full object-cover object-top" src="/posters/interstellar_big.jpg" />
            <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to bottom, rgba(0,0,0,0.3),
                        transparent 30%, transparent 50%, rgba(0,0,0,0.8))
      `
                }}
            />

            <div className="absolute bottom-[0rem] m-[2rem] text-white">
                <h1 className="font-bold text-xl">{movie.title}</h1>
                <p>interstellar</p>
                <p>2014 · 모험/드라마/SF · 미국, 영국, 캐나다</p>
                <p>2시간 49분 · 12세</p>
            </div>
        </div>

    );

}