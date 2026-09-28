import type { Metadata } from "next";
import EmergencyCallout from "@/components/EmergencyCallout";
import Icon from "@/components/Icons";
import BeforeAfterSlider from "@/components/motion/BeforeAfterSlider";
import Reveal from "@/components/motion/Reveal";
import { Container, CtaBand, SectionHeading } from "@/components/Section";
import SplitHero from "@/components/SplitHero";
import { ensureActive, getService } from "@/lib/services";
import { STOCK_PHOTOS } from "@/lib/stockPhotos";

const service = getService("domotique");

export const metadata: Metadata = { title: service.title, description: service.teaser };

const CONTENT = {
  title: "Pilotez votre maison depuis votre téléphone",
  eyebrow: "Maison connectée",
  heading: "Des équipements connectés posés par un électricien",
  intro: "Électricien certifié par Legrand, DVBE installe les appareillages connectés qui simplifient votre quotidien.",
  points: [
    "Interrupteurs et commandes d’éclairage connectés",
    "Commande connectée des volets roulants",
    "Thermostat et régulation du chauffage",
    "Visiophone, sonnette et caméras connectés",
  ],
  before: STOCK_PHOTOS.domotiqueAvant,
  after: STOCK_PHOTOS.domotiqueApres,
  cta: {
    title: "Un projet de maison connectée\u00a0?",
    text: "Appelez-nous pour choisir les équipements utiles chez vous.",
  },
};

export default function Page() {
  ensureActive(service);
  return (
    <>
      <SplitHero size="md" badge="Installateur IRVE" eyebrow={service.title} title={CONTENT.title} text={service.teaser} photo={STOCK_PHOTOS[service.photo]} />

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={CONTENT.eyebrow} title={CONTENT.heading} intro={CONTENT.intro} />
            <ul className="mt-8 space-y-4">
              {CONTENT.points.map((point) => (
                <li key={point} className="flex gap-3 text-ink">
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-accent-dark" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <BeforeAfterSlider before={CONTENT.before} after={CONTENT.after} className="aspect-[4/3] shadow-2xl" />
            {/* À LA LIVRAISON : vraies photos avant/après de l'artisan ; retirer la mention ci-dessous seulement alors */}
            <p className="mt-3 text-xs text-muted">Photos d’illustration.</p>
          </Reveal>
        </Container>
      </section>

      <EmergencyCallout />

      <CtaBand title={CONTENT.cta.title} text={CONTENT.cta.text} />
    </>
  );
}
