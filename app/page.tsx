import type { Metadata } from 'next';
import Link from 'next/link';
import Typewriter from '@/components/Typewriter';
import MatrixRain from '@/components/MatrixRain';
import MatrixIntro from '@/components/MatrixIntro';

export const metadata: Metadata = {
  title: 'Trinity Domotique — Votre maison connectée, sans effort',
  description: 'Trinity Domotique — Installation et intégration domotique haut de gamme. Devis et déplacement gratuits. Toulouse et environs.',
  openGraph: { url: 'https://trinity-domotique.fr/' },
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" className="section section--hero" aria-labelledby="hero-title">
        <MatrixRain id="matrix-rain-home" className="hero__rain hero__rain--dim" color="#00ff41" speed={0.3} bg="rgba(0,0,0,0.05)" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content container">
          <h1 id="hero-title" className="hero__title" aria-label="La maison que vous ne soupçonniez pas.">
            <span className="terminal-prefix" aria-hidden="true">// &nbsp;</span>
            <Typewriter strings={['La maison que vous ne soupçonniez pas.']} speed={35} loop={false} />
            <span className="typewriter__cursor" aria-hidden="true">_</span>
          </h1>
          <div className="hero__cta">
            <Link href="/devis" className="hud-btn" aria-label="Demander mon rendez-vous gratuit — Trinity Domotique">
              Demander mon rendez-vous gratuit
            </Link>
            <Link href="/services" className="hud-btn hud-btn--outline" aria-label="Voir ce qui est possible — services Trinity Domotique">
              Voir ce qui est possible
            </Link>
          </div>
          <p className="hero__cta-hint">Déplacement gratuit · Sans engagement · Toulouse et environs</p>
        </div>
      </section>
      <MatrixIntro />

      {/* ── POTENTIEL ── */}
      <section id="potentiel" className="section section--dark" aria-labelledby="potentiel-title">
        <div className="container">
          <h2 id="potentiel-title" className="section__title glitch-hover" data-text="Entrez dans la Matrice de votre maison">
            Entrez dans la Matrice de votre maison
          </h2>
          <p className="section__subtitle">Trois réalités que vous n'aviez pas encore vécues.</p>
          <ul className="potentiel__grid" role="list">
            <li className="potentiel__tile">
              <article className="tile" aria-labelledby="tile-auto-title">
                <div className="tile__icon" aria-hidden="true">🏠</div>
                <h3 id="tile-auto-title" className="tile__title">Tout vous obéit.</h3>
                <p className="tile__desc">Vous pouvez tout contrôler depuis votre canapé. Parlez à votre assistant préféré, laissez faire les automatisations intelligentes — de chez vous ou en déplacement, tout est accessible.</p>
              </article>
            </li>
            <li className="potentiel__tile">
              <article className="tile" aria-labelledby="tile-vocal-title">
                <div className="tile__icon" aria-hidden="true">⚡</div>
                <h3 id="tile-vocal-title" className="tile__title">Moins. Chaque mois.</h3>
                <p className="tile__desc">Votre maison apprend quand vous êtes là, quand vous dormez, quand vous partez. Elle coupe ce qui consomme inutilement — et vous le prouve, chiffres à l'appui.</p>
              </article>
            </li>
            <li className="potentiel__tile">
              <article className="tile" aria-labelledby="tile-eco-title">
                <div className="tile__icon" aria-hidden="true">🛡️</div>
                <h3 id="tile-eco-title" className="tile__title">Tranquille. Toujours.</h3>
                <p className="tile__desc">Vous partez en vacances, votre maison reste vigilante. Alertes instantanées, simulation de présence, accès contrôlé — Soyez serein, et profitez pleinement de vos vacances.</p>
              </article>
            </li>
          </ul>
          <div className="section__cta-link">
            <Link href="/services" className="hud-btn hud-btn--outline">Voir tous nos services en détail</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES APERÇU ── */}
      <section id="services" className="section section--dark" aria-labelledby="services-apercu-title">
        <div className="container">
          <h2 id="services-apercu-title" className="section__title glitch-hover" data-text="Ce que nous installons">Ce que nous installons</h2>
          <p className="section__subtitle">Volets, portail, lumières, TV, piscine, énergie — chaque pièce, chaque système.</p>
          <ul className="services-apercu__grid" role="list">
            {[
              { label: 'S01', title: 'Volets automatiques', desc: 'Programmés au soleil, à la voix ou au geste.' },
              { label: 'S02', title: 'Portail & Garage', desc: 'Ouvrez à distance, à la voix ou à votre approche.' },
              { label: 'S03', title: 'Lumières connectées', desc: 'Scènes ambiance, commande vocale, allumage auto.' },
              { label: 'S04', title: 'Énergie & Économies', desc: 'Ballon d\'eau chaude en heures creuses, arrosage intelligent depuis les cuves ou le réseau.' },
              { label: 'S05', title: 'Livraison en votre absence', desc: 'Vidéo surveillance et ouverture du portail depuis votre smartphone, où que vous soyez dans le monde.' },
            ].map(({ label, title, desc }) => (
              <li key={label}>
                <article className="service-apercu" data-label={label}>
                  <div className="service-apercu__bracket" aria-hidden="true" />
                  <div className="service-apercu__icon" aria-hidden="true" />
                  <h3 className="service-apercu__title">{title}</h3>
                  <p className="service-apercu__desc">{desc}</p>
                </article>
              </li>
            ))}
          </ul>
          <div className="section__cta-link">
            <Link href="/services" className="hud-btn hud-btn--outline" aria-label="Voir les 10 services en détail">Voir les 10 services</Link>
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section id="comment" className="section section--alt" aria-labelledby="comment-title">
        <div className="container">
          <h2 id="comment-title" className="section__title glitch-hover" data-text="Comment ça marche ?">Comment ça marche ?</h2>
          <p className="section__subtitle">En trois étapes, votre maison change.</p>
          <ol className="etapes" role="list">
            <li className="etape">
              <div className="etape__numero" aria-hidden="true">01</div>
              <div className="etape__contenu">
                <h3 className="etape__titre">Mathis alias Morpheus,vient chez vous. Gratis.</h3>
                <p className="etape__desc">Pas de formulaire interminable, pas de devis aveugle. Mathis se déplace, écoute vos habitudes, parcourt votre installation existante et vous montre — concrètement — ce que votre maison peut faire. Zéro engagement, zéro frais de déplacement.</p>
              </div>
            </li>
            <li className="etape">
              <div className="etape__numero" aria-hidden="true">02</div>
              <div className="etape__contenu">
                <h3 className="etape__titre">On installe. On configure. On teste.</h3>
                <p className="etape__desc">Tout est posé proprement, câblé discrètement, configuré jusqu'au dernier détail. Chaque automatisation est pensée pour vos usages — pas pour les nôtres. Vous regardez, vous posez vos questions, vous approuvez.</p>
              </div>
            </li>
            <li className="etape">
              <div className="etape__numero" aria-hidden="true">03</div>
              <div className="etape__contenu">
                <h3 className="etape__titre">Votre famille prend le contrôle.</h3>
                <p className="etape__desc">On vous passe la main. En quelques minutes, chaque membre de la famille sait utiliser sa maison. Les scènes, les voix, les routines — tout fonctionne naturellement. Et si quelque chose évolue, Mathis est joignable.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ── COMPATIBILITÉ & SIMPLICITÉ ── */}
      <section id="compatibilite" className="section section--dark" aria-labelledby="compat-title">
        <div className="container">
          <h2 id="compat-title" className="section__title glitch-hover" data-text="Rien ne disparaît. Tout s'améliore.">
            Rien ne disparaît. Tout s'améliore.
          </h2>
          <p className="section__subtitle">Pas de table rase. Vos habitudes restent, vos équipements aussi.</p>

          <ul className="potentiel__grid" role="list">
            <li className="potentiel__tile">
              <article className="tile" aria-labelledby="compat-switch-title">
                <div className="tile__icon" aria-hidden="true">🔘</div>
                <h3 id="compat-switch-title" className="tile__title">Vos interrupteurs restent.</h3>
                <p className="tile__desc">Chaque interrupteur physique existant est conservé et continue de fonctionner exactement comme avant. On ajoute l'intelligence, on ne retire pas le confort.</p>
              </article>
            </li>
            <li className="potentiel__tile">
              <article className="tile" aria-labelledby="compat-remote-title">
                <div className="tile__icon" aria-hidden="true">📡</div>
                <h3 id="compat-remote-title" className="tile__title">Vos télécommandes aussi.</h3>
                <p className="tile__desc">La télécommande du portail, celle du garage, du store ou du climatiseur — elles continuent de marcher. Et si vous voulez en ajouter une nouvelle pour une lampe, une prise ou un accès spécifique, c'est possible à moindre coût.</p>
              </article>
            </li>
            <li className="potentiel__tile">
              <article className="tile" aria-labelledby="compat-voice-title">
                <div className="tile__icon" aria-hidden="true">🗣️</div>
                <h3 id="compat-voice-title" className="tile__title">Et la voix arrive en plus.</h3>
                <p className="tile__desc">Alexa, Siri ou Google Assistant — choisissez celui que vous aimez, ou les trois à la fois. Ils parlent à la maison pour vous, sans remplacer ce que vous aviez déjà.</p>
              </article>
            </li>
          </ul>

          <div className="compat__secret">
            <div className="compat__secret-badge" aria-hidden="true">Le vrai secret</div>
            <p className="compat__secret-text">
              La domotique, ce n'est pas réservé aux appareils haut de gamme déjà connectés. <strong>N'importe quel équipement existant</strong> — une lampe classique, un vieux store, un radiateur, une prise murale — peut devenir intelligent grâce à un petit boîtier supplémentaire.
            </p>
            <p className="compat__secret-text">
              Ces modules coûtent souvent <strong className="compat__price">15 €</strong>. Pas besoin de tout remplacer. On greffe l'intelligence sur ce que vous avez déjà.
            </p>
          </div>

          <div className="compat__scenario">
            <div className="compat__scenario-header">
              <span className="terminal-prefix" aria-hidden="true">// </span>
              <span className="compat__scenario-label">Cas d'usage — Laisser la maison à quelqu'un</span>
            </div>
            <p className="compat__scenario-intro">
              Vous laissez votre maison à la nounou, aux grands-parents, à un ami de passage ? Ce type d'installation est fait pour ça. Pas d'application à installer, pas de code à mémoriser. Ils parlent, la maison répond.
            </p>
            <ul className="compat__voice-examples" aria-label="Exemples de commandes vocales">
              <li className="compat__voice-cmd">
                <span className="compat__assistant compat__assistant--alexa">Alexa</span>
                <span className="compat__phrase">« Ferme les volets et éteins toutes les lumières. »</span>
              </li>
              <li className="compat__voice-cmd">
                <span className="compat__assistant compat__assistant--siri">Siri</span>
                <span className="compat__phrase">« Allume la TV sur France 2. »</span>
              </li>
              <li className="compat__voice-cmd">
                <span className="compat__assistant compat__assistant--google">Google</span>
                <span className="compat__phrase">« Baisse le thermostat à 19 degrés. »</span>
              </li>
            </ul>
            <p className="compat__scenario-footer">Naturel pour tout le monde. Même pour ceux qui n'ont jamais touché une application domotique.</p>
          </div>
        </div>
      </section>

      {/* ── ET BIEN PLUS — RÊVES ── */}
      <section id="reves" className="section section--alt" aria-labelledby="reves-title">
        <div className="container">
          <h2 id="reves-title" className="section__title glitch-hover" data-text="Ensemble, allons aussi loin que vos rêves.">
            Ensemble, allons aussi loin que vos rêves.
          </h2>
          <p className="section__subtitle">Ce que vous voyez ici n'est pas une liste exhaustive. C'est un point de départ.</p>
          <ul className="reves__grid" role="list" aria-label="Exemples d'équipements connectables">
            {[
              { icon: '🪟', label: 'Rideaux & stores pilotés' },
              { icon: '🐾', label: 'Distributeur de croquettes connecté' },
              { icon: '🔌', label: 'Chargeur de voiture pilotable' },
              { icon: '♨️', label: 'Ballon d\'eau chaude en heures creuses' },
              { icon: '📹', label: 'Vidéo surveillance sans fil' },
              { icon: '🌤️', label: 'Station météo & scénarios intelligents' },
              { icon: '💧', label: 'Arrosage intelligent' },
              { icon: '📦', label: 'Ouverture portail pour livraison à distance' },
              { icon: '🎬', label: 'Scène cinéma en un mot' },
              { icon: '🔒', label: 'Serrures connectées' },
              { icon: '🌡️', label: 'Thermostat & climatisation pilotés' },
              { icon: '🏊', label: 'Piscine & spa automatisés' },
            ].map(({ icon, label }) => (
              <li key={label} className="reves__item">
                <span className="reves__icon" aria-hidden="true">{icon}</span>
                <span className="reves__label">{label}</span>
              </li>
            ))}
          </ul>
          <p className="reves__tagline">
            <span className="terminal-prefix" aria-hidden="true">// </span>
            Si vous pouvez l'imaginer, on peut probablement le connecter.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section id="cta" className="section section--cta" aria-labelledby="cta-title">
        <div className="container">
          <h2 id="cta-title" className="cta__title">La première visite ne vous coûte rien. Ce qu'elle révèle peut tout changer.</h2>
          <p className="cta__subtitle">Mathis se déplace gratuitement dans tout le secteur de Toulouse et ses environs. Il n'y a pas de contrat à signer, pas d'abonnement, pas de frais cachés. Vous payez uniquement le matériel que vous choisissez et l'intervention que vous validez. Le reste, c'est du temps offert — parce qu'une bonne domotique commence par une bonne écoute.</p>
          <Link href="/devis" className="hud-btn" aria-label="Demander mon rendez-vous gratuit — Trinity Domotique">
            Demander mon rendez-vous gratuit
          </Link>
          <p className="cta__legal">Déplacement offert · Toulouse &amp; alentours · Réponse sous 24h</p>
        </div>
      </section>
    </>
  );
}
