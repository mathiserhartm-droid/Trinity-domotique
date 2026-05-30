'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/',              label: 'Accueil',       code: '~'  },
  { href: '/services',      label: 'Services',      code: '[]' },
  { href: '/realisations',  label: 'Réalisations',  code: '◈'  },
  { href: '/a-propos',      label: 'À propos',      code: '//' },
  { href: '/contact',       label: 'Contact',       code: '@'  },
  { href: '/devis',         label: 'Devis gratuit', code: '$'  },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" role="banner">
      <nav className="site-nav" role="navigation" aria-label="Navigation principale">
        <Link href="/" className="nav-logo" aria-label="Trinity Domotique — Accueil">
          <Image src="/assets/images/logo.png" alt="Logo Trinity Domotique" width={180} height={48} priority />
        </Link>

        {/* Desktop nav */}
        <ul className="nav-menu" role="list">
          {links.slice(0, 5).map(({ href, label }) => (
            <li key={href} className="nav-menu__item">
              <Link
                href={href}
                className={`nav-menu__link${pathname === href ? ' nav-menu__link--active' : ''}`}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="nav-menu__item nav-menu__item--cta">
            <Link href="/devis" className={`nav-menu__link nav-menu__link--cta${pathname === '/devis' ? ' nav-menu__link--active' : ''}`}>
              Devis gratuit
            </Link>
          </li>
        </ul>

        {/* Mobile trigger */}
        <button
          className={`mmenu__trigger${open ? ' mmenu__trigger--open' : ''}`}
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span className="mmenu__trigger-bar" aria-hidden="true" />
          <span className="mmenu__trigger-bar" aria-hidden="true" />
          <span className="mmenu__trigger-bar" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile fluid menu */}
      {open && (
        <>
          <div className="mmenu__backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
          <nav className="mmenu__items" aria-label="Navigation mobile">
            {links.map(({ href, label, code }, i) => (
              <Link
                key={href}
                href={href}
                className={`mmenu__item${pathname === href ? ' mmenu__item--active' : ''}`}
                style={{ '--i': i } as React.CSSProperties}
                onClick={() => setOpen(false)}
              >
                <span className="mmenu__label">{label}</span>
                <span className="mmenu__circle">{code}</span>
              </Link>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}
