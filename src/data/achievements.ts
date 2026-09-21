export interface Achievement {
  /** Stable id - also used for aria / key values */
  id: string;
  title: string;
  /** Main result, displayed with the strongest visual emphasis */
  achievement: string;
  category: string;
  year: string;
  location: string;
  organization: string;
  team?: string;
  detailLabel?: string;
  metric: string;
  description: string;
  tags: string[];
  /**
   * Photos for this achievement. The first image is used as the card cover.
   * Add or remove paths freely - the gallery adapts to any number of photos.
   * Files live in: public/achievements/<folder>/
   */
  images: string[];
  /**
   * Optional certificate image path.
   * Drop the file in public/achievements/<folder>/certificate.jpg (or .png)
   * and set this field to show a "Certificate" tab in the gallery lightbox.
   */
  certificate?: string;
}

export const achievements: Achievement[] = [
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025",
    achievement: "Grand Finale Finalist",
    category: "National Hackathon",
    year: "2025",
    location: "India",
    organization: "Smart India Hackathon",
    team: "SCOR7",
    metric: "Top teams nationwide",
    description:
      "Selected among top teams nationwide for the Grand Finale to design, build, and present an innovative solution for a real-world problem.",
    tags: ["Grand Finale", "Innovation", "Product Pitch"],
    images: [
      "/achievements/sih-2025/1.jpg",
      "/achievements/sih-2025/2.jpg",
      "/achievements/sih-2025/3.jpg",
    ],
  },
  {
    id: "psb-hackathon-2026",
    title: "PSB Hackathon Series 2026",
    achievement: "Winner",
    category: "Hackathon Winner",
    year: "2026",
    location: "Noida, India",
    organization: "Punjab & Sind Bank",
    team: "SCOR7",
    metric: "Rs. 5,00,000 cash prize",
    description:
      "Won the hackathon by developing SecureWealth Twin, an AI-powered wealth intelligence and fraud protection platform with a hardware-backed security layer.",
    tags: ["Winner", "AI Fintech", "Hardware Security"],
    images: [
      "/achievements/psb-hackathon-2026/1.jpg",
      "/achievements/psb-hackathon-2026/2.jpg",
      "/achievements/psb-hackathon-2026/3.jpg",
      "/achievements/psb-hackathon-2026/4.jpg",
    ],
    certificate: "/achievements/psb-hackathon-2026/certificate.jpg",
  },
  {
    id: "global-fintech-fest-2026",
    title: "Global Fintech Fest 2026",
    achievement: "Delegate",
    category: "Fintech Showcase",
    year: "2026",
    location: "Mumbai, India",
    organization: "Global Fintech Fest",
    team: "DeltaLock",
    detailLabel: "Product",
    metric: "Product showcase",
    description:
      "Selected as a delegate for Global Fintech Fest 2026, showcasing DeltaLock as the PSB Hackathon-winning innovation and its hardware-backed security solution.",
    tags: ["Fintech", "Showcase", "Mumbai"],
    images: [
      "/achievements/global-fintech-fest-2026/1.jpeg",
      "/achievements/global-fintech-fest-2026/2.jpeg",
      "/achievements/global-fintech-fest-2026/3.jpeg",
      "/achievements/global-fintech-fest-2026/4.jpeg",
      "/achievements/global-fintech-fest-2026/5.jpeg",
      "/achievements/global-fintech-fest-2026/6.jpeg",
      "/achievements/global-fintech-fest-2026/7.jpeg",
      "/achievements/global-fintech-fest-2026/8.jpeg",
    ],
  },
  {
    id: "media-features",
    title: "Media Features",
    achievement: "Published Coverage",
    category: "Press Recognition",
    year: "2026",
    location: "India",
    organization: "Amar Ujala & Dainik Bhaskar",
    metric: "2 media features",
    description:
      "Featured for embedded system innovations in Amar Ujala and Dainik Bhaskar, highlighting practical technology work and innovation-focused development.",
    tags: ["Press", "Embedded Systems", "Recognition"],
    images: [],
  },
];

export default achievements;
