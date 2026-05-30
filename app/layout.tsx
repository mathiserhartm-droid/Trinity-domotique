import type { Metadata } from 'next';
import { Agentation } from 'agentation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HudInit from '@/components/HudInit';
import '@/style.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://trinity-domotique.fr'),
  title: { default: 'Trinity Domotique — Maison Connectée Haut de Gamme | Devis Gratuit', template: '%s — Trinity Domotique' },
  description: 'Trinity Domotique — Installation et intégration domotique haut de gamme. Volets, portail, lumières, TV, piscine, énergie. Devis et déplacement gratuits.',
  openGraph: { type: 'website', images: ['/assets/images/og-image.jpg'] },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/assets/images/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <HudInit />
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  );
}
