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
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a
            href="/#"
            className="text-lg sm:text-xl font-bold text-white hover:text-cyan-400 transition-colors duration-200"
            data-cursor="disable"
          >
            SK
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
                >
                  <HoverLinks text={item.label} />
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
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-6 py-3 text-sm font-semibold text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 border-b border-slate-700/50 last:border-b-0 transition-all duration-200"
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

