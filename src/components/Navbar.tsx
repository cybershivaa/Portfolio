import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { smoother } from "./utils/smootherUtils";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const isNavScrollingRef = useRef(false);
  const navScrollTimerRef = useRef<number | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    const header = document.querySelector(".header") as HTMLElement | null;
    header?.classList.remove("header-hidden");

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
    const header = document.querySelector(".header") as HTMLElement;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (header) {
        if (isNavScrollingRef.current) {
          header.classList.remove("header-hidden");
          lastScrollY = currentScrollY;
          return;
        }

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          header.classList.add("header-hidden");
        } else {
          header.classList.remove("header-hidden");
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
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SK
        </a>
        <ul>
          <li>
            <a href="#" onClick={(e) => handleNavClick(e, "#")}>
              <HoverLinks text="HOME" />
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a href="#work" onClick={(e) => handleNavClick(e, "#work")}>
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a href="#career" onClick={(e) => handleNavClick(e, "#career")}>
              <HoverLinks text="EXPERIENCE" />
            </a>
          </li>
          <li>
            <a href="#techstack" onClick={(e) => handleNavClick(e, "#techstack")}>
              <HoverLinks text="SKILLS" />
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
