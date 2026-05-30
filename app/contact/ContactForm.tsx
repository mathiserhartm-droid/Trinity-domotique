'use client';

import { FormEvent, useState } from 'react';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const prenom  = (data.get('prenom')  as string)?.trim() ?? '';
    const nom     = (data.get('nom')     as string)?.trim() ?? '';
    const email   = (data.get('email')   as string)?.trim() ?? '';
    const message = (data.get('message') as string)?.trim() ?? '';
    const hp      = (data.get('website') as string)?.trim() ?? '';

    if (hp) return;

    const name = [prenom, nom].filter(Boolean).join(' ');
    if (!name)             { setStatus('error'); setMsg('Votre nom est requis.'); return; }
    if (!isValidEmail(email)) { setStatus('error'); setMsg('Une adresse email valide est requise.'); return; }
    if (!message)          { setStatus('error'); setMsg('Votre message est requis.'); return; }

    setStatus('loading');
    setMsg('Envoi en cours…');

    const subject = encodeURIComponent(`[Trinity Home] Nouveau message de ${name}`);
    const body    = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`);

    setTimeout(() => {
      setStatus('success');
      setMsg("Merci ! Votre client email va s'ouvrir pour finaliser l'envoi.");
      window.location.href = `mailto:trinity-domotique.contact@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    }, 600);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <input type="text" name="website" tabIndex={-1} aria-hidden="true" style={{ display: 'none' }} />
      <div className="form-row">
        <input type="text"  name="prenom"  placeholder="Prénom" required className="form-input" />
        <input type="text"  name="nom"     placeholder="Nom"    required className="form-input" />
      </div>
      <input type="email"  name="email"   placeholder="Email"  required className="form-input" />
      <input type="tel"    name="phone"   placeholder="Téléphone (optionnel)" className="form-input" />
      <textarea name="message" placeholder="Votre message…" required rows={6} className="form-input form-textarea" />
      <button type="submit" className="hud-btn">Envoyer le message</button>
      {msg && <p className={`form-feedback form-feedback--${status}`}>{msg}</p>}
    </form>
  );
}
