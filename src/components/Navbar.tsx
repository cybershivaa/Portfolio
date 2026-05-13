import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { smoother } from "./utils/smootherUtils";
import { HiMenu, HiX } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const isNavScrollingRef = useRef(false);
  const navScrollTimerRef = useRef<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#work" },
    { label: "EXPERIENCE", href: "#career" },
    { label: "SKILLS", href: "#techstack" },
    { label: "STARTUP", href: "https://xyrosolutions.tech/", external: true, featured: true },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const header = document.querySelector("nav") as HTMLElement | null;
    header?.classList.remove("translate-y-full");

    isNavScrollingRef.current = true;
    if (navScrollTimerRef.current !== null) {
      window.clearTimeout(navScrollTimerRef.current);
    }

    navScrollTimerRef.current = window.setTimeout(() => {
      isNavScrollingRef.current = false;
    }, 900);

    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const node = document.querySelector(targetId);
    node?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleExternalClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    smoother.scrollTop(0);
    smoother.paused(true);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    let lastScrollY = 0;
    const header = document.querySelector("nav") as HTMLElement;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (header) {
        if (isNavScrollingRef.current) {
          header.classList.remove("translate-y-full");
          lastScrollY = currentScrollY;
          return;
        }

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          header.classList.add("translate-y-full");
        } else {
          header.classList.remove("translate-y-full");
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      if (navScrollTimerRef.current !== null) {
        window.clearTimeout(navScrollTimerRef.current);
      }
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className="header nav-fade fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/80 backdrop-blur-md border-b border-cyan-500/10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between h-full relative">
          {/* Logo - Left */}
          <a
            href="/#"
            className="text-lg sm:text-xl font-bold text-white hover:text-cyan-400 transition-colors duration-200 whitespace-nowrap"
            data-cursor="disable"
          >
            SK
          </a>

          {/* Center Brand */}
          <div className="absolute left-1/3 transform -translate-x-1/2">
            <span className="text-white font-bold text-sm sm:text-base whitespace-nowrap">PERSONAL PORTFOLIO</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={item.external ? handleExternalClick : (e) => handleNavClick(e, item.href)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className={
                    item.featured
                      ? "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-200/40 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-5 py-2.5 text-xs font-black uppercase tracking-[0.24em] text-slate-950 shadow-[0_16px_40px_rgba(34,211,238,0.38)] transition-all duration-300 before:pointer-events-none before:absolute before:inset-y-0 before:left-[-45%] before:w-1/2 before:skew-x-[-20deg] before:bg-white/35 before:blur-xl before:content-[''] hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_20px_48px_rgba(34,211,238,0.55)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                      : "text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
                  }
                >
                  {item.featured ? item.label : <HoverLinks text={item.label} />}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-b border-cyan-500/20 backdrop-blur-md animate-in fade-in duration-200">
          <ul className="flex flex-col gap-0 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={item.external ? handleExternalClick : (e) => handleNavClick(e, item.href)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className={
                    item.featured
                      ? "relative mx-4 my-2 inline-flex w-fit items-center justify-center overflow-hidden rounded-full border border-cyan-200/40 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-slate-950 shadow-[0_16px_34px_rgba(34,211,238,0.32)] transition-all duration-300 before:pointer-events-none before:absolute before:inset-y-0 before:left-[-45%] before:w-1/2 before:skew-x-[-20deg] before:bg-white/35 before:blur-xl before:content-[''] hover:shadow-[0_20px_44px_rgba(34,211,238,0.48)] hover:brightness-110"
                      : "block px-6 py-3 text-sm font-semibold text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 border-b border-slate-700/50 last:border-b-0 transition-all duration-200"
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

