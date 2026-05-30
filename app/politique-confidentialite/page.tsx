import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et traitement des données personnelles — Trinity Domotique.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="section section--alt" aria-labelledby="rgpd-title">
      <div className="container" style={{ maxWidth: '760px' }}>
        <h1 id="rgpd-title" className="page-title">Politique de confidentialité</h1>

        <h2>Données collectées</h2>
        <p>Les données collectées via les formulaires (nom, email, téléphone, message) sont utilisées uniquement pour répondre à vos demandes et établir des devis. Elles ne sont pas transmises à des tiers.</p>

        <h2>Durée de conservation</h2>
        <p>Vos données sont conservées pour la durée nécessaire au traitement de votre demande et au maximum 3 ans après le dernier contact.</p>

        <h2>Vos droits</h2>
        <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à : <a href="mailto:trinity-domotique.contact@gmail.com">trinity-domotique.contact@gmail.com</a></p>

        <h2>Cookies</h2>
        <p>Ce site n'utilise pas de cookies tiers ni de trackers publicitaires. Aucune donnée n'est partagée avec des réseaux sociaux ou régies publicitaires.</p>
      </div>
    </section>
  );
}
