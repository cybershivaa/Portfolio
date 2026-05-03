import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

type SmootherController = {
  paused: (state: boolean) => void;
  scrollTop: (value: number) => void;
  scrollTo: (target: string | number | Element, smooth?: boolean, position?: string) => void;
};

export let smoother: SmootherController = {
  paused: (state) => {
    document.body.style.overflowY = state ? "hidden" : "auto";
  },
  scrollTop: (value) => {
    window.scrollTo({ top: value, behavior: "auto" });
  },
  scrollTo: (target) => {
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
      return;
    }

    if (typeof target === "string") {
      const node = document.querySelector(target);
      node?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  },
};

const Navbar = () => {
  useEffect(() => {
    smoother = {
      paused: (state) => {
        document.body.style.overflowY = state ? "hidden" : "auto";
      },
      scrollTop: (value) => {
        window.scrollTo({ top: value, behavior: "auto" });
      },
      scrollTo: (target) => {
        if (typeof target === "number") {
          window.scrollTo({ top: target, behavior: "smooth" });
          return;
        }

        if (typeof target === "string") {
          const node = document.querySelector(target);
          node?.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        target.scrollIntoView({ behavior: "smooth", block: "start" });
      },
    };

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a[data-href]");
    const clickHandlers: Array<{ element: HTMLAnchorElement; handler: (e: Event) => void }> = [];
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      const handler = (e: Event) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let current = e.currentTarget as HTMLAnchorElement;
          let section = current.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, true, "top top");
          }
        }
      };
      clickHandlers.push({ element, handler });
      element.addEventListener("click", handler);
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });
      window.removeEventListener("resize", onResize);
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
            <a href="https://xyrosolutions.tech/" target="_blank" rel="noopener noreferrer">
              <HoverLinks text="STARTUP" />
            </a>
          </li>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
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
