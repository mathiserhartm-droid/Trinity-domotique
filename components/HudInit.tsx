'use client';

import { useEffect } from 'react';

export default function HudInit() {
  useEffect(() => {
    // Ripple on hud-btn click
    if (!document.getElementById('hud-btn-styles')) {
      const s = document.createElement('style');
      s.id = 'hud-btn-styles';
      s.textContent = '@keyframes hud-ripple { to { transform:translate(-50%,-50%) scale(30); opacity:0; } }' +
        '@keyframes hud-rotate { to { transform: rotate(360deg); } }' +
        '@keyframes hud-rotate-rev { to { transform: rotate(-360deg); } }';
      document.head.appendChild(s);
    }

    function addRipple(e: MouseEvent) {
      const btn = (e.currentTarget as HTMLElement);
      const ripple = document.createElement('span');
      const rect = btn.getBoundingClientRect();
      ripple.style.cssText =
        'position:absolute;border-radius:50%;pointer-events:none;' +
        'width:4px;height:4px;background:var(--hud-color,#00ff41);' +
        `left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;` +
        'transform:translate(-50%,-50%) scale(0);animation:hud-ripple 0.5s ease forwards;';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    }

    document.querySelectorAll<HTMLElement>('.hud-btn').forEach(btn => {
      btn.addEventListener('click', addRipple as EventListener);
    });

    // HUD targeting scan-lines
    document.querySelectorAll<HTMLElement>('.hud-target').forEach(el => {
      if (el.querySelector('.hud-scan-line')) return;
      const scan = document.createElement('div');
      scan.className = 'hud-scan-line';
      el.appendChild(scan);
      if (el.dataset.label) {
        const chip = document.createElement('span');
        chip.className = 'hud-chip';
        chip.textContent = el.dataset.label;
        chip.style.cssText = 'position:absolute;bottom:-22px;left:0;';
        el.appendChild(chip);
      }
    });

    // HUD reticle SVGs
    document.querySelectorAll<HTMLElement>('.hud-reticle').forEach(el => {
      if (el.querySelector('svg')) return;
      const size = parseInt(el.dataset.size ?? '200');
      const c = size / 2, r1 = size * 0.38, r2 = size * 0.28;
      el.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none">
        <g style="transform-origin:${c}px ${c}px;animation:hud-rotate 8s linear infinite">
          <circle cx="${c}" cy="${c}" r="${r1}" stroke="#00ff41" stroke-width="0.5" stroke-dasharray="4 8" opacity="0.5"/>
        </g>
        <g style="transform-origin:${c}px ${c}px;animation:hud-rotate-rev 5s linear infinite">
          <circle cx="${c}" cy="${c}" r="${r2}" stroke="#00ff41" stroke-width="1" stroke-dasharray="12 6" opacity="0.7"/>
        </g>
        <line x1="${c}" y1="${c-16}" x2="${c}" y2="${c-8}" stroke="#00ff41" stroke-width="1.5"/>
        <line x1="${c}" y1="${c+8}" x2="${c}" y2="${c+16}" stroke="#00ff41" stroke-width="1.5"/>
        <line x1="${c-16}" y1="${c}" x2="${c-8}" y2="${c}" stroke="#00ff41" stroke-width="1.5"/>
        <line x1="${c+8}" y1="${c}" x2="${c+16}" y2="${c}" stroke="#00ff41" stroke-width="1.5"/>
        <circle cx="${c}" cy="${c}" r="2" fill="#00ff41"/>
        <text x="${c+r1+6}" y="${c-4}" fill="#00ff41" font-family="monospace" font-size="8" opacity="0.7">${el.dataset.system ?? 'SYS'}</text>
        <text x="${c+r1+6}" y="${c+8}" fill="#00ff41" font-family="monospace" font-size="8" opacity="0.5">ONLINE</text>
      </svg>`;
    });

    // Scroll reveal
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
      }, { threshold: 0.12 });
      document.querySelectorAll('.scroll-reveal, section').forEach(el => obs.observe(el));
    }

    // Sticky header
    const header = document.querySelector<HTMLElement>('.site-header');
    function onScroll() { header?.classList.toggle('header--scrolled', window.scrollY > 80); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Footer year
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    return () => { window.removeEventListener('scroll', onScroll); };
  }, []);

  return null;
}
