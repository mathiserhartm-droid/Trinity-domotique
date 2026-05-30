import type { Metadata } from 'next';
import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';
import Typewriter from '@/components/Typewriter';
import ServicesCarousel from '@/components/ServicesCarousel';
import { services } from '@/lib/services-data';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Découvrez les 10 services domotique de Trinity Domotique : volets, portail, lumières, TV, piscine, énergie, HomeKit et Home Assistant. Installation clé en main.',
  openGraph: { url: 'https://trinity-domotique.fr/services' },
};

export default function ServicesPage() {
  return (
    <>
      <section id="hero" className="section section--hero section--hero-short" aria-labelledby="services-hero-title">
        <MatrixRain id="matrix-rain-services" className="hero__rain hero__rain--dim" color="#00ff41" speed={0.3} bg="rgba(0,0,0,0.05)" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content container">
          <h1 id="services-hero-title" className="hero__title" aria-label="Nos services">
            <span className="terminal-prefix" aria-hidden="true">// &nbsp;</span>
            <Typewriter strings={['Nos services']} speed={60} loop={false} />
            <span className="typewriter__cursor" aria-hidden="true">_</span>
          </h1>
          <p className="hero__subtitle">Votre maison a déjà tout le potentiel pour être connectée. Trinity Domotique se charge de tout — du matériel à la configuration — pour que vous n'ayez qu'à profiter.</p>
          <div className="hero__cta">
            <Link href="/devis" className="hud-btn">Demander mon devis gratuit</Link>
          </div>
        </div>
      </section>

      <section id="services-liste" className="section section--dark" aria-labelledby="services-liste-title">
        <div className="container">
          <h2 id="services-liste-title" className="section__title glitch-hover" data-text="10 services, une seule maison">10 services, une seule maison</h2>
          <p className="section__subtitle">Chaque service est pensé pour s'intégrer naturellement à votre quotidien.</p>
          <ServicesCarousel />
        </div>
      </section>

      <section id="services-detail" className="section section--alt" aria-label="Détail des services">
        <div className="container">
          {services.map(({ id, title, desc }, i) => (
            <div key={id} className={`svc-detail${i % 2 === 1 ? ' svc-detail--reverse' : ''}`}>
              <div className="svc-detail__text">
                <span className="svc-detail__id">{id}</span>
                <h3 className="svc-detail__title">{title}</h3>
                <p className="svc-detail__desc">{desc}</p>
              </div>
              <div className="svc-detail__image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/images/service${i + 1}.jpg`}
                  alt={title}
                  className="svc-detail__img"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--cta" aria-labelledby="services-cta-title">
        <div className="container">
          <h2 id="services-cta-title" className="cta__title">Prêt à découvrir ce que votre maison peut faire ?</h2>
          <Link href="/devis" className="hud-btn">Demander mon rendez-vous gratuit</Link>
          <p className="cta__legal">Déplacement offert · Toulouse &amp; alentours · Réponse sous 24h</p>
        </div>
      </section>
    </>
  );
}
