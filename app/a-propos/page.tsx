import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';
import Typewriter from '@/components/Typewriter';

export const metadata: Metadata = {
  title: 'À propos — Trinity Domotique',
  description: 'L\'histoire de Trinity Domotique : comment Mathis, passionné de domotique à 18 ans, a transformé sa maison connectée en un service professionnel à Toulouse.',
  openGraph: { url: 'https://trinity-domotique.fr/a-propos' },
};

export default function AProposPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" className="section section--hero section--hero-short" aria-labelledby="apropos-hero-title">
        <MatrixRain id="matrix-rain-apropos" className="hero__rain hero__rain--dim" color="#00ff41" speed={0.3} bg="rgba(0,0,0,0.05)" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content container">
          <h1 id="apropos-hero-title" className="hero__title" aria-label="À propos">
            <span className="terminal-prefix" aria-hidden="true">// &nbsp;</span>
            <Typewriter strings={['À propos']} speed={60} loop={false} />
            <span className="typewriter__cursor" aria-hidden="true">_</span>
          </h1>
          <p className="hero__subtitle">18 ans. Auto-entrepreneur. Toulouse. Et une maison qui a tout changé.</p>
        </div>
      </section>

      {/* ── L'ORIGINE ── */}
      <section id="origine" className="section section--dark" aria-labelledby="origine-title">
        <div className="container">
          <h2 id="origine-title" className="section__title glitch-hover" data-text="Le déclencheur">Le déclencheur</h2>
          <p className="section__subtitle">Tout a commencé un soir, chez moi.</p>
          <div className="apropos__narrative">
            <p>
              J'avais 17 ans. Pendant des semaines, j'avais construit un système domotique complet dans ma chambre —
              siri sur iPhone, HomeKit sur chaque appareil, des dizaines d'automatisations écrites à la main.
              Un portail connecté, des portes de garages automatiques. Des lumières qui s'éteignaient seules quand je quittais une pièce.
              La maison qui répondait à ma voix.
            </p>
            <p>
              Le soir où j'ai dit <span className="apropos__quote">"Hey Siri, bonne nuit"</span> — et que chaque lumière s'est éteinte,
              le portail s'est verrouillé et la VMC est passée en mode nuit, le tout en une seconde — j'ai réalisé quelque chose.
            </p>
            <p>
              Ce n'était pas de la science-fiction. Ce n'était pas réservé aux ingénieurs ou aux geeks.
              C'était accessible. Reproductible. Et personne n'installait ça correctement à Toulouse.
            </p>
            <p className="apropos__conclusion">
              Alors j'ai créé Trinity Domotique.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUI JE SUIS ── */}
      <section id="qui" className="section section--alt" aria-labelledby="qui-title">
        <div className="container">
          <h2 id="qui-title" className="section__title glitch-hover" data-text="Qui je suis">Qui je suis</h2>
          <div className="apropos__profile">
            <div className="apropos__photo-slot">
              <Image
                src="/assets/images/mathis.jpg"
                alt="Mathis Erhart — Fondateur Trinity Domotique"
                width={320}
                height={400}
                className="apropos__photo"
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
            <div className="apropos__bio">
              <h3 className="apropos__name">Mathis Erhart</h3>
              <p className="apropos__role">Fondateur &amp; Installateur · Trinity Domotique</p>
              <ul className="apropos__facts" role="list">
                <li className="apropos__fact">
                  <span className="apropos__fact-key">Âge</span>
                  <span className="apropos__fact-val">18 ans</span>
                </li>
                <li className="apropos__fact">
                  <span className="apropos__fact-key">Entreprise</span>
                  <span className="apropos__fact-val">Créée en 2026</span>
                </li>
                <li className="apropos__fact">
                  <span className="apropos__fact-key">Secteur</span>
                  <span className="apropos__fact-val">Toulouse &amp; environs</span>
                </li>
                <li className="apropos__fact">
                  <span className="apropos__fact-key">Spécialités</span>
                  <span className="apropos__fact-val">HomeKit · Home Assistant · Raspberry Pi</span>
                </li>
                <li className="apropos__fact">
                  <span className="apropos__fact-key">Statut</span>
                  <span className="apropos__fact-val">Auto-entrepreneur · En développement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MA VISION ── */}
      <section id="vision" className="section section--dark" aria-labelledby="vision-title">
        <div className="container">
          <h2 id="vision-title" className="section__title glitch-hover" data-text="Ce que je veux changer">Ce que je veux changer</h2>
          <p className="section__subtitle">Transformer la maison en allée vers le futur — pour tout le monde.</p>
          <ul className="potentiel__grid" role="list">
            <li className="potentiel__tile">
              <article className="tile" aria-labelledby="val-accessible-title">
                <div className="tile__icon" aria-hidden="true">🔓</div>
                <h3 id="val-accessible-title" className="tile__title">La tech pour tous.</h3>
                <p className="tile__desc">La domotique n'est pas réservée aux férus de technologie. Mon rôle : tout installer, tout configurer, tout expliquer — pour que votre famille prenne le contrôle en dix minutes.</p>
              </article>
            </li>
            <li className="potentiel__tile">
              <article className="tile" aria-labelledby="val-sur-mesure-title">
                <div className="tile__icon" aria-hidden="true">⚙️</div>
                <h3 id="val-sur-mesure-title" className="tile__title">Sur mesure. Toujours.</h3>
                <p className="tile__desc">Pas de forfaits génériques. Je viens chez vous, j'écoute vos habitudes, et je construis un système qui s'adapte à votre vie — pas l'inverse.</p>
              </article>
            </li>
            <li className="potentiel__tile">
              <article className="tile" aria-labelledby="val-joignable-title">
                <div className="tile__icon" aria-hidden="true">📡</div>
                <h3 id="val-joignable-title" className="tile__title">Toujours joignable.</h3>
                <p className="tile__desc">Après l'installation, vous n'êtes pas seul. Une question, un réglage, une évolution — je reste disponible. L'installation clé en main, ça inclut l'après.</p>
              </article>
            </li>
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--cta" aria-labelledby="apropos-cta-title">
        <div className="container">
          <h2 id="apropos-cta-title" className="cta__title">Envie de voir ce que votre maison peut devenir ?</h2>
          <p className="cta__subtitle">Je me déplace gratuitement pour en discuter avec vous, sans engagement.</p>
          <Link href="/devis" className="hud-btn" aria-label="Demander mon rendez-vous gratuit — Trinity Domotique">
            Demander mon rendez-vous gratuit
          </Link>
          <p className="cta__legal">Déplacement offert · Toulouse &amp; alentours · Réponse sous 24h</p>
        </div>
      </section>
    </>
  );
}
