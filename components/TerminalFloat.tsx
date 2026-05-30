'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const LINES = [
  '$ ssh trinity@home --restricted',
  '> authentification...',
  '> ACCÈS_RESTREINT : disponible',
  '> ↵  entrer dans la matrice',
];
const DELAY = 3000;
const CHAR_SPEED = 28;
const LINE_GAP = 220;

export default function TerminalFloat() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [done, setDone] = useState(false);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [currentTyped, setCurrentTyped] = useState('');
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), DELAY);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible || done) return;
    if (lineIndex >= LINES.length) {
      setDone(true);
      return;
    }
    const line = LINES[lineIndex];
    if (currentTyped.length < line.length) {
      const t = setTimeout(() => {
        setCurrentTyped(line.slice(0, currentTyped.length + 1));
      }, CHAR_SPEED);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setCompletedLines(prev => [...prev, line]);
      setCurrentTyped('');
      setLineIndex(i => i + 1);
    }, LINE_GAP);
    return () => clearTimeout(t);
  }, [visible, done, lineIndex, currentTyped]);

  if (dismissed) return null;

  return (
    <div
      className={`terminal-float${visible ? ' terminal-float--visible' : ''}`}
      role="complementary"
      aria-label="Terminal d'accès restreint"
    >
      <div className="terminal-float__titlebar">
        <button
          className="terminal-float__dot terminal-float__dot--close"
          onClick={() => setDismissed(true)}
          aria-label="Fermer"
        />
        <div className="terminal-float__dot terminal-float__dot--min" aria-hidden="true" />
        <div className="terminal-float__dot terminal-float__dot--max" aria-hidden="true" />
        <span className="terminal-float__name">connexion_distante.sh</span>
      </div>
      <div className="terminal-float__body">
        {completedLines.map((line, i) => {
          const isCta = i === LINES.length - 1;
          return (
            <p key={i} className={`terminal-float__line${isCta ? ' terminal-float__line--cta' : ''}`}>
              {isCta
                ? <Link href="/le-choix" className="terminal-float__cta">{line}</Link>
                : line}
            </p>
          );
        })}
        {!done && (
          <p className="terminal-float__line terminal-float__line--active">
            {currentTyped}<span className="terminal-float__cursor" aria-hidden="true">█</span>
          </p>
        )}
      </div>
    </div>
  );
}
