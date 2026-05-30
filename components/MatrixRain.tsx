'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  id: string;
  className?: string;
  color?: string;
  speed?: number;
  bg?: string;
}

export default function MatrixRain({ id, className, color = '#00ff41', speed = 1, bg = 'rgba(0,0,0,0.05)' }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()[]{}';
    const fontSize = 14;
    let cols: number, drops: number[], raf: number;

    function resize() {
      canvas!.width  = canvas!.parentElement?.offsetWidth  ?? window.innerWidth;
      canvas!.height = canvas!.parentElement?.offsetHeight ?? window.innerHeight;
      cols  = Math.floor(canvas!.width / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    }

    function draw() {
      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      ctx!.fillStyle = color;
      ctx!.font = fontSize + 'px monospace';
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx!.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += speed;
      }
      raf = requestAnimationFrame(draw);
    }

    function onVisibility() {
      if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
      else if (!raf) draw();
    }

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [color, speed, bg]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      aria-hidden="true"
    />
  );
}
