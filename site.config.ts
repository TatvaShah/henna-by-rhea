import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Henna by Rhea",
  tagline: "Bridal, engagement and party henna, jagua and organic cones.",
  category: "Henna artist",
  schemaType: "BeautySalon",
  area: "GTA and Hamilton, ON",
  siteUrl: "https://henna-by-rhea-ca.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#633a3a" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Henna in the GTA and Hamilton",
    headline: "Bridal, engagement and party henna, drawn with care",
    subhead: "Henna by Rhea, the work of Rhea Ubhi, creates bridal, engagement and party henna in the GTA, Hamilton and surrounding areas, plus jagua and 100% organic henna cones. Books are open for 2026 and 2027. Fill in the form, text or send a message to book.",
    images: [
      { src: "/images/post-1.jpg", alt: "Detailed bridal henna on both hands by Henna by Rhea", width: 1080, height: 1411 },
      { src: "/images/post-3.jpg", alt: "Engagement henna by Henna by Rhea", width: 1080, height: 1410 },
      { src: "/images/post-5.jpg", alt: "Engagement henna on both hands by Henna by Rhea", width: 1080, height: 1409 },
    ],
    primaryCta: { label: "Book on the form", href: "https://docs.google.com/forms/d/e/1FAIpQLSevFxpPf_KKmIVzx-1o0ZuxwqlB2j8oaebUFVYUJHRUBFYgEQ/viewform" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Bridal, engagement and party henna",
    "Jagua and 100% organic henna cones",
    "GTA, Hamilton and surrounding areas, with travel and destination bookings",
    "Books are open for 2026 and 2027",
  ],

  about: {
    title: "Welcome to Henna by Rhea",
    body: [
      "Henna by Rhea is the work of Rhea Ubhi, creating bridal, engagement and party henna in the GTA, Hamilton and surrounding areas. Travel is available around Ontario, and destination bookings are available. Jagua and 100% organic henna cones, which can be purchased by text or Instagram DM, are also offered.",
      "Books are open for 2026 and 2027. Fill in the booking form, text 437-241-6151, or send a message on Instagram to enquire.",
    ],
    image: { src: "/images/post-1.jpg", alt: "Detailed bridal henna on both hands by Henna by Rhea", width: 1080, height: 1411 },
  },

  menu: {
    label: "Services",
    title: "Henna services",
    variant: "list",
    showPrices: false,
    priceNote: "Fill in the form, text or send a message to ask about current pricing and to check a date.",
    groups: [
      {
        title: "Henna",
        items: [
          { name: "Bridal henna" },
          { name: "Engagement henna" },
          { name: "Party henna", description: "Including 3 minute party designs." },
          { name: "Jagua" },
        ],
      },
      {
        title: "Supplies and travel",
        items: [
          { name: "100% organic henna cones", description: "Available for purchase by text or Instagram DM." },
          { name: "Travel and destination bookings", description: "Travel is available around Ontario." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent henna",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1411, alt: "Detailed bridal henna on both hands by Henna by Rhea", caption: "Bridal henna", href: "https://www.instagram.com/p/DfoB7POqGUK/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1410, alt: "Engagement henna by Henna by Rhea", caption: "Engagement henna", href: "https://www.instagram.com/p/DflLu8RINbp/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1409, alt: "Engagement henna on both hands by Henna by Rhea", caption: "Engagement henna", href: "https://www.instagram.com/p/Dfir3EQoI7-/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1416, alt: "Henna on both palms by Henna by Rhea", caption: "In the details", href: "https://www.instagram.com/p/Dfi3aTFjXzW/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1421, alt: "Minimalist rokha henna by Henna by Rhea", caption: "Minimalist rokha henna", href: "https://www.instagram.com/p/DfoBudnqSTx/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1396, alt: "A 3 minute party henna design by Henna by Rhea", caption: "3 minute party henna", href: "https://www.instagram.com/p/DfTghaatmsd/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1418, alt: "A 3 minute party henna design on both palms by Henna by Rhea", caption: "3 minute party henna", href: "https://www.instagram.com/p/DfSmVsSqKOn/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "hennabyrhea_",
    embeds: ["https://www.instagram.com/p/DfoB7POqGUK/", "https://www.instagram.com/p/DflLu8RINbp/", "https://www.instagram.com/p/Dfir3EQoI7-/"],
  },

  order: {
    label: "How to book",
    title: "Book with the form, a text or a DM",
    intro: "Fill in the booking form, text 437-241-6151, or send a message on Instagram. Books are open for 2026 and 2027.",
    dmMessage: "Hi Henna by Rhea! I would like to enquire.\nDate:\nOccasion (bridal, engagement, party or other):",
    headerCtaLabel: "Book on the form",
    links: [
      { label: "Book on the form", href: "https://docs.google.com/forms/d/e/1FAIpQLSevFxpPf_KKmIVzx-1o0ZuxwqlB2j8oaebUFVYUJHRUBFYgEQ/viewform" },
      { label: "Text 437-241-6151", href: "tel:+14372416151" },
      { label: "DM to enquire", href: "https://ig.me/m/hennabyrhea_" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Fill in the booking form, text 437-241-6151, or send a message on Instagram. Books are open for 2026 and 2027." },
    { q: "What henna do you offer?", a: "Bridal, engagement and party henna, including 3 minute party designs, plus jagua and 100% organic henna cones." },
    { q: "Where do you work?", a: "Henna by Rhea serves the GTA, Hamilton and surrounding areas, with travel available around Ontario and destination bookings." },
  ],

  contact: {
    title: "Contact and booking",
    area: "the GTA, Hamilton and surrounding areas, Ontario",
    phone: "437-241-6151",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/hennabyrhea_/" }],
  },

  seo: {
    title: "Henna by Rhea | Bridal and party henna in the GTA and Hamilton",
    description: "Bridal, engagement and party henna in the GTA and Hamilton, plus jagua and 100% organic henna cones. Books are open for 2026 and 2027. Text, form or DM.",
    keywords: ["henna artist GTA", "bridal henna Hamilton", "Henna by Rhea"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
