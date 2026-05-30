import type { Metadata } from 'next';
import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';
import Typewriter from '@/components/Typewriter';

export const metadata: Metadata = {
  title: 'Réalisations — Trinity Domotique',
  description: 'Découvrez les réalisations de Trinity Domotique : installations domotique chez des particuliers en Haute-Garonne. Photos et témoignages à venir.',
  openGraph: { url: 'https://trinity-domotique.fr/realisations' },
};

export default function RealisationsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" className="section section--hero section--hero-short" aria-labelledby="realisations-hero-title">
        <MatrixRain id="matrix-rain-realisations" className="hero__rain hero__rain--dim" color="#00ff41" speed={0.3} bg="rgba(0,0,0,0.05)" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content container">
          <h1 id="realisations-hero-title" className="hero__title" aria-label="Réalisations">
            <span className="terminal-prefix" aria-hidden="true">// &nbsp;</span>
            <Typewriter strings={['Réalisations']} speed={60} loop={false} />
            <span className="typewriter__cursor" aria-hidden="true">_</span>
          </h1>
          <p className="hero__subtitle">Chaque maison est une installation unique. Les premières réalisations arrivent bientôt.</p>
        </div>
      </section>

      {/* ── EN CONSTRUCTION ── */}
      <section id="construction" className="section section--dark" aria-label="Section en construction">
        <div className="container">
          <div className="wip__wrapper">
            <div className="wip__terminal">
              <div className="wip__terminal-bar" aria-hidden="true">
                <span /><span /><span />
              </div>
              <div className="wip__terminal-body">
                <p className="wip__line">
                  <span className="wip__prompt" aria-hidden="true">$&gt;&nbsp;</span>
                  <span>loading realisations.json</span>
                </p>
                <p className="wip__line wip__line--muted">
                  <span className="wip__prompt" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>→ 0 fichiers trouvés</span>
                </p>
                <p className="wip__line">
                  <span className="wip__prompt" aria-hidden="true">$&gt;&nbsp;</span>
                  <span className="wip__status">Section en cours de construction<span className="wip__blink" aria-hidden="true">_</span></span>
                </p>
              </div>
            </div>
            <h2 className="wip__title">Les premières réalisations arrivent.</h2>
            <p className="wip__desc">
              Trinity Domotique vient tout juste d'être lancé. Les photos et retours de nos premières installations
              seront publiés ici dès qu'elles seront terminées — avec le détail des systèmes mis en place
              et les témoignages des clients.
            </p>
            <p className="wip__desc">
              En attendant, vous pouvez nous contacter pour discuter de votre projet — le premier déplacement est gratuit.
            </p>
            <Link href="/devis" className="hud-btn">Demander mon rendez-vous gratuit</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--cta" aria-labelledby="realisations-cta-title">
        <div className="container">
          <h2 id="realisations-cta-title" className="cta__title">Votre maison sera la première ?</h2>
          <Link href="/devis" className="hud-btn">Demander mon rendez-vous gratuit</Link>
          <p className="cta__legal">Déplacement offert · Toulouse &amp; alentours · Réponse sous 24h</p>
        </div>
      </section>
    </>
  );
}
