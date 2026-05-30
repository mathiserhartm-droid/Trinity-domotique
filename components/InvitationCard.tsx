'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const DELAY = 3000;

export default function InvitationCard() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), DELAY);
    return () => clearTimeout(t);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`invite-card${visible ? ' invite-card--visible' : ''}`}
      role="complementary"
      aria-label="Message pour les curieux"
    >
      <button
        className="invite-card__close"
        onClick={() => setDismissed(true)}
        aria-label="Fermer"
      >
        ×
      </button>
      <p className="invite-card__eyebrow">À tous ceux qui veulent sortir de la matrice</p>
      <div className="invite-card__divider" aria-hidden="true" />
      <p className="invite-card__text">
        Certains clients voient plus loin.<br />
        Voulez-vous en sortir&nbsp;?
      </p>
      <Link href="/le-choix" className="invite-card__cta">
        Découvrir →
      </Link>
    </div>
  );
}
