import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">

          <div className="footer__col footer__col--brand">
            <Link href="/" className="footer__logo" aria-label="Trinity Domotique — Retour à l'accueil">
              <Image
                src="/assets/images/logo-white.png"
                alt="Logo Trinity Domotique"
                width={160}
                height={42}
                loading="lazy"
              />
            </Link>
            <p className="footer__tagline">Votre maison enfin à votre image.</p>
            <a
              href="https://instagram.com/mathis_rhrt"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivre Trinity Domotique sur Instagram"
            >
              @mathis_rhrt
            </a>
          </div>

          <nav className="footer__col footer__col--nav" aria-label="Navigation footer">
            <h3 className="footer__col-title">Navigation</h3>
            <ul role="list">
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/realisations">Réalisations</Link></li>
              <li><Link href="/devis">Devis gratuit</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <address className="footer__col footer__col--contact">
            <h3 className="footer__col-title">Contact</h3>
            <ul role="list">
              <li><a href="mailto:trinity-domotique.contact@gmail.com">trinity-domotique.contact@gmail.com</a></li>
              <li><span>4 Route de Gauré, 31570 Bourg Saint-Bernard</span></li>
              <li><span>Zone d'intervention : Haute-Garonne et alentours</span></li>
            </ul>
          </address>

          <nav className="footer__col footer__col--legal" aria-label="Liens légaux">
            <h3 className="footer__col-title">Informations légales</h3>
            <ul role="list">
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite">Politique de confidentialité</Link></li>
            </ul>
            <p className="footer__siret">Auto-entrepreneur — SIRET : bientôt disponible</p>
          </nav>

        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; <span id="footer-year">{new Date().getFullYear()}</span> Trinity Domotique — Mathis Erhart, auto-entrepreneur. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
