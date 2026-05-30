import type { Metadata } from 'next';
import Link from 'next/link';
import DevisForm from './DevisForm';

export const metadata: Metadata = {
  title: 'Devis & Rendez-vous Gratuit',
  description: 'Demandez votre devis et rendez-vous gratuit avec Trinity Domotique. Mathis se déplace chez vous sans frais.',
  openGraph: { url: 'https://trinity-domotique.fr/devis' },
};

export default function DevisPage() {
  return (
    <>
      <section id="hero-devis" className="section section--hero section--hero-short" aria-labelledby="hero-devis-title">
        <div className="container">
          <div className="hero-devis__inner">
            <div className="hero-devis__text">
              <h1 id="hero-devis-title" className="page-title">
                Votre devis et votre rendez-vous,<br />
                <span className="hero__title-accent">100 % gratuits</span>
              </h1>
              <p className="page-intro">Mathis se déplace chez vous, sans frais. Il évalue votre maison, vous montre concrètement ce qui est possible, et vous remet un devis détaillé. Vous décidez ensuite, sans aucune pression.</p>
              <ul className="hero-devis__points" role="list">
                <li>Déplacement offert dans toute la Haute-Garonne</li>
                <li>Devis écrit, clair et détaillé</li>
                <li>Aucun engagement, aucune pression</li>
                <li>Réponse sous 24 heures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="comment-devis" className="section section--alt" aria-labelledby="comment-devis-title">
        <div className="container">
          <h2 id="comment-devis-title" className="section__title">Comment se passe le rendez-vous ?</h2>
          <ol className="etapes etapes--horizontal" role="list">
            <li className="etape">
              <div className="etape__numero" aria-hidden="true">01</div>
              <div className="etape__contenu">
                <h3 className="etape__titre">Vous remplissez le formulaire</h3>
                <p className="etape__desc">Indiquez vos coordonnées et ce qui vous intéresse. En 2 minutes, c'est fait.</p>
              </div>
            </li>
            <li className="etape">
              <div className="etape__numero" aria-hidden="true">02</div>
              <div className="etape__contenu">
                <h3 className="etape__titre">Mathis vous rappelle sous 24 h</h3>
                <p className="etape__desc">Il prend rendez-vous à votre convenance et se déplace chez vous gratuitement.</p>
              </div>
            </li>
            <li className="etape">
              <div className="etape__numero" aria-hidden="true">03</div>
              <div className="etape__contenu">
                <h3 className="etape__titre">Vous recevez votre devis</h3>
                <p className="etape__desc">Un document clair, détaillé, sans surprise. À vous de décider, sans pression.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section id="formulaire-devis" className="section section--dark" aria-labelledby="formulaire-devis-title">
        <div className="container">
          <h2 id="formulaire-devis-title" className="section__title">Demandez votre rendez-vous gratuit</h2>
          <DevisForm />
        </div>
      </section>
    </>
  );
}
