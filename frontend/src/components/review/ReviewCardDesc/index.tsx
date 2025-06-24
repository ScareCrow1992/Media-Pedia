
interface ReviewCardProps{
  content: string;
  className: string;
}

export default function ReviewCardDesc({content, className}: ReviewCardProps){
  return(
    <div className= {`px-4 py-3 text-sm leading-relaxed grow line-clamp-3 ${className}`}>
        {content}
      </div>
  );
}