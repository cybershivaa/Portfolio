import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MdArrowBack, MdArrowForward, MdClose } from "react-icons/md";
import SafeImage from "./SafeImage";
import "./styles/PhotoGallery.css";

interface Props {
  /** Any number of image paths */
  images: string[];
  /** Used for the dialog label and image alt text, e.g. "PSB Hackathon Series 2026 - Team SCOR7" */
  label: string;
  isOpen: boolean;
  startIndex?: number;
  onClose: () => void;
}

const SWIPE_THRESHOLD = 45;

/**
 * Reusable fullscreen photo gallery (lightbox).
 * Keyboard: ← / → to navigate, Esc to close, Tab stays inside the dialog.
 * Touch: horizontal swipe to navigate.
 */
const PhotoGallery = ({
  images,
  label,
  isOpen,
  startIndex = 0,
  onClose,
}: Props) => {
  const [index, setIndex] = useState(startIndex);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const total = images.length;

  const goTo = useCallback(
    (next: number) => {
      if (total === 0) return;
      setIndex(((next % total) + total) % total);
    },
    [total]
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  /* Reset to the requested slide each time the gallery opens */
  useEffect(() => {
    if (isOpen) setIndex(Math.min(Math.max(startIndex, 0), Math.max(total - 1, 0)));
  }, [isOpen, startIndex, total]);

  /* Lock page scroll while open, restore the previous value on close */
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /* Focus handling — focus the close button, restore focus on unmount */
  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    return () => {
      previouslyFocused?.focus?.();
    };
  }, [isOpen]);

  /* Keyboard navigation + simple focus trap */
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
        return;
      }
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, goPrev, goNext]);

  /* Keep the active thumbnail in view without scrolling the page */
  useEffect(() => {
    if (!isOpen) return;
    const rail = thumbsRef.current;
    const active = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !active) return;
    rail.scrollTo({
      left: active.offsetLeft - rail.clientWidth / 2 + active.clientWidth / 2,
      behavior: "smooth",
    });
  }, [index, isOpen]);

  const handleSurfaceClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    if (Math.abs(deltaX) < Math.abs(deltaY)) return;
    if (deltaX > 0) goPrev();
    else goNext();
  };

  if (!isOpen || total === 0) return null;

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${label} — photo gallery`}
      onClick={handleSurfaceClick}
      className="pg-overlay fixed inset-0 z-[999] flex max-w-[100vw] flex-col overflow-hidden bg-slate-950/95 px-3 py-4 backdrop-blur-md sm:px-6 sm:py-5"
    >
      {/* Header */}
      <div className="flex flex-none items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-white sm:text-base">
            {label}
          </p>
          <p
            className="mt-0.5 text-xs font-semibold text-cyan-400"
            aria-live="polite"
          >
            {index + 1} / {total}
          </p>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close photo gallery"
          data-cursor="disable"
          className="flex-none rounded-lg border border-cyan-400/30 p-2 text-cyan-400 transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
        >
          <MdClose className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Stage */}
      <div
        onClick={handleSurfaceClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative flex min-h-0 flex-1 items-center justify-center py-3 sm:py-4"
      >
        {total > 1 && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous photo"
            data-cursor="disable"
            className="absolute left-0 z-10 rounded-lg border border-cyan-400/30 bg-slate-950/70 p-2 text-cyan-400 transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 sm:p-3"
          >
            <MdArrowBack className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </button>
        )}

        <div
          key={index}
          className="pg-slide flex h-full w-full items-center justify-center px-12 sm:px-16"
        >
          <SafeImage
            src={images[index]}
            alt={`${label} — photo ${index + 1} of ${total}`}
            loading="eager"
            className="max-h-full max-w-full rounded-lg border border-cyan-400/20 object-contain shadow-2xl shadow-cyan-500/10"
          />
        </div>

        {total > 1 && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next photo"
            data-cursor="disable"
            className="absolute right-0 z-10 rounded-lg border border-cyan-400/30 bg-slate-950/70 p-2 text-cyan-400 transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 sm:p-3"
          >
            <MdArrowForward
              className="h-5 w-5 sm:h-6 sm:w-6"
              aria-hidden="true"
            />
          </button>
        )}
      </div>

      {/* Thumbnails */}
      {total > 1 && (
        <div
          ref={thumbsRef}
          className="pg-thumbs flex flex-none gap-2 overflow-x-auto pb-1 sm:gap-3 sm:justify-center"
        >
          {images.map((image, thumbIndex) => (
            <button
              key={image + thumbIndex}
              type="button"
              onClick={() => goTo(thumbIndex)}
              aria-label={`View photo ${thumbIndex + 1}`}
              aria-current={thumbIndex === index}
              data-cursor="disable"
              className={`h-14 w-20 flex-none overflow-hidden rounded-md border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 sm:h-16 sm:w-24 ${
                thumbIndex === index
                  ? "border-cyan-400/70 opacity-100 shadow-lg shadow-cyan-500/20"
                  : "border-gray-700/50 opacity-50 hover:border-cyan-400/40 hover:opacity-90"
              }`}
            >
              <SafeImage
                src={image}
                alt=""
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body
  );
};

export default PhotoGallery;
