import { useEffect, useRef } from "react";
import { FaTrophy } from "react-icons/fa";
import { MdOutlineCelebration, MdPhotoLibrary } from "react-icons/md";
import SafeImage from "./SafeImage";

const FeaturedWin = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const els = Array.from(
      section.querySelectorAll<HTMLElement>("[data-fw-anim]")
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("fw-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="featured-win"
      ref={sectionRef}
      aria-label="Featured Achievement — PSB Hackathon Winner"
      className="relative w-full overflow-hidden py-14 md:py-20"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #0d2a22 50%, #0f172a 100%)",
      }}
    >
      {/* Background glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #fbbf24, transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-1/4 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #34d399, transparent)" }}
      />

      {/* Decorative top border */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #fbbf24 30%, #34d399 70%, transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #34d399 30%, #fbbf24 70%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top label */}
        <div
          data-fw-anim
          className="fw-anim-fade mb-8 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-yellow-400/60" />
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em]"
            style={{
              background: "rgba(251,191,36,0.12)",
              border: "1px solid rgba(251,191,36,0.4)",
              color: "#fbbf24",
              boxShadow: "0 0 20px rgba(251,191,36,0.2)",
            }}
          >
            <MdOutlineCelebration className="h-3.5 w-3.5" />
            Latest Achievement
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-yellow-400/60" />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="flex flex-col gap-6">
            {/* Trophy icon */}
            <div
              data-fw-anim
              className="fw-anim-up"
              style={{ "--fw-delay": "0ms" } as React.CSSProperties}
            >
              <span
                className="inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(245,158,11,0.1))",
                  border: "1px solid rgba(251,191,36,0.4)",
                  boxShadow:
                    "0 0 30px rgba(251,191,36,0.3), inset 0 0 20px rgba(251,191,36,0.05)",
                }}
              >
                <FaTrophy className="h-8 w-8 text-yellow-400" />
              </span>
            </div>

            {/* Event name */}
            <div
              data-fw-anim
              className="fw-anim-up"
              style={{ "--fw-delay": "80ms" } as React.CSSProperties}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-2">
                PSB Hackathon Series 2026
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none">
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #fcd34d 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 20px rgba(251,191,36,0.4))",
                  }}
                >
                  WINNER
                </span>
              </h2>
            </div>

            {/* Prize */}
            <div
              data-fw-anim
              className="fw-anim-up"
              style={{ "--fw-delay": "160ms" } as React.CSSProperties}
            >
              <div
                className="inline-flex flex-col rounded-2xl px-6 py-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(52,211,153,0.1), rgba(16,185,129,0.05))",
                  border: "1px solid rgba(52,211,153,0.25)",
                  boxShadow: "0 0 24px rgba(52,211,153,0.1)",
                }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400/70 mb-1">
                  1st Prize — Cash Award
                </span>
                <span
                  className="text-3xl sm:text-4xl font-black"
                  style={{
                    background:
                      "linear-gradient(90deg, #34d399, #6ee7b7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ₹5,00,000
                </span>
              </div>
            </div>

            {/* Details */}
            <div
              data-fw-anim
              className="fw-anim-up"
              style={{ "--fw-delay": "240ms" } as React.CSSProperties}
            >
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
                Team <span className="font-bold text-white">SCOR7</span> clinched
                the top spot at PSB Hackathon Series 2026, organised by{" "}
                <span className="text-emerald-400">Punjab &amp; Sind Bank</span>{" "}
                with{" "}
                <span className="text-emerald-400">
                  Amity Innovation &amp; Design Centre
                </span>
                . Mentored by Dr. Vinayak Majhi.
              </p>
            </div>

            {/* Team tag + CTA */}
            <div
              data-fw-anim
              className="fw-anim-up flex flex-wrap items-center gap-3"
              style={{ "--fw-delay": "320ms" } as React.CSSProperties}
            >
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest"
                style={{
                  background: "rgba(52,211,153,0.12)",
                  border: "1px solid rgba(52,211,153,0.35)",
                  color: "#34d399",
                }}
              >
                Team SCOR7
              </span>

              <a
                href="#achievements"
                data-cursor="disable"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-900 transition-all duration-300 hover:scale-105 hover:brightness-110"
                style={{
                  background:
                    "linear-gradient(90deg, #fbbf24, #f59e0b)",
                  boxShadow: "0 0 20px rgba(251,191,36,0.4)",
                }}
              >
                <MdPhotoLibrary className="h-4 w-4" />
                View Photos
              </a>
            </div>
          </div>

          {/* Right — Poster image */}
          <div
            data-fw-anim
            className="fw-anim-scale flex justify-center lg:justify-end"
            style={{ "--fw-delay": "100ms" } as React.CSSProperties}
          >
            <div
              className="relative w-full max-w-sm lg:max-w-md"
              style={{
                filter: "drop-shadow(0 0 40px rgba(251,191,36,0.25))",
              }}
            >
              {/* Glow ring */}
              <div
                aria-hidden
                className="absolute -inset-2 rounded-2xl opacity-40 blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #fbbf24, #34d399, #fbbf24)",
                }}
              />
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  border: "1px solid rgba(251,191,36,0.4)",
                  boxShadow: "0 0 0 1px rgba(52,211,153,0.15)",
                }}
              >
                <SafeImage
                  src="/images/psb-winner-poster.jpg"
                  alt="PSB Hackathon Series 2026 — Winner Poster"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>

              {/* Corner badge */}
              <div
                className="absolute -top-3 -right-3 flex h-14 w-14 items-center justify-center rounded-full text-slate-900 font-black text-xs text-center leading-tight shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                  boxShadow: "0 0 20px rgba(251,191,36,0.6)",
                }}
              >
                1st
                <br />
                Prize
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        [data-fw-anim] {
          opacity: 0;
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: var(--fw-delay, 0ms);
        }
        .fw-anim-up { transform: translateY(28px); }
        .fw-anim-fade { transform: none; }
        .fw-anim-scale { transform: scale(0.94); }

        .fw-visible[data-fw-anim] {
          opacity: 1;
          transform: none !important;
        }
      `}</style>
    </section>
  );
};

export default FeaturedWin;
