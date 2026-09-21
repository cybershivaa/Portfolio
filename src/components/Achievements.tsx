import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { FaAward, FaMedal, FaNewspaper, FaTrophy } from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  MdCalendarToday,
  MdLocationOn,
  MdOutlineWorkspacePremium,
  MdPhotoLibrary,
} from "react-icons/md";
import PhotoGallery from "./PhotoGallery";
import SafeImage from "./SafeImage";
import { achievements } from "../data/achievements";

const resultIcons: Record<string, IconType> = {
  "psb-hackathon-2026": FaTrophy,
  "sih-2025": FaMedal,
  "global-fintech-fest-2026": FaAward,
  "media-features": FaNewspaper,
};

const accentStyles = [
  {
    glow: "rgba(34, 211, 238, 0.22)",
    border: "rgba(34, 211, 238, 0.36)",
    text: "#67e8f9",
    gradient: "linear-gradient(135deg, #67e8f9, #818cf8)",
  },
  {
    glow: "rgba(251, 191, 36, 0.24)",
    border: "rgba(251, 191, 36, 0.4)",
    text: "#fbbf24",
    gradient: "linear-gradient(135deg, #fbbf24, #34d399)",
  },
  {
    glow: "rgba(129, 140, 248, 0.24)",
    border: "rgba(129, 140, 248, 0.38)",
    text: "#a5b4fc",
    gradient: "linear-gradient(135deg, #818cf8, #c084fc)",
  },
  {
    glow: "rgba(52, 211, 153, 0.22)",
    border: "rgba(52, 211, 153, 0.36)",
    text: "#6ee7b7",
    gradient: "linear-gradient(135deg, #34d399, #67e8f9)",
  },
];

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openGalleryId, setOpenGalleryId] = useState<string | null>(null);

  const stats = useMemo(
    () => [
      { label: "Achievements", value: achievements.length },
      {
        label: "Photos",
        value: achievements.reduce((total, item) => total + item.images.length, 0),
      },
      { label: "Media", value: 2 },
    ],
    []
  );

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
      className="relative w-full overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
      style={{
        background:
          "linear-gradient(180deg, rgba(3,4,13,1) 0%, rgba(7,12,28,0.98) 46%, rgba(3,4,13,1) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-[26rem] w-[68rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(103,232,249,0.24) 0%, rgba(129,140,248,0.13) 42%, transparent 72%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div
            data-scroll-animate="fade-up"
            style={
              {
                "--anim-duration": "700ms",
                "--anim-delay": "0ms",
              } as CSSProperties
            }
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
              <MdOutlineWorkspacePremium className="h-4 w-4" aria-hidden="true" />
              Recognition
            </span>

            <h2
              id="achievements-heading"
              className="mt-5 max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
            >
              Achievements &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              A curated record of hackathon wins, national-level selections,
              fintech showcases, and media recognition - designed with
              expandable photo galleries for each milestone.
            </p>
          </div>

          <div
            className="grid grid-cols-3 gap-3 sm:gap-4"
            data-scroll-animate="fade-up"
            style={
              {
                "--anim-duration": "700ms",
                "--anim-delay": "120ms",
              } as CSSProperties
            }
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-4 text-center backdrop-blur-md sm:px-5"
              >
                <p className="text-2xl font-black text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          {achievements.map((item, index) => {
            const ResultIcon = resultIcons[item.id] ?? FaAward;
            const accent = accentStyles[index % accentStyles.length];
            const photoLabel = item.team
              ? `${item.title} - ${item.team}`
              : item.title;
            const photoCount = item.images.length;
            const hasPhotos = photoCount > 0;
            const previewImages = item.images.slice(0, 3);

            return (
              <article
                key={item.id}
                data-anim
                style={
                  {
                    "--anim-delay": `${index * 110}ms`,
                    "--achievement-glow": accent.glow,
                    "--achievement-border": accent.border,
                    "--achievement-text": accent.text,
                  } as CSSProperties
                }
                className="group relative min-h-full overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--achievement-border)] hover:shadow-[0_28px_90px_var(--achievement-glow)]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: accent.gradient }}
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
                  style={{ background: accent.gradient }}
                />

                <div className="grid min-h-full gap-0 md:grid-cols-[0.95fr_1.05fr]">
                  <button
                    type="button"
                    onClick={() => hasPhotos && setOpenGalleryId(item.id)}
                    aria-label={`Open photo gallery for ${photoLabel}`}
                    data-cursor="disable"
                    disabled={!hasPhotos}
                    className="relative min-h-[260px] overflow-hidden text-left disabled:cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300"
                  >
                    {hasPhotos ? (
                      <SafeImage
                        src={item.images[0]}
                        alt={photoLabel}
                        className="h-full min-h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label={`${photoLabel} photos coming soon`}
                        className="flex h-full min-h-[260px] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-500"
                      >
                        <MdPhotoLibrary className="h-9 w-9 text-cyan-400/40" />
                        <span className="text-xs font-black uppercase tracking-[0.2em]">
                          Photos Coming Soon
                        </span>
                      </div>
                    )}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"
                    />

                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border bg-slate-950/70 backdrop-blur-md"
                        style={{
                          borderColor: accent.border,
                          color: accent.text,
                          boxShadow: `0 0 26px ${accent.glow}`,
                        }}
                      >
                        <ResultIcon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300">
                          {item.organization}
                        </p>
                        <p className="mt-1 text-xl font-black text-white">
                          {item.achievement}
                        </p>
                      </div>

                      <span className="inline-flex flex-none items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1.5 text-xs font-bold text-cyan-200 backdrop-blur-md">
                        <MdPhotoLibrary className="h-4 w-4" aria-hidden="true" />
                        {hasPhotos ? photoCount : "Soon"}
                      </span>
                    </div>
                  </button>

                  <div className="flex min-h-full flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--achievement-text)]">
                          0{index + 1}
                        </p>
                        <h3 className="mt-2 text-xl font-black leading-tight text-white sm:text-2xl">
                          {item.title}
                        </h3>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-300">
                        {item.metric}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1">
                        <MdCalendarToday className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.year}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1">
                        <MdLocationOn className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.location}
                      </span>
                      {item.team && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1">
                          {item.detailLabel ? `${item.detailLabel} ` : "Team "}
                          {item.team}
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="mb-4 flex items-center gap-2">
                        {previewImages.map((image, imageIndex) => (
                          <button
                            key={`${item.id}-${image}`}
                            type="button"
                            onClick={() => setOpenGalleryId(item.id)}
                            aria-label={`Open ${photoLabel} photo ${imageIndex + 1}`}
                            data-cursor="disable"
                            className="h-12 w-16 overflow-hidden rounded-md border border-white/10 bg-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--achievement-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                          >
                            <SafeImage
                              src={image}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          </button>
                        ))}
                        {photoCount > previewImages.length && (
                          <button
                            type="button"
                            onClick={() => setOpenGalleryId(item.id)}
                            aria-label={`Open all ${photoCount} photos for ${photoLabel}`}
                            data-cursor="disable"
                            className="flex h-12 w-16 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-xs font-black text-slate-300 transition-all duration-300 hover:border-[var(--achievement-border)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                          >
                            +{photoCount - previewImages.length}
                          </button>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => hasPhotos && setOpenGalleryId(item.id)}
                        aria-label={`View gallery for ${photoLabel}`}
                        data-cursor="disable"
                        disabled={!hasPhotos}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-default disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:brightness-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        style={{
                          background: accent.gradient,
                          boxShadow: `0 18px 42px ${accent.glow}`,
                        }}
                      >
                        <MdPhotoLibrary className="h-5 w-5" aria-hidden="true" />
                        {hasPhotos ? "View Gallery" : "Photos Soon"}
                      </button>
                    </div>
                  </div>
                </div>

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
