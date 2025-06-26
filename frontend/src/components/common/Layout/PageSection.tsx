import { parseResponsiveMarginX } from 'src/util/tailwind';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  marginX?: number[];
  marginY?: string; // Tailwind margin 예: 'my-10'
  title?: string;
  link?: string;
}

export default function PageSection({
  children,
  marginX = [0, 0, 0, 0, 0],
  marginY = 'my-0',
  title,
  link
}: Props) {

  // const responsiveMarginX = parseResponsiveMarginX(marginX);
  // console.log(marginY)
  //

  return (
    <div className={`mx-[0rem] sm:mx-[2rem] md:mx-[4rem] lg:mx-[6rem] xl:mx-[12rem] ${marginY}`}>
      <div className="flex mb-4">
        {title && (
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              {title}
            </span>
          </div>
        )}
        {link && (
          <div className="ml-auto h-[3rem] aspect-square text-sm tracking-tight font-NatoSansKR text-[#7E7E7E]">
            <Link to={`${link}`}>더보기</Link>
          </div>)}
      </div>

      {children}
    </div>
  );
}