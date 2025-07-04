import { Ellipsis } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";

interface EllipsisMenuProps {
  children: ReactNode,
  className?: string
}

export default function EllipsisMenu({ children, className }: EllipsisMenuProps) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button onClick={(e) => {
        // 메뉴 밖 클릭으로 닫히는 로직이 있을때, 내부 버튼 클릭도 전파되는 경우를 차단
        e.stopPropagation();
        setShowMenu((prev) => !prev);
      }}
      >

        <Ellipsis className="w-5 h-5 cursor-pointer" />
      </button>

      {/* whitespace-nowrap : 텍스트가 한줄로 유지되도록 설정한다 (w-auto와 연계됨) */}
      {showMenu && (
        <div className="flex flex-col absolute p-2 right-8 bottom-[-1.5rem] mt-2 w-auto bg-white rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.4)] z-10 whitespace-nowrap">
          {children}
        </div>
      )}
    </div>
  );
}