'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MatrixRain from '@/components/MatrixRain';
import Typewriter from '@/components/Typewriter';

type Phase = 'choice' | 'glitch';

export default function LeChoixClient() {
  const [phase, setPhase] = useState<Phase>('choice');
  const router = useRouter();

  function handlePill(color: 'red' | 'blue') {
    if (color === 'blue') {
      sessionStorage.removeItem('matrix_seen');
      router.push('/');
      return;
    }
    setPhase('glitch');
  }

  useEffect(() => {
    if (phase !== 'glitch') return;
    const t = setTimeout(() => {
      sessionStorage.setItem('matrix_bypass', '1');
      router.push('/');
    }, 900);
    return () => clearTimeout(t);
  }, [phase, router]);

  return (
    <section
      className={[
        'choix__scene',
        phase === 'glitch' && 'choix__scene--glitch',
      ].filter(Boolean).join(' ')}
      aria-labelledby="choix-title"
    >
      <MatrixRain id="matrix-rain-choix" className="hero__rain hero__rain--dim" color="#00ff41" speed={0.3} bg="rgba(0,0,0,0.06)" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container choix__scene-inner">
        <p className="choix__speaker" aria-hidden="true">// Morpheus_</p>
        <h1 id="choix-title" className="choix__quote">
          <Typewriter
            strings={["Je ne peux que te montrer la porte. C'est toi qui dois la franchir."]}
            speed={28}
            loop={false}
          />
        </h1>
        <p className="choix__sub">
          Ta maison a déjà tout le potentiel. Il te reste un choix à faire.
        </p>

        <div className="choix__pills" role="group" aria-label="Choisissez votre pilule">

          <div className="choix__pill-group choix__pill-group--red">
            <div className="pill-glow pill-glow--red" aria-hidden="true" />
            <button
              className="choix__pill-btn"
              onClick={() => handlePill('red')}
              aria-label="Pilule rouge — découvrir ce que ma maison peut faire"
            >
              <div className="pill pill--red" aria-hidden="true" />
              <span className="choix__pill-name choix__pill-name--red">Pilule rouge</span>
              <span className="choix__pill-desc">
                Découvrir ce que ma maison peut vraiment faire
              </span>
            </button>
          </div>

          <div className="choix__pill-group choix__pill-group--blue">
            <div className="pill-glow pill-glow--blue" aria-hidden="true" />
            <button
              className="choix__pill-btn"
              onClick={() => handlePill('blue')}
              aria-label="Pilule bleue — rester comme ça"
            >
              <div className="pill pill--blue" aria-hidden="true" />
              <span className="choix__pill-name choix__pill-name--blue">Pilule bleue</span>
              <span className="choix__pill-desc">
                Tu te réveilles dans ton canapé. Rien ne change.
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
