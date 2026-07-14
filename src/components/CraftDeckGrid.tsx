import Image from "next/image";
import { craftDecks } from "@/lib/craft";

export function CraftDeckGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3 md:items-start">
      {craftDecks.map((deck) => {
        const fit = deck.imageFit ?? "cover";
        const aspect = deck.aspect ?? "16 / 10";

        return (
          <article key={deck.id} className="flex flex-col">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              {deck.imageSrc ? (
                <div
                  className="relative w-full"
                  style={{
                    aspectRatio: aspect,
                    backgroundColor:
                      deck.id === "motion" ? "#f4f4f2" : "#0a0a0a",
                  }}
                >
                  <Image
                    src={deck.imageSrc}
                    alt={`${deck.title} example`}
                    fill
                    className={
                      fit === "contain"
                        ? "object-contain object-center"
                        : "object-cover object-center"
                    }
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={deck.id === "picture" || deck.id === "motion"}
                  />
                </div>
              ) : (
                <div
                  className="w-full"
                  style={{ aspectRatio: aspect, backgroundImage: deck.image }}
                  role="img"
                  aria-label={`${deck.title} atmosphere`}
                />
              )}
              <ul className="space-y-2.5 px-5 py-5">
                {deck.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-stone-300">
                    <span className="h-2 w-2 shrink-0 rounded-[2px] bg-[#ff8a00]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <h3 className="mt-5 text-center font-display text-base font-extrabold uppercase tracking-[0.12em] text-white md:text-lg">
              {deck.title}
            </h3>
          </article>
        );
      })}
    </div>
  );
}
