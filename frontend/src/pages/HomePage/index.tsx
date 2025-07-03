import UpcomingMoviesCarousel from "src/components/movie/scrolls/UpcomingMoviesCarousel";
import TopPopularCarousel from "src/components/movie/scrolls/TopPopularCarousel";
import TopRatedCarousel from "src/components/movie/scrolls/TopRatedCarousel";
import PopularCommentsCarousel from "src/components/movie/scrolls/PopularCommentsCarousel";
import RecommendedMoviesCarousel from "src/components/movie/scrolls/RecommendedMoviesCarousel";
import LatestMoviesCarousel from "src/components/movie/scrolls/LatestMoviesCarousel";
// import MovieCard from "../../components/common/MovieCard";



export default function HomePage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto mt-navH gap-12">

      <div>
        <div className="flex">
          <h1 className="text-xl tracking-tight font-NatoSansKR font-bold">HOT 랭킹</h1>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          </button>
        </div>
        <TopPopularCarousel></TopPopularCarousel>
      </div>

      
      <div>
        <div className="flex">
          <h1 className="text-xl tracking-tight font-NatoSansKR font-bold">공개 예정작</h1>
        </div>
        <UpcomingMoviesCarousel></UpcomingMoviesCarousel>
      </div>


      <div>
        <div className="flex">
          <h1 className="text-xl tracking-tight font-NatoSansKR font-bold">최신 영화</h1>
        </div>
        <LatestMoviesCarousel></LatestMoviesCarousel>
      </div>


      <div>
        <div className="flex">
          <h1 className="text-xl tracking-tight font-NatoSansKR font-bold">최다 평가작</h1>
        </div>
        <TopRatedCarousel></TopRatedCarousel>
      </div>


      <div>
        <div className="flex">
          <h1 className="text-xl tracking-tight font-NatoSansKR font-bold">최신 리뷰/코멘트</h1>
        </div>
        <PopularCommentsCarousel></PopularCommentsCarousel>
      </div>

      <div>
        <div className="flex">
          <h1 className="text-xl tracking-tight font-NatoSansKR font-bold">오늘의 추천</h1>
        </div>
        <RecommendedMoviesCarousel></RecommendedMoviesCarousel>
      </div>
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