import type { Metadata } from 'next';
import MatrixRain from '@/components/MatrixRain';
import Typewriter from '@/components/Typewriter';
import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Trinity Domotique',
  description: 'Contactez Trinity Domotique — Mathis Erhart. Email, adresse, zone d\'intervention. Réponse sous 24 h.',
  openGraph: { url: 'https://trinity-domotique.fr/contact' },
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" className="section section--hero section--hero-short" aria-labelledby="contact-hero-title">
        <MatrixRain id="matrix-rain-contact" className="hero__rain hero__rain--dim" color="#00ff41" speed={0.3} bg="rgba(0,0,0,0.05)" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content container">
          <h1 id="contact-hero-title" className="hero__title" aria-label="Contact">
            <span className="terminal-prefix" aria-hidden="true">// &nbsp;</span>
            <Typewriter strings={['Contact']} speed={60} loop={false} />
            <span className="typewriter__cursor" aria-hidden="true">_</span>
          </h1>
          <p className="hero__subtitle">Mathis répond à tous les messages sous 24 heures. Le premier déplacement est gratuit.</p>
        </div>
      </section>

      {/* ── CONTACT : INFOS + FORMULAIRE ── */}
      <section id="contact-main" className="section section--dark" aria-label="Coordonnées et formulaire de contact">
        <div className="container">
          <div className="contact__layout">

            {/* Colonne gauche — infos */}
            <div className="contact__infos">
              <h2 className="contact__infos-title">Coordonnées</h2>
              <ul className="contact__cards" role="list">
                <li className="contact__card">
                  <span className="contact__card-icon" aria-hidden="true">@</span>
                  <div>
                    <h3 className="contact__card-label">Email</h3>
                    <a href="mailto:trinity-domotique.contact@gmail.com" className="contact__card-value contact__card-value--link">
                      trinity-domotique.contact@gmail.com
                    </a>
                    <p className="contact__card-hint">Réponse garantie sous 24 h</p>
                  </div>
                </li>
                <li className="contact__card">
                  <span className="contact__card-icon" aria-hidden="true">#</span>
                  <div>
                    <h3 className="contact__card-label">Adresse</h3>
                    <address className="contact__card-value">
                      4 Route de Gauré<br />31570 Bourg Saint-Bernard
                    </address>
                  </div>
                </li>
                <li className="contact__card">
                  <span className="contact__card-icon" aria-hidden="true">~</span>
                  <div>
                    <h3 className="contact__card-label">Zone d'intervention</h3>
                    <p className="contact__card-value">Haute-Garonne (31) et alentours.<br />Toulouse, Colomiers, Blagnac, Muret, Castres.</p>
                    <p className="contact__card-hint">Déplacement offert dans toute la zone.</p>
                  </div>
                </li>
              </ul>
              <div className="contact__devis-nudge">
                <p>Vous préférez qu'on se parle directement ?</p>
                <Link href="/devis" className="hud-btn hud-btn--outline">Demander un rendez-vous gratuit</Link>
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <div className="contact__form-col">
              <h2 className="contact__form-title">Envoyez un message</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
