export default function PosterImage() {
  return (
    <div className="w-full aspect-[2/3] max-w-[20rem] overflow-hidden bg-gray-200">
      <img
        className="w-full h-full object-cover object-center"
        src="/posters/interstellar.webp"
        alt="Poster"
      />
    </div>
  );
}