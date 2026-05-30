import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de Trinity Domotique — Mathis Erhart, auto-entrepreneur.',
};

export default function MentionsLegalesPage() {
  return (
    <section className="section section--alt" aria-labelledby="mentions-title">
      <div className="container" style={{ maxWidth: '760px' }}>
        <h1 id="mentions-title" className="page-title">Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>Mathis Erhart — Auto-entrepreneur<br />
        4 Route de Gauré, 31570 Bourg Saint-Bernard<br />
        Email : <a href="mailto:trinity-domotique.contact@gmail.com">trinity-domotique.contact@gmail.com</a><br />
        SIRET : en cours d'immatriculation</p>

        <h2>Hébergement</h2>
        <p>Site hébergé par un prestataire tiers. Informations disponibles sur demande.</p>

        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble du contenu de ce site (textes, images, design) est la propriété exclusive de Trinity Domotique — Mathis Erhart. Toute reproduction est interdite sans autorisation préalable.</p>

        <h2>Responsabilité</h2>
        <p>Trinity Domotique s'efforce de maintenir les informations de ce site à jour et exactes, mais ne saurait être tenu responsable des erreurs ou omissions.</p>
      </div>
    </section>
  );
}
