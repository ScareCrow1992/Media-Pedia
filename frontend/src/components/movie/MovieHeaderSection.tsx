import { useMovie } from "src/contexts/MoviePageContext";


export default function MovieHeaderSection() {

  const { movie } = useMovie();

  return (
    <div className="relative h-[31rem]">
      <img className="w-full h-full object-cover object-top" src="/posters/interstellar_big.jpg" />
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `
                        linear-gradient(to bottom, rgba(0,0,0,0.3),
                        transparent 30%, transparent 40%, rgba(0,0,0,0.8))
      `
        }}
      />
      <div className="mx-[0rem] sm:mx-[2rem] md:mx-[4rem] lg:mx-[6rem] xl:mx-[12rem]">
        <div className="absolute bottom-[0rem] mx-[2rem] mb-16 text-white">
          <h1 className="font-bold text-4xl">{movie.title}</h1>
          <p className="text-sm mt-3">interstellar</p>
          <p className="text-sm mt-1">2014 · 모험/드라마/SF · 미국, 영국, 캐나다</p>
          <p className="text-sm mt-1">2시간 49분 · 12세</p>
        </div>
      </div>
    </div>

  );

}