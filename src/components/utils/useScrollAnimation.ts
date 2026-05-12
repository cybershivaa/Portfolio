import { useEffect, useRef } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "zoom-in"
  | "slide-up";

interface ScrollAnimationOptions {
  variant?: AnimationVariant;
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number; // 0–1
  once?: boolean;
}

/**
 * Attach a data-scroll-animate attribute to an element and this hook
 * will add the "is-visible" class when the element enters the viewport.
 *
 * Usage:
 *   const ref = useScrollAnimation();
 *   <div ref={ref} data-scroll-animate="fade-up"> … </div>
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    variant = "fade-up",
    delay = 0,
    duration = 700,
    threshold = 0.12,
    once = true,
  } = options;

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.dataset.scrollAnimate = variant;
    el.style.setProperty("--anim-duration", `${duration}ms`);
    el.style.setProperty("--anim-delay", `${delay}ms`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scroll-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("scroll-visible");
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay, duration, threshold, once]);

  return ref as React.RefObject<HTMLElement>;
}

/**
 * Simpler helper — attaches the observer to *all* children of a container
 * that have a data-anim attribute.
 */
export function useChildrenAnimation(
  containerRef: React.RefObject<HTMLElement | null>,
  threshold = 0.1
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-anim]")
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
      { threshold }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [containerRef, threshold]);
}
