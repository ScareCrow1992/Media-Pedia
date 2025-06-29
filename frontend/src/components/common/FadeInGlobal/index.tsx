import { useObserver } from "src/hooks/useObserver";
import { useRef, useState } from "react";

export default function FadeInGlobal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useObserver(ref, () => setVisible(true));

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
