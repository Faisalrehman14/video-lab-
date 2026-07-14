type CraftDeck = {
  id: string;
  title: string;
  /** CSS gradient fallback / atmosphere */
  image: string;
  /** Optional real photo */
  imageSrc?: string;
  /** How the photo fills its frame — use contain to avoid cropping */
  imageFit?: "cover" | "contain";
  /** CSS aspect ratio for the media frame */
  aspect?: string;
  items: string[];
};

/** Three finishing decks — unique to RenderReady */
export const craftDecks: CraftDeck[] = [
  {
    id: "picture",
    title: "Picture Finish",
    image: "#0a0a0a",
    imageSrc: "/craft-picture.png",
    imageFit: "contain",
    aspect: "4 / 5",
    items: [
      "Conform & sync",
      "Primary / secondary grade",
      "Titles & lower-thirds",
      "Captions / SRT",
      "Beauty clean-up",
      "Shot matching",
      "Export masters",
    ],
  },
  {
    id: "motion",
    title: "Motion & VFX",
    image: "#f4f4f2",
    imageSrc: "/craft-motion.png",
    imageFit: "contain",
    aspect: "4 / 5",
    items: [
      "Motion graphics",
      "Tracking & stabilize",
      "Chroma / plate work",
      "Kinetic type",
      "Product callouts",
      "Logo end-cards",
      "UI overlays",
    ],
  },
  {
    id: "audio",
    title: "Audio Polish",
    image: "#0a0a0a",
    imageSrc: "/craft-audio.png",
    imageFit: "contain",
    aspect: "3 / 2",
    items: [
      "Ad Jingle Creation",
      "Corporate Audio",
      "Radio Program",
      "Music Mixing",
      "Audio Conversion",
      "Podcast Editing",
      "Adobe Audition",
    ],
  },
];
