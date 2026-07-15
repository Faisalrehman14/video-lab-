import Link from "next/link";

type Props = {
  title: string;
  bullets: string[];
  image: string;
  featured?: boolean;
  href?: string;
};

export function ServiceDetailCard({
  title,
  bullets,
  image,
  featured = false,
  href,
}: Props) {
  const backgroundImage =
    image.startsWith("url(") ||
    image.includes("gradient(") ||
    image.startsWith("linear") ||
    image.startsWith("radial")
      ? image
      : `url(${image})`;

  return (
    <article
      className={`flex h-full flex-col overflow-hidden border ${
        featured
          ? "border-ink bg-ink text-white"
          : "border-stone-200 bg-white text-stone-800"
      }`}
    >
      <div
        className="aspect-[16/10] w-full bg-cover bg-center"
        style={{ backgroundImage }}
        role="img"
        aria-label={`${title} visual`}
      />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-display text-base font-bold leading-snug text-brand md:text-lg">
          {href ? (
            <Link href={href} className="hover:underline">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <ul className="mt-4 flex-1 space-y-2.5">
          {bullets.map((b) => (
            <li
              key={b}
              className={`flex gap-2 text-sm leading-relaxed ${
                featured ? "text-stone-300" : "text-stone-600"
              }`}
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
