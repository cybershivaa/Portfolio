import { SplitText } from "./simpleSplitText";
import gsap from "gsap";
import { smoother } from "./smootherUtils";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0]?.classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#050816",
    duration: 0.6,
    delay: 0.2,
  });

  const landingText = new SplitText(
    [
      ".landing-kicker",
      ".landing-intro h1",
      ".landing-description",
      ".landing-role",
      ".landing-info-h2",
      ".landing-custom-subtitle",
    ],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );

  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 48, filter: "blur(4px)" },
    {
      opacity: 1,
      duration: 1.1,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.02,
      delay: 0.15,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0, y: -12 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power1.out",
      delay: 0.1,
      stagger: 0.05,
    }
  );
}
