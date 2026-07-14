type Props = {
  title: string;
  text: string;
};

export function WhyPoint({ title, text }: Props) {
  return (
    <div className="flex gap-4">
      <span
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-brand"
        aria-hidden
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2.5 7.5l3 3 6-7"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div>
        <h3 className="font-display text-base font-bold text-ink">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{text}</p>
      </div>
    </div>
  );
}
