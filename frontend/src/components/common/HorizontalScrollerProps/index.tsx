import MovieCard from "../MovieCard";
import { HorizontalScrollerProps } from "./type";

interface Props{
  children: React.ReactNode;
}

export default function HorizontalScroller ({children}: Props) {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap p-4 scrollbar-hide">
          {children}

      {/* <div className="inline-block w-40 h-60 rounded-md bg-red-300 mr-4">Item 1</div>
      <div className="inline-block w-40 h-60 rounded-md bg-blue-300 mr-4">Item 2</div>
      <div className="inline-block w-40 h-60 rounded-md bg-green-300 mr-4">Item 3</div>
      <div className="inline-block w-40 h-60 rounded-md bg-yellow-300 mr-4">Item 4</div>
      <div className="inline-block w-40 h-60 rounded-md bg-purple-300 mr-4">Item 5</div> */}
    </div>
  );
};


/*
export default function HorizontalScroller({ title, children }: HorizontalScrollerProps) {
    return (
        <section className="mb-8">
            {title && <h2 className="text-xl font-semibold mb-2 px-4">{title}</h2>}
            <div className="overflow-x-auto whitespace-nowrap px-4 scrollbar-hide">
                <div className="flex gap-4">{children}</div>
            </div>
        </section>
    );
}
*/