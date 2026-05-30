'use client';
import { useEffect, useRef } from 'react';

const RABBIT = ['(\\ /)', '( •.•)', '(>  <)'];
const CHARS = 'アイウエオカキクケコ01234ABCDE@#$';
const FS = 13;

interface Props { onCatch: () => void; }

export default function RabbitTrail({ onCatch }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onCatchRef = useRef(onCatch);
  onCatchRef.current = onCatch;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let raf: number;

    const pos = { x: 0, y: 0, dx: 1.4, dy: 0.9 };
    type Particle = { x: number; y: number; ch: string; a: number };
    const trail: Particle[] = [];
    let frame = 0;

    function resize() {
      canvas.width  = canvas.parentElement?.offsetWidth  ?? window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight ?? window.innerHeight;
      if (pos.x === 0) {
        pos.x = canvas.width  * 0.6;
        pos.y = canvas.height * 0.4;
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      frame++;
      if (frame % 3 === 0) {
        trail.push({
          x:  pos.x + (Math.random() - 0.5) * 22,
          y:  pos.y + 30 + Math.random() * 10,
          ch: CHARS[Math.floor(Math.random() * CHARS.length)],
          a:  0.9,
        });
      }

      ctx.font = `${FS}px monospace`;
      for (let i = trail.length - 1; i >= 0; i--) {
        const t = trail[i];
        t.a -= 0.018;
        if (t.a <= 0) { trail.splice(i, 1); continue; }
        ctx.globalAlpha = t.a;
        ctx.fillStyle = '#00ff41';
        ctx.fillText(t.ch, t.x, t.y);
      }
      ctx.globalAlpha = 1;

      pos.x += pos.dx;
      pos.y += pos.dy;

      const pw = 50, ph = 42;
      if (pos.x < pw)                  { pos.x = pw;                  pos.dx =  Math.abs(pos.dx); }
      if (pos.x > canvas.width  - pw)  { pos.x = canvas.width  - pw;  pos.dx = -Math.abs(pos.dx); }
      if (pos.y < ph)                  { pos.y = ph;                  pos.dy =  Math.abs(pos.dy); }
      if (pos.y > canvas.height - ph)  { pos.y = canvas.height - ph;  pos.dy = -Math.abs(pos.dy); }

      if (Math.random() > 0.985) {
        pos.dx += (Math.random() - 0.5) * 0.5;
        pos.dy += (Math.random() - 0.5) * 0.5;
        const spd = Math.hypot(pos.dx, pos.dy);
        const target = 1.1 + Math.random() * 0.7;
        pos.dx = (pos.dx / spd) * target;
        pos.dy = (pos.dy / spd) * target;
      }

      ctx.fillStyle = '#00ff41';
      ctx.font = `bold ${FS + 1}px monospace`;
      RABBIT.forEach((line, i) => {
        ctx.fillText(line, pos.x - 27, pos.y + i * (FS + 4));
      });

      raf = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      const r = canvas.getBoundingClientRect();
      const near = Math.hypot(e.clientX - r.left - pos.x, e.clientY - r.top - pos.y) < 55;
      canvas.style.cursor = near ? 'pointer' : 'default';
    }

    function onClick(e: MouseEvent) {
      const r = canvas.getBoundingClientRect();
      if (Math.hypot(e.clientX - r.left - pos.x, e.clientY - r.top - pos.y) < 55) {
        onCatchRef.current();
      }
    }

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('click', onClick);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-intro__rabbit-trail"
      aria-hidden="true"
    />
  );
}
