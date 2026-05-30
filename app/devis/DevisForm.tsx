'use client';

import { FormEvent, useState } from 'react';

function isValidEmail(e: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

const services = [
  'Volets automatiques', 'Portail & Garage', 'Lumières connectées',
  'Énergie & Économies', 'TV & Multimédia', 'Piscine connectée',
  'Sécurité & Alarme', 'Home Assistant', 'Intégration HomeKit', 'Formation',
];

export default function DevisForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const prenom  = (data.get('prenom')  as string)?.trim() ?? '';
    const nom     = (data.get('nom')     as string)?.trim() ?? '';
    const email   = (data.get('email')   as string)?.trim() ?? '';
    const phone   = (data.get('phone')   as string)?.trim() ?? '';
    const message = (data.get('message') as string)?.trim() ?? '';
    const selected = services.filter(s => data.get(s) === 'on');

    const name = [prenom, nom].filter(Boolean).join(' ');
    if (!name)             { setStatus('error'); setMsg('Votre nom est requis.'); return; }
    if (!isValidEmail(email)) { setStatus('error'); setMsg('Une adresse email valide est requise.'); return; }

    setStatus('loading');
    setMsg('Envoi en cours…');

    const subject = encodeURIComponent(`[Trinity Devis] Demande de ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n${phone ? `Téléphone : ${phone}\n` : ''}` +
      `\nServices souhaités :\n${selected.map(s => `- ${s}`).join('\n') || '(non précisé)'}` +
      `\n\nMessage :\n${message || '(aucun message)'}`
    );

    setTimeout(() => {
      setStatus('success');
      setMsg("Merci ! Votre client email va s'ouvrir pour finaliser l'envoi.");
      window.location.href = `mailto:trinity-domotique.contact@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    }, 600);
  }

  return (
    <form id="form-devis" className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <input type="text"  name="prenom" placeholder="Prénom" required className="form-input" />
        <input type="text"  name="nom"    placeholder="Nom"    required className="form-input" />
      </div>
      <input type="email" name="email" placeholder="Email" required className="form-input" />
      <input type="tel"   name="phone" placeholder="Téléphone (pour vous rappeler)" className="form-input" />

      <fieldset className="form-fieldset">
        <legend className="form-legend">Services qui vous intéressent</legend>
        <ul className="form-checkboxes" role="list">
          {services.map(s => (
            <li key={s}>
              <label className="form-checkbox-label">
                <input type="checkbox" name={s} className="form-checkbox" />
                {s}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <textarea name="message" placeholder="Décrivez votre maison et ce que vous souhaitez améliorer (optionnel)…" rows={5} className="form-input form-textarea" />
      <button type="submit" className="hud-btn">Demander mon rendez-vous gratuit</button>
      {msg && <p className={`form-feedback form-feedback--${status}`}>{msg}</p>}
    </form>
  );
}
