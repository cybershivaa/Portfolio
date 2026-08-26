export interface Achievement {
  /** Stable id — also used for aria / key values */
  id: string;
  title: string;
  /** Main result, displayed with the strongest visual emphasis */
  achievement: string;
  team: string;
  description: string;
  /**
   * Photos for this achievement. The first image is used as the card cover.
   * Add or remove paths freely — the gallery adapts to any number of photos.
   * Files live in: public/achievements/<folder>/
   */
  images: string[];
}

export const achievements: Achievement[] = [
  {
    id: "psb-hackathon-2026",
    title: "PSB Hackathon Series 2026",
    achievement: "Winner",
    team: "SCOR7",
    description:
      "Won the PSB Hackathon Series 2026 with Team SCOR7 by developing and presenting an innovative technology-driven solution to address a real-world challenge. The hackathon provided an opportunity to demonstrate problem-solving, technical implementation, teamwork, and innovation.",
    images: [
      "/achievements/psb-hackathon-2026/1.jpeg",
      "/achievements/psb-hackathon-2026/2.jpeg",
      "/achievements/psb-hackathon-2026/3.jpeg",
      "/achievements/psb-hackathon-2026/4.jpeg",
    ],
  },
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025",
    achievement: "SIH 2025 Finalist",
    team: "SCOR7",
    description:
      "Selected as a finalist at Smart India Hackathon 2025 with Team SCOR7, where we developed and presented an innovative technology-driven solution to address a real-world problem. The experience involved collaborative problem-solving, technical development, and presenting the solution at a national-level hackathon.",
    images: [
      "/achievements/sih-2025/1.jpeg",
      "/achievements/sih-2025/2.jpeg",
      "/achievements/sih-2025/3.jpeg",
    ],
  },
];

export default achievements;
