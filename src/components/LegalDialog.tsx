// TEMPLATE CONTENT — NEEDS LEGAL REVIEW. The Privacy, Terms, Cookie and Cancellation texts below are generic
// starting points for this demo hotel, not legal advice. Review and adapt them (company details, governing law,
// actual data use and cookies) before taking real bookings.
//
// The site is a single page, so each policy opens in a dialog from its own link (#privacy, #terms, #cookies,
// #cancellation). The URL can be shared and the browser back button closes it.
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../i18n';
import IllustrativeBadge from './IllustrativeBadge';

type Slug = 'privacy' | 'terms' | 'cookies' | 'cancellation';
type Copy = { title: string; sections: [string, string][] };

export const LEGAL_LINKS: { slug: Slug; en: string; fr: string }[] = [
  { slug: 'privacy', en: 'Privacy Policy', fr: 'Politique de confidentialité' },
  { slug: 'terms', en: 'Terms & Conditions', fr: 'Conditions générales' },
  { slug: 'cookies', en: 'Cookie Policy', fr: 'Politique de cookies' },
  { slug: 'cancellation', en: 'Cancellation Policy', fr: 'Politique d\'annulation' },
];

const CONTENT: Record<Slug, { en: Copy; fr: Copy }> = {
  privacy: {
    en: { title: 'Privacy Policy', sections: [
      ['What we collect', 'Your name, contact details, stay dates and any requests you send when booking or contacting us.'],
      ['How we use it', 'To handle your booking and enquiries and to meet legal obligations. We never sell personal data.'],
      ['On this device', 'Your language, colour theme and booking search are saved in your browser so they are there next time. Clear your browser storage to remove them.'],
      ['Your rights', 'You may ask to access, correct or delete your data at any time by contacting us.'],
    ] },
    fr: { title: 'Politique de confidentialité', sections: [
      ['Données collectées', 'Vos nom, coordonnées, dates de séjour et demandes envoyées lors d\'une réservation ou d\'un contact.'],
      ['Utilisation', 'Pour traiter vos réservations et demandes et respecter nos obligations légales. Nous ne vendons jamais vos données.'],
      ['Sur cet appareil', 'Votre langue, votre thème et votre recherche de réservation sont enregistrés dans votre navigateur.'],
      ['Vos droits', 'Vous pouvez demander l\'accès, la rectification ou la suppression de vos données à tout moment.'],
    ] },
  },
  terms: {
    en: { title: 'Terms & Conditions', sections: [
      ['Bookings', 'A booking is confirmed when you receive our confirmation email. Rates are per room, per night, including taxes.'],
      ['Check-in and check-out', 'Check-in from 15:00, check-out by 11:00. Early check-in and late check-out depend on availability.'],
      ['Offers', 'Special offers cannot be combined and are subject to availability and their stated terms.'],
      ['Conduct', 'Rooms are non-smoking. Guests are responsible for damage beyond normal wear.'],
    ] },
    fr: { title: 'Conditions générales', sections: [
      ['Réservations', 'Une réservation est confirmée à réception de notre e-mail de confirmation. Tarifs par chambre et par nuit, taxes incluses.'],
      ['Arrivée et départ', 'Arrivée à partir de 15h00, départ avant 11h00, selon disponibilité pour les horaires anticipés ou tardifs.'],
      ['Offres', 'Les offres ne sont pas cumulables et sont soumises à disponibilité et à leurs conditions.'],
      ['Conduite', 'Chambres non-fumeurs. Les clients sont responsables des dommages au-delà de l\'usure normale.'],
    ] },
  },
  cookies: {
    en: { title: 'Cookie Policy', sections: [
      ['What we use', 'No advertising or tracking cookies. The site keeps your language, theme and booking search in local storage in your browser; it never leaves your device.'],
      ['Your choice', 'You can clear this at any time in your browser settings. The site works without it.'],
    ] },
    fr: { title: 'Politique de cookies', sections: [
      ['Ce que nous utilisons', 'Aucun cookie publicitaire ou de suivi. Le site conserve votre langue, votre thème et votre recherche dans le stockage local du navigateur.'],
      ['Votre choix', 'Vous pouvez l\'effacer à tout moment dans les réglages du navigateur. Le site fonctionne sans.'],
    ] },
  },
  cancellation: {
    en: { title: 'Cancellation Policy', sections: [
      ['Standard rates', 'Free cancellation up to 48 hours before arrival. Later cancellations and no-shows are charged the first night.'],
      ['Special offers', 'Offer bookings can be cancelled free of charge up to 7 days before arrival unless the offer states otherwise.'],
      ['Changes', 'Date changes are free when made at least 48 hours before arrival, subject to availability.'],
    ] },
    fr: { title: 'Politique d\'annulation', sections: [
      ['Tarifs standard', 'Annulation gratuite jusqu\'à 48 heures avant l\'arrivée. Au-delà, ou en cas de non-présentation, la première nuit est facturée.'],
      ['Offres spéciales', 'Les réservations d\'offres sont annulables gratuitement jusqu\'à 7 jours avant l\'arrivée, sauf mention contraire.'],
      ['Modifications', 'Les changements de dates sont gratuits jusqu\'à 48 heures avant l\'arrivée, selon disponibilité.'],
    ] },
  },
};

const SLUGS = Object.keys(CONTENT) as Slug[];

export default function LegalDialog() {
  const { language } = useLanguage();
  const [open, setOpen] = useState<Slug | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1) as Slug;
      setOpen(SLUGS.includes(hash) ? hash : null);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => {
    // Remove the hash without adding a history entry or jumping to the top
    history.replaceState(null, '', window.location.pathname + window.location.search);
    setOpen(null);
  };

  if (!open) return null;
  const page = CONTENT[open][language] ?? CONTENT[open].en;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={close} aria-hidden="true" />
      <div role="dialog" aria-modal="true" aria-labelledby="legal-title" className="relative bg-[#111] border border-white/10 max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-12">
        <button ref={closeRef} type="button" onClick={close} aria-label={language === 'fr' ? 'Fermer' : 'Close'} className="absolute top-4 right-4 p-2 text-brand-ivory/80 hover:text-brand-gold">
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
        <h2 id="legal-title" className="text-3xl font-serif text-brand-white mb-4 pr-8">{page.title}</h2>
        <p className="text-brand-gold mb-8 flex flex-wrap items-center gap-3 text-sm">
          <IllustrativeBadge label={language === 'fr' ? 'Modèle' : 'Template'} />
          <span className="text-brand-ivory/70">{language === 'fr' ? 'Texte type, à faire valider juridiquement.' : 'Generic template text, pending legal review.'}</span>
        </p>
        <div className="space-y-6">
          {page.sections.map(([h, body]) => (
            <section key={h}>
              <h3 className="text-lg font-serif text-brand-gold mb-2">{h}</h3>
              <p className="text-sm text-brand-ivory/85 leading-relaxed font-light">{body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
