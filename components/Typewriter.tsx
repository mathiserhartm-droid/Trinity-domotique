'use client';

import { useEffect, useRef } from 'react';

interface TypewriterProps {
  strings: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
  loop?: boolean;
  className?: string;
}

export default function Typewriter({ strings, speed = 80, deleteSpeed, pause = 1800, loop = true, className }: TypewriterProps) {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const delSpeed = deleteSpeed ?? speed / 2;
    let si = 0, ci = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const current = strings[si];
      if (!deleting) {
        el!.textContent = current.slice(0, ci + 1);
        ci++;
        if (ci === current.length) {
          if (!loop && si === strings.length - 1) return; // one-shot: stop here
          timer = setTimeout(() => { deleting = true; tick(); }, pause);
          return;
        }
      } else {
        el!.textContent = current.slice(0, ci - 1);
        ci--;
        if (ci === 0) {
          deleting = false;
          si = (si + 1) % strings.length;
        }
      }
      timer = setTimeout(tick, deleting ? delSpeed : speed);
    }

    tick();
    return () => clearTimeout(timer);
  }, [strings, speed, deleteSpeed, pause, loop]);

  return <span ref={elRef} className={className} />;
}
