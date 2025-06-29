import { useEffect } from 'react';

export function useObserver(
  ref: React.RefObject<HTMLElement | null>,
  onVisible: () => void,
  options: IntersectionObserverInit = { threshold: 0.3 }
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onVisible();
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [ref, onVisible, options]);
}
