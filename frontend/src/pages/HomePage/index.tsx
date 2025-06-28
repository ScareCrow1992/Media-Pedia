import TopPopularCarousel from "src/components/movie/scrolls/TopPopularCarousel";
// import MovieCard from "../../components/common/MovieCard";



export default function HomePage() {
  return (
    <div className="w-full max-w-screen-xl mx-auto mt-navH">
      <div className="flex">
        <h1 className="text-xl font-bold">왓챠피디아 HOT 랭킹</h1>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
        </button>
      </div>
      <TopPopularCarousel></TopPopularCarousel>

      
      <div className="flex">
        <h1 className="text-xl font-bold py-4">영화 공개 예정작</h1>
      </div>
      <TopPopularCarousel></TopPopularCarousel>
      {/* <HorizontalScroller>

        {Array.from({ length: 8 }).map((_, i) => (
          <MovieCard key={i + 1}
            id={1}
            title={"Interstellar"}
            year={2022}
            posterUrl={"/posters/interstellar.webp"}
            linkUrl={"/movies"}
          />
        ))}

      </HorizontalScroller> */}

{/* 
      <div className="flex">
        <h1 className="text-xl font-bold py-4">영화 공개 예정작</h1>
      </div>
      <HorizontalScroller>

        {Array.from({ length: 8 }).map((_, i) => (
          <MovieCard key={i + 1}
            id={1}
            title={"Interstellar"}
            year={2022}
            posterUrl={"/posters/interstellar.webp"}
            linkUrl={"/movies"}
          />
        ))}
      </HorizontalScroller>

      <div className="flex">
        <h1 className="text-xl font-bold py-4">영화 공개 예정작</h1>
      </div>
      <HorizontalScroller>

        {Array.from({ length: 8 }).map((_, i) => (
          <MovieCard key={i + 1}
            id={1}
            title={"Interstellar"}
            year={2022}
            posterUrl={"/posters/interstellar.webp"}
            linkUrl={"/movies"}
          />
        ))}
      </HorizontalScroller>

      <div className="flex">
        <h1 className="text-xl font-bold py-4">영화 공개 예정작</h1>
      </div>
      <HorizontalScroller>

        {Array.from({ length: 8 }).map((_, i) => (
          <MovieCard key={i + 1}
            id={1}
            title={"Interstellar"}
            year={2022}
            posterUrl={"/posters/interstellar.webp"}
            linkUrl={"/movies"}
          />
        ))}
      </HorizontalScroller> */}
    </div>
  );
}