import { MessageSquare } from "lucide-react";

interface CommentButtonProps {
  onClicked: () => void;
}

export default function CommentButton({onClicked}: CommentButtonProps) {
  return (
    <button
      onClick={onClicked}
      className="gap-1 w-full h-full"
    >
      <MessageSquare
        className="w-full h-full transition-colors text-black"
      />
    </button>
  );
}