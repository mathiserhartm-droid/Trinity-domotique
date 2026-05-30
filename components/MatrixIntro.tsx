'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import MatrixRain from '@/components/MatrixRain';
import RabbitTrail from '@/components/RabbitTrail';

const LINE1 = '> Hello Neo';
const LINE2 = '> catch the rabbit...';
const LINE3 = '> discover the true power of your house';
const CHAR_SPEED = 55;

type Phase = 'idle' | 'entering' | 'typing1' | 'typing2' | 'typing3' | 'cta';

export default function MatrixIntro() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>('idle');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  // dismissing : déclenche le fade-out avant de retirer du DOM
  const [dismissing, setDismissing] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [skipVisible, setSkipVisible] = useState(false);

  useEffect(() => {
    // Pilule rouge : bypass immédiat, on arrive sur la homepage sans intro
    if (sessionStorage.getItem('matrix_bypass')) {
      sessionStorage.removeItem('matrix_bypass');
      setDismissed(true);
      return;
    }

    const isReturning = !!localStorage.getItem('matrix_seen');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReturning) { setDismissed(true); return; }

    if (reduced) {
      setText1(LINE1);
      setText2(LINE2);
      setText3(LINE3);
      setPhase('cta');
      localStorage.setItem('matrix_seen', '1');
      return;
    }

    // Fenêtre terminal entre après un court délai
    const t = setTimeout(() => setPhase('entering'), 120);
    return () => clearTimeout(t);
  }, []);

  // entering → typing1
  useEffect(() => {
    if (phase !== 'entering') return;
    const t = setTimeout(() => setPhase('typing1'), 700);
    return () => clearTimeout(t);
  }, [phase]);

  // typing line 1
  useEffect(() => {
    if (phase !== 'typing1') return;
    if (text1.length < LINE1.length) {
      const t = setTimeout(() => setText1(LINE1.slice(0, text1.length + 1)), CHAR_SPEED);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase('typing2'), 700);
    return () => clearTimeout(t);
  }, [phase, text1]);

  // typing line 2
  useEffect(() => {
    if (phase !== 'typing2') return;
    if (text2.length < LINE2.length) {
      const t = setTimeout(() => setText2(LINE2.slice(0, text2.length + 1)), CHAR_SPEED);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase('typing3'), 700);
    return () => clearTimeout(t);
  }, [phase, text2]);

  // typing line 3
  useEffect(() => {
    if (phase !== 'typing3') return;
    if (text3.length < LINE3.length) {
      const t = setTimeout(() => setText3(LINE3.slice(0, text3.length + 1)), CHAR_SPEED);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setPhase('cta');
      setSkipVisible(true);
      localStorage.setItem('matrix_seen', '1');
    }, 700);
    return () => clearTimeout(t);
  }, [phase, text3]);

  const handleEnter = useCallback(() => router.push('/le-choix'), [router]);

  // Fade-out l'overlay avant de retirer du DOM — évite le flash homepage
  const handleSkip = useCallback(() => {
    setDismissing(true);
    setTimeout(() => setDismissed(true), 450);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') handleSkip();
      if (e.key === 'Enter' && phase === 'cta') handleEnter();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleSkip, handleEnter, phase]);

  if (dismissed) return null;

  return (
    // L'overlay est opaque dès le premier rendu (pas de flash homepage)
    // Seule la fenêtre terminal fait son entrée en animation
    <div
      className={`matrix-intro${dismissing ? ' matrix-intro--dismissing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Introduction Trinity Domotique"
    >
      <MatrixRain
        id="matrix-rain-intro"
        className="matrix-intro__rain"
        color="#00ff41"
        speed={0.5}
        bg="rgba(0,0,0,0.02)"
      />
      <div className="matrix-intro__veil" aria-hidden="true" />

      {phase === 'cta' && <RabbitTrail onCatch={handleEnter} />}

      <div className={`matrix-intro__terminal${phase !== 'idle' ? ' matrix-intro__terminal--visible' : ''}`}>
        {/* Topbar décorative */}
        <div className="matrix-intro__topbar" aria-hidden="true">
          <span className="matrix-intro__dot matrix-intro__dot--r" />
          <span className="matrix-intro__dot matrix-intro__dot--y" />
          <span className="matrix-intro__dot matrix-intro__dot--g" />
          <span className="matrix-intro__topbar-label">terminal_01.sh</span>
        </div>

        <div className="matrix-intro__body">
          {phase === 'entering' && (
            <p className="matrix-intro__line">
              <span className="matrix-intro__cursor" aria-hidden="true">█</span>
            </p>
          )}

          {(phase === 'typing1' || phase === 'typing2' || phase === 'typing3' || phase === 'cta') && (
            <p className="matrix-intro__line" aria-live="polite" aria-atomic="true">
              {text1}
              {phase === 'typing1' && (
                <span className="matrix-intro__cursor" aria-hidden="true">█</span>
              )}
            </p>
          )}

          {(phase === 'typing2' || phase === 'typing3' || phase === 'cta') && (
            <p className="matrix-intro__line" aria-live="polite" aria-atomic="true">
              {text2}
              {phase === 'typing2' && (
                <span className="matrix-intro__cursor" aria-hidden="true">█</span>
              )}
            </p>
          )}

          {(phase === 'typing3' || phase === 'cta') && (
            <p className="matrix-intro__line" aria-live="polite" aria-atomic="true">
              {text3}
              {phase === 'typing3' && (
                <span className="matrix-intro__cursor" aria-hidden="true">█</span>
              )}
            </p>
          )}
        </div>
      </div>

      {skipVisible && (
        <button
          className="matrix-intro__skip"
          onClick={handleSkip}
          aria-label="Passer l'introduction"
        >
          Skip →
        </button>
      )}
    </div>
  );
}
