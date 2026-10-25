import { useLayoutEffect, useState } from 'react';
import type { RefObject } from 'react';

/**
 * Number of masonry columns that fit the element's own width (not the viewport),
 * so the layout also adapts when the desktop sidebar is opened.
 */
export const useColumnCount = (ref: RefObject<HTMLElement | null>, minColumnWidth = 340, max = 3) => {
  const [columns, setColumns] = useState(1);

  // Layout effect: measure before first paint so there's no one-column flash.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = (width: number) =>
      setColumns(Math.max(1, Math.min(max, Math.floor(width / minColumnWidth))));
    update(el.getBoundingClientRect().width);
    const observer = new ResizeObserver(([entry]) => update(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, minColumnWidth, max]);

  return columns;
};
