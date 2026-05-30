import type { Metadata } from 'next';
import LeChoixClient from './LeChoixClient';

export const metadata: Metadata = {
  title: 'Le Choix — Trinity Domotique',
  description: 'Pilule rouge ou pilule bleue ? Découvrez ce que votre maison est vraiment capable de faire avec Trinity Domotique.',
  openGraph: { url: 'https://trinity-domotique.fr/le-choix' },
};

export default function LeChoixPage() {
  return <LeChoixClient />;
}
