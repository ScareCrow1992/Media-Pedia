export default function MovieCardSkeleton() {
  return (
    <div className="w-fit h-fit m-[0.5rem]">
      <div className="
                    relative rounded-lg overflow-hidden bg-zinc-200
                    w-[8rem] h-[12rem]
                    sm:w-[8rem] sm:h-[12rem]
                    md:w-[12rem] md:h-[18rem]
                    lg:w-[14rem] lg:h-[21rem]
                    xl:w-[16rem] xl:h-[24rem]
                    ">
        <img className="w-full h-full object-cover object-center" />
      </div>
    </div>
  );
}