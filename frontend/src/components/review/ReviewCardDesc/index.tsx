import { Link } from "react-router-dom";

interface ReviewCardProps {
  content: string;
  className: string;
  url: string | null;
}
// 


export default function ReviewCardDesc({ content, className, url }: ReviewCardProps) {

  if (url === null) {
    return (
      <div className={`${className}`}>
        {content}
      </div>
    );
  }
  else {
    return (
      <Link to = {url} className={`${className}`}>
        {content}
      </Link>
    );
  }
}