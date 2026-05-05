import React, { useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const SocialIcons: React.FC = () => {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/cybershivaa", icon: FaGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/shivam-kumar-6286982b3", icon: FaLinkedinIn },
    { name: "Twitter", href: "https://x.com/Shivamkr2004", icon: FaXTwitter },
    { name: "Instagram", href: "https://www.instagram.com/krr._shivam", icon: FaInstagram },
  ];

  useEffect(() => {
    const containers = Array.from(document.querySelectorAll<HTMLElement>("[data-social]"));
    const cleanups: Array<() => void> = [];

    containers.forEach((container) => {
      const spans = Array.from(container.querySelectorAll<HTMLElement>("span"));

      const onPointer = (e: PointerEvent) => {
        spans.forEach((span) => {
          const link = span.querySelector<HTMLElement>("a");
          if (!link) return;
          const rect = span.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          // small offset proportional to distance from center
          const dx = (e.clientX - cx) / 12; // lower divisor = stronger motion
          const dy = (e.clientY - cy) / 18;
          link.style.transform = `translate(${dx}px, ${dy}px)`;
        });
      };

      const onLeave = () => {
        spans.forEach((span) => {
          const link = span.querySelector<HTMLElement>("a");
          if (!link) return;
          link.style.transform = "translate(0px, 0px)";
        });
      };

      container.addEventListener("pointermove", onPointer);
      container.addEventListener("pointerleave", onLeave);
      cleanups.push(() => container.removeEventListener("pointermove", onPointer));
      cleanups.push(() => container.removeEventListener("pointerleave", onLeave));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      {/* Desktop Sidebar - Bottom Left */}
      <div className="icons-section hidden md:fixed md:left-8 md:bottom-24 lg:bottom-32 md:flex md:flex-col md:gap-4 md:z-40">
        <div className="flex flex-col gap-4" data-cursor="icons" data-social="desktop">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <span key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="relative inline-flex items-center justify-center w-10 h-10 text-gray-400 bg-slate-800 hover:text-cyan-400 transition-transform duration-150 rounded-lg border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 group"
                  style={{ transform: "translate(0px, 0px)" }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="social-tooltip absolute left-full ml-3 px-3 py-1 bg-slate-900 text-cyan-400 text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-cyan-400/30 pointer-events-none">
                    {link.name}
                  </span>
                </a>
              </span>
            );
          })}
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-slate-950/80 border-t border-cyan-500/20 backdrop-blur-md z-40">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
          <div className="flex gap-4 items-center" data-cursor="icons" data-social="mobile">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <span key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="inline-flex items-center justify-center w-9 h-9 text-gray-400 bg-slate-800 hover:text-cyan-400 transition-transform duration-150 rounded-lg border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10"
                    style={{ transform: "translate(0px, 0px)" }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </span>
              );
            })}
          </div>

          {/* intentionally empty: resume removed */}
          <div />
        </div>
      </div>
    </>
  );
};

export default SocialIcons;
