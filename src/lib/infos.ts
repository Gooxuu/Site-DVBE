/**
 * Source unique des informations de l'artisan et des réglages du site.
 * Ne jamais coder en dur un numéro, une adresse ou un drapeau dans un composant.
 * Les valeurs à personnaliser pour chaque artisan sont signalées par un commentaire
 * que liste `npm run check:demo`.
 */

/** Numéro au format international (+33…) → lien d'appel. */
export const telHref = (e164: string) => `tel:${e164}`;

/** Lien WhatsApp « click to chat » : chiffres seuls, sans « + » ni espaces. */
export const whatsappHref = (e164: string, message: string) =>
  `https://wa.me/${e164.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export const BRAND = "DVBE";
/** Activité en une ligne, sans point final (pied de page, titre des pages). */
export const TAGLINE = "Électricité générale, bornes de recharge et domotique";
/** Description pour les moteurs de recherche (150 caractères environ). */
export const SITE_DESCRIPTION =
  "DVBE, électricien à Sonchamp (78)\u00a0: installation électrique, mise aux normes, bornes de recharge pour véhicules électriques et domotique.";

export const PHONE_DISPLAY = "06 20 45 56 46";
export const PHONE_E164 = "+33620455646";
export const PHONE_TEL = telHref(PHONE_E164);

/** Adresse publiée sur jerecharge.com (fiche installateur IRVE de DVBE). */
export const EMAIL = "dvbe.eurl@gmail.com";
export const EMAIL_MAILTO = `mailto:${EMAIL}`;

/** false si le numéro n'est pas sur WhatsApp : le bouton disparaît partout. */
// À LA LIVRAISON : demander à l'artisan si son numéro est sur WhatsApp (bouton masqué en attendant)
export const WHATSAPP_ENABLED = false;
export const WHATSAPP_URL = whatsappHref(PHONE_E164, "Bonjour, je vous contacte depuis votre site pour un projet.");

export const STREET = "11 rue de la Mare à la Cave";
export const POSTAL_CODE = "78120";
export const CITY = "Sonchamp";
export const ADDRESS = `${STREET}, ${POSTAL_CODE} ${CITY}`;
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ADDRESS}, France`)}`;
export const SERVICE_AREA = "Sonchamp, Rambouillet, Gallardon et communes proches";

/**
 * Type schema.org de l'entreprise (données structurées lues par Google), selon le métier principal :
 * « Electrician », « HVACBusiness », « Plumber », « RoofingContractor », « HomeAndConstructionBusiness »…
 */
export const SCHEMA_TYPE = "Electrician";

/** Domaine cible, sans barre finale. Pour la démo GitHub Pages, NEXT_PUBLIC_SITE_URL est fourni au build. */
// À LA LIVRAISON : domaine de l'artisan (en démo, la CI fournit NEXT_PUBLIC_SITE_URL)
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/+$/, "");

/** Mode démonstration : site non indexé + bandeau « Maquette ». Passer à false à la signature. */
// À LA LIVRAISON : passer à false à la signature
export const DEMO_MODE = true;
/** Nom de l'agence affiché dans le bandeau de démo. Vide = bandeau générique. */
export const AGENCY_NAME = "";

/** Sous-chemin GitHub Pages (ex. « /nom-du-depot »), vide sinon. Fourni au build. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Préfixe un chemin de `public/` avec le basePath.
 * Obligatoire pour `next/image` et les balises <img> ; `next/link` s'en occupe seul.
 */
export const asset = (path: string) => `${BASE_PATH}${path}`;

/** Logo dans public/images (ex. « /images/logo.svg »). null = logo texte composé à partir de BRAND. */
export const LOGO_FILE: string | null = null;

export type Certification = { id: string; label: string; detail: string };

/** Certifications réelles, affichées en badges texte (jamais les logos officiels). Liste vide = section masquée. */
// Sources : electriciencertifie.fr (fiche DVBE, réseau Legrand) et informations transmises par l'artisan.
export const CERTIFICATIONS: readonly Certification[] = [
  { id: "legrand", label: "Électricien Certifié par Legrand", detail: "Membre du réseau Legrand" },
  { id: "irve", label: "Installateur IRVE", detail: "Bornes de recharge" },
  { id: "maison-connectee", label: "Expert maison connectée", detail: "Label du réseau Legrand" },
];

export type Testimonial = { quote: string; source: string };

/** Un vrai avis client, cité mot pour mot, sans nom ni note ajoutés. null = section masquée. */
export const TESTIMONIAL: Testimonial | null = {
  quote:
    "Réactivité, professionnalisme et rigueur\u00a0: la prestation de l’entreprise est à la hauteur de mes attentes pour une mise en conformité de tout un logement.",
  source: "Avis client publié sur Google",
};

export type Stat = { value: number; suffix?: string; label: string };

/**
 * Chiffres confirmés par l'artisan (années d'activité, nombre de chantiers…). Liste vide = aucun compteur.
 * Jamais de chiffre inventé ni de chiffre « de marché ».
 */
export const STATS: readonly Stat[] = [];

export type Emergency = { enabled: boolean; situations: readonly string[] };

/**
 * Interventions en urgence : bandeau en haut de page, section de l'accueil, encarts des pages de service.
 * Seulement si l'artisan le confirme ; aucun délai, horaire ni prix n'est jamais affiché.
 */
// À LA LIVRAISON : urgences non confirmées par l'artisan, désactivées (n'activer que s'il le confirme)
export const EMERGENCY: Emergency = {
  enabled: false,
  situations: [
    "Panne de courant totale ou partielle",
    "Disjoncteur qui saute sans arrêt",
    "Prise ou câble qui chauffe, odeur de brûlé",
    "Tableau électrique qui grésille",
  ],
};

export type Legal = {
  /** Raison sociale (peut différer du nom commercial BRAND). */
  companyName: string;
  /** Forme juridique, et capital social s'il y a lieu. */
  legalForm: string;
  siret: string;
  /** Directeur ou directrice de la publication. */
  publisher: string;
  hostName: string;
  hostAddress: string;
};

/** Mentions légales. Champ vide = « Communiqué à la mise en ligne » (démo). */
// À LA LIVRAISON : informations légales de l'entreprise (raison sociale, forme juridique, SIRET, directeur de la publication)
// Source : annuaire-entreprises.data.gouv.fr (SIREN 913 139 721) ; capital social à demander.
export const LEGAL: Legal = {
  companyName: "DVBE",
  legalForm: "Société à responsabilité limitée (SARL)",
  siret: "913 139 721 00017",
  publisher: "Dylan Vaz, gérant",
  // À LA LIVRAISON : vérifier l'hébergeur (autre si domaine ou hébergement différent)
  hostName: "GitHub, Inc. (GitHub Pages)",
  hostAddress: "88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis",
};
