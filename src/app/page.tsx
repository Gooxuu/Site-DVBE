import CertBadges from "@/components/CertBadges";
import EmergencySection from "@/components/EmergencySection";
import BeforeAfterSlider from "@/components/motion/BeforeAfterSlider";
import Reveal from "@/components/motion/Reveal";
import ProcessSteps, { type Step } from "@/components/ProcessSteps";
import { Container, CtaBand, SectionHeading } from "@/components/Section";
import ServiceCards from "@/components/ServiceCards";
import SplitHero from "@/components/SplitHero";
import StatsBand from "@/components/StatsBand";
import Testimonial from "@/components/Testimonial";
import { CERTIFICATIONS, CITY, STATS, TESTIMONIAL } from "@/lib/infos";
import { ACTIVE_SERVICES } from "@/lib/services";
import { STOCK_PHOTOS } from "@/lib/stockPhotos";

const HERO = {
  eyebrow: `Électricien et installateur IRVE · ${CITY}`,
  title: `Votre électricien à ${CITY}, de la mise aux normes à la borne de recharge`,
  text: "Installation électrique, mise aux normes, bornes de recharge et maison connectée\u00a0: un électricien certifié par Legrand, joignable directement par téléphone.",
};

const STEPS: readonly Step[] = [
  { icon: "phone", title: "Vous appelez", text: "Vous nous présentez votre projet\u00a0: borne de recharge, mise aux normes, rénovation ou équipement connecté." },
  { icon: "search", title: "Étude sur place", text: "Nous examinons votre installation et vous expliquons les travaux à prévoir." },
  { icon: "wrench", title: "Réalisation", text: "Nous réalisons les travaux dans les règles de l’art, avec soin et dans le respect de votre intérieur." },
];

export default function Home() {
  return (
    <>
      <SplitHero {...HERO} badge="Installateur IRVE" photo={STOCK_PHOTOS.hero} />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Nos services"
            title="Nos domaines d’intervention"
            intro={`Des travaux expliqués avant de commencer et réalisés avec soin, à ${CITY} et dans les communes proches.`}
          />
          <ServiceCards services={ACTIVE_SERVICES} className="mt-12" />
        </Container>
      </section>

      {/* Avis client juste après les services : la preuve vient tout de suite après l'offre. */}
      {TESTIMONIAL && (
        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <Testimonial testimonial={TESTIMONIAL} />
          </Container>
        </section>
      )}

      <EmergencySection />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Comment ça se passe" title="De votre appel à la mise en service" align="center" />
          <ProcessSteps steps={STEPS} className="mt-14" />
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Avant / après"
            title="Des chantiers propres et soignés"
            intro="Faites glisser la poignée pour comparer."
          />
          <Reveal>
            <BeforeAfterSlider before={STOCK_PHOTOS.avant} after={STOCK_PHOTOS.apres} className="aspect-[4/3] shadow-2xl" />
            {/* À LA LIVRAISON : vraies photos avant/après de l'artisan ; retirer la mention ci-dessous seulement alors */}
            <p className="mt-3 text-xs text-muted">Photos d’illustration.</p>
          </Reveal>
        </Container>
      </section>

      <StatsBand stats={STATS} />

      {CERTIFICATIONS.length > 0 && (
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Certifications" title="Un électricien certifié par Legrand" align="center" />
            <CertBadges className="mt-10" />
          </Container>
        </section>
      )}

      <CtaBand title="Un projet électrique&nbsp;?" text="Appelez-nous ou écrivez-nous pour en parler." />
    </>
  );
}
