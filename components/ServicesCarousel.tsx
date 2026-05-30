'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { services } from '@/lib/services-data';

const INTERVAL = 4000;

export default function ServicesCarousel() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeRef = useRef(active);
  activeRef.current = active;

  const goTo = useCallback((idx: number) => {
    if (idx === activeRef.current) return;
    setVisible(false);
    setTimeout(() => {
      setActive(idx);
      setVisible(true);
    }, 220);
  }, []);

  const startTimers = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      goTo((activeRef.current + 1) % services.length);
    }, INTERVAL);
  }, [goTo]);

  useEffect(() => {
    startTimers();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTimers, active]);

  function handleGoTo(idx: number) {
    goTo(idx);
    startTimers();
  }

  function advance(dir: number) {
    handleGoTo((active + dir + services.length) % services.length);
  }

  const s = services[active];

  return (
    <div className="svc-carousel">
      <div className="svc-carousel__header">
        <span className="svc-carousel__id">{s.id}</span>
        <span className="svc-carousel__sep">/</span>
        <span className="svc-carousel__total">{String(services.length).padStart(2, '0')}</span>
      </div>

      <div className={`svc-carousel__card${visible ? ' svc-carousel__card--in' : ' svc-carousel__card--out'}`}>
        <h3 className="svc-carousel__title">{s.title}</h3>
        <p className="svc-carousel__desc">{s.desc}</p>
      </div>

      <div className="svc-carousel__controls">
        <button onClick={() => advance(-1)} className="svc-carousel__btn" aria-label="Service précédent">
          <span aria-hidden="true">←</span> PREV
        </button>
        <div className="svc-carousel__dots" role="tablist">
          {services.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              onClick={() => handleGoTo(i)}
              className={`svc-carousel__dot${i === active ? ' active' : ''}`}
              aria-label={services[i].title}
            />
          ))}
        </div>
        <button onClick={() => advance(1)} className="svc-carousel__btn" aria-label="Service suivant">
          NEXT <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
