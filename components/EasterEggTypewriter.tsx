'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const FULL_TEXT = '> accès_restreint';
const DELAY_MS = 4000;
const TYPE_SPEED = 75;

export default function EasterEggTypewriter() {
  const [displayed, setDisplayed] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!active || displayed.length >= FULL_TEXT.length) return;
    const t = setTimeout(() => {
      setDisplayed(FULL_TEXT.slice(0, displayed.length + 1));
    }, TYPE_SPEED);
    return () => clearTimeout(t);
  }, [active, displayed]);

  const done = displayed.length === FULL_TEXT.length;

  return (
    <div className="choix-easter-egg-wrapper">
      <div className="choix-easter-egg-glow" aria-hidden="true" />
      <Link
        href="/le-choix"
        className={`choix-easter-egg choix-easter-egg--typewriter${active ? ' is-active' : ''}`}
        aria-label="Entrer dans la Matrice — découvrir le vrai potentiel de votre maison"
      >
        <span className="easter-egg__text">{displayed}</span>
        <span className={`easter-egg__cursor${done ? ' easter-egg__cursor--blink' : ''}`} aria-hidden="true">█</span>
      </Link>
    </div>
  );
}
