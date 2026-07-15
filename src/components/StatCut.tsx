type Props = {
  value: string;
  label: string;
};

/** White → brand-red cut numerals — lab stats without orange noise */
export function StatCut({ value, label }: Props) {
  return (
    <div className="text-center">
      <div className="relative inline-block">
        <span
          className="font-display text-4xl font-extrabold leading-none md:text-5xl"
          style={{
            background:
              "linear-gradient(180deg, #ffffff 0%, #ffffff 46%, #e30613 46.01%, #b00510 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {value}
        </span>
        <span
          className="pointer-events-none absolute left-[-6%] right-[-6%] top-1/2 h-px -translate-y-1/2 bg-[#070707]"
          aria-hidden
        />
      </div>
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 md:text-xs">
        {label}
      </p>
    </div>
  );
}
