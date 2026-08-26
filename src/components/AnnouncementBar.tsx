import { useState } from "react";
import { FaTrophy, FaTimes } from "react-icons/fa";
import { MdOutlineCelebration } from "react-icons/md";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const ticker =
    "🏆 PSB Hackathon Series 2026 — WINNER  •  Team SCOR7  •  ₹5,00,000 Cash Prize  •  Organised by Punjab & Sind Bank  •  Amity Innovation & Design Centre  •  ";

  return (
    <div
      id="announcement-bar"
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #0f172a 0%, #134e4a 40%, #0f172a 100%)",
        borderBottom: "1px solid rgba(52,211,153,0.35)",
        height: "38px",
      }}
    >
      {/* Left glow icon */}
      <div className="flex-none pl-3 pr-2 flex items-center gap-1.5 z-10">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[11px] font-black uppercase tracking-widest whitespace-nowrap"
          style={{
            background: "linear-gradient(90deg,#fbbf24,#f59e0b)",
            color: "#0f172a",
            boxShadow: "0 0 12px rgba(251,191,36,0.55)",
          }}
        >
          <FaTrophy className="h-3 w-3" />
          WINNER
        </span>
      </div>

      {/* Scrolling ticker */}
      <div className="flex-1 overflow-hidden relative">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "ticker-scroll 10s linear infinite" }}
        >
          {[ticker, ticker].map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide pr-6"
              style={{ color: "#6ee7b7" }}
            >
              <MdOutlineCelebration
                className="h-3.5 w-3.5 text-yellow-400 flex-none"
                aria-hidden
              />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
        className="flex-none pr-3 pl-2 text-emerald-400/60 hover:text-emerald-300 transition-colors duration-200"
      >
        <FaTimes className="h-3.5 w-3.5" />
      </button>

      {/* Ticker keyframe injected inline */}
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
