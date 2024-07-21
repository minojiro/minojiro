import { useEffect, useRef } from "react";
import { debounce } from "lightweight-debounce-throttle";

export const useMasonry = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const items: Element[] = [];

  const getItems = () => {
    const wrapperEl = wrapperRef.current;
    if (!wrapperEl) return;
    const els = Array.from(wrapperEl.children ?? []) as HTMLDivElement[];
    for (const el of els) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 5;
      el.style.transform = `translateY(${y}%) translateX(${x}%)`;
      items.push(el);
    }
  };

  const tick = () => {
    const wrapperEl = wrapperRef.current;
    if (!wrapperEl) return;

    for (const el of items) {
      wrapperEl.append(el);
    }
    const oldCols = wrapperEl.querySelectorAll(".col");
    for (const el of Array.from(oldCols)) {
      el.remove();
    }

    const els = Array.from(wrapperEl.children ?? []);
    const colNum =
      getComputedStyle(wrapperEl).gridTemplateColumns.split(" ").length;

    const colEls = Array.from({ length: colNum }, (_, i) => {
      const colEl = document.createElement("div");
      colEl.className = "col gap-4 md:gap-16";
      colEl.style.gridColumn = `${i + 1} / ${i + 2}`;
      colEl.style.gridRow = "1 / 2";
      colEl.style.display = "grid";
      wrapperEl.append(colEl);
      return colEl;
    });

    for (const node of els) {
      const el = node as HTMLDivElement;
      if (colNum === 1) {
        el.style.transform = "";
      }
      const colEl = colEls.reduce((acc, cur) => {
        return acc.clientHeight <= cur.clientHeight ? acc : cur;
      });
      colEl.append(el);
    }
  };
  let done = false;

  useEffect(() => {
    if (done) return;
    done = true;

    getItems();
    const { exec } = debounce(() => tick(), 250);
    window.addEventListener("resize", exec);
    tick();
    setTimeout(tick, 3000);
  }, []);

  return {
    wrapperRef,
  };
};
