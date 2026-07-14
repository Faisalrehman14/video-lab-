type MarkProps = {
  size?: number;
  className?: string;
};

/** RenderReady Labs symbol — film frame + ready mark */
export function BrandMark({ size = 40, className = "" }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rr-mark-bg" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2A2A2A" />
          <stop offset="1" stopColor="#111111" />
        </linearGradient>
      </defs>
      {/* Outer rounded tile */}
      <rect width="64" height="64" rx="14" fill="url(#rr-mark-bg)" />
      {/* Film sprocket left */}
      <rect x="7" y="14" width="5" height="6" rx="1" fill="#3A3A3A" />
      <rect x="7" y="29" width="5" height="6" rx="1" fill="#3A3A3A" />
      <rect x="7" y="44" width="5" height="6" rx="1" fill="#3A3A3A" />
      {/* Film sprocket right */}
      <rect x="52" y="14" width="5" height="6" rx="1" fill="#3A3A3A" />
      <rect x="52" y="29" width="5" height="6" rx="1" fill="#3A3A3A" />
      <rect x="52" y="44" width="5" height="6" rx="1" fill="#3A3A3A" />
      {/* Inner frame */}
      <rect x="16" y="14" width="32" height="36" rx="3" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
      {/* Play / ready triangle */}
      <path d="M28 24.5v15l13-7.5-13-7.5z" fill="#E30613" />
      {/* Ready check tip on corner */}
      <path
        d="M40 43.5l3.2 3.2 6.3-7"
        stroke="#E30613"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
