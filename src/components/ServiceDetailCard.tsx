import Link from "next/link";

type Props = {
  title: string;
  bullets: string[];
  image: string;
  featured?: boolean;
  href?: string;
};

function isPhotoUrl(image: string) {
  return (
    !image.startsWith("url(") &&
    !image.includes("gradient(") &&
    !image.startsWith("linear") &&
    !image.startsWith("radial")
  );
}

/** Prefer face-aware Unsplash crop so portraits aren’t beheaded in landscape frames */
function faceAwareSrc(src: string) {
  if (!src.includes("images.unsplash.com")) return src;
  if (src.includes("crop=")) return src;
  return `${src}${src.includes("?") ? "&" : "?"}crop=faces`;
}

/**
 * Offering card media — taller than 16:10 and top-weighted so heads stay in frame.
 */
export function ServiceDetailCard({
  title,
  bullets,
  image,
  featured = false,
  href,
}: Props) {
  const photo = isPhotoUrl(image);

  return (
    <article
      className={`flex h-full flex-col overflow-hidden border ${
        featured
          ? "border-ink bg-ink text-white"
          : "border-stone-200 bg-white text-stone-800"
      }`}
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-stone-200">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={faceAwareSrc(image)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-[center_22%]"
            style={{
              backgroundImage:
                image.startsWith("url(") || image.includes("gradient(")
                  ? image
                  : `url(${image})`,
            }}
            role="img"
            aria-label={`${title} visual`}
          />
        )}
      </div>
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
