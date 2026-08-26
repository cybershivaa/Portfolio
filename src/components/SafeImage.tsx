import { useEffect, useState } from "react";
import { MdImage } from "react-icons/md";

interface Props {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

/**
 * Image that degrades to a themed placeholder instead of a broken-image icon
 * when the file has not been added to /public yet.
 */
const SafeImage = ({ src, alt, className = "", loading = "lazy" }: Props) => {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    return (
      <div
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-800/60 via-slate-900 to-slate-950 text-gray-500 ${className}`}
      >
        <MdImage className="w-7 h-7 text-cyan-400/40" aria-hidden="true" />
        <span className="text-[11px] font-medium tracking-wide uppercase">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

export default SafeImage;
