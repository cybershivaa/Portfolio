import { useEffect, useRef, useState } from "react";
import { FaMedal, FaTrophy } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";
import type { IconType } from "react-icons";
import PhotoGallery from "./PhotoGallery";
import SafeImage from "./SafeImage";
import { achievements } from "../data/achievements";

/** Decorative icon per achievement — content stays in the data file */
const resultIcons: Record<string, IconType> = {
  "psb-hackathon-2026": FaTrophy,
  "sih-2025": FaMedal,
};

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openGalleryId, setOpenGalleryId] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animatedEls = Array.from(
      section.querySelectorAll<HTMLElement>("[data-scroll-animate], [data-anim]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    animatedEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      aria-labelledby="achievements-heading"
      className="relative w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className="mb-8 md:mb-10 text-center flex flex-col items-center"
          data-scroll-animate="fade-up"
          style={
            {
              "--anim-duration": "700ms",
              "--anim-delay": "0ms",
            } as React.CSSProperties
          }
        >
          <h2
            id="achievements-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div
            className="section-reveal-line mt-3"
            data-scroll-animate="fade-in"
            style={
              {
                "--anim-duration": "1000ms",
                "--anim-delay": "250ms",
              } as React.CSSProperties
            }
          />
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((item, index) => {
            const ResultIcon = resultIcons[item.id] ?? FaTrophy;
            const photoLabel = `${item.title} - Team ${item.team}`;
            const photoCount = item.images.length;

            return (
              <article
                key={item.id}
                data-anim
                style={
                  { "--anim-delay": `${index * 120}ms` } as React.CSSProperties
                }
                className="group flex flex-col overflow-hidden rounded-lg border border-gray-700/50 hover:border-cyan-400/50 bg-gradient-to-br from-slate-800/30 to-transparent hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                {/* Cover image — also opens the gallery */}
                <button
                  type="button"
                  onClick={() => setOpenGalleryId(item.id)}
                  aria-label={`Open photo gallery for ${photoLabel}`}
                  data-cursor="disable"
                  className="relative block w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400/70"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <SafeImage
                      src={item.images[0]}
                      alt={photoLabel}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Readability overlay */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent"
                  />

                  {/* Photo count */}
                  {photoCount > 0 && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-cyan-400 backdrop-blur-sm">
                      <MdPhotoLibrary className="h-3.5 w-3.5" aria-hidden="true" />
                      {photoCount} {photoCount === 1 ? "Photo" : "Photos"}
                    </span>
                  )}

                  {/* Index marker, mirrors the Projects section */}
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-2 text-2xl font-bold text-cyan-400/30"
                  >
                    0{index + 1}
                  </span>
                </button>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Result — strongest emphasis in the card */}
                  <p className="mt-2 flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-400 shadow-[0_0_16px_rgba(103,232,249,0.18)]">
                      <ResultIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {item.achievement}
                    </span>
                  </p>

                  {/* Team */}
                  <p className="mt-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-cyan-400">
                      Team {item.team}
                    </span>
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-300">
                    {item.description}
                  </p>

                  {/* Gallery trigger */}
                  <div className="mt-5 pt-1">
                    <button
                      type="button"
                      onClick={() => setOpenGalleryId(item.id)}
                      aria-label={`View photos of ${photoLabel}`}
                      data-cursor="disable"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:from-cyan-400 hover:to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                      <span>View Photos</span>
                      <MdPhotoLibrary className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* One reusable gallery, driven entirely by the data above */}
                <PhotoGallery
                  images={item.images}
                  label={photoLabel}
                  isOpen={openGalleryId === item.id}
                  certificate={item.certificate}
                  onClose={() => setOpenGalleryId(null)}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
