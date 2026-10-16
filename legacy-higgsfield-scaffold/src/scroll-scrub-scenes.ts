import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#A5B0A0",
  background: "#171816",
  ink: "#F2EFE8",
  muted: "#C8CBC4",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "Architecture shaped by context, proportion and detail. Based in Amman, working across borders.",
    clip: "/assets/world/murad-architecture.mp4",
    id: "identity",
    kicker: "Architect · Amman, Jordan",
    label: "Murad",
    poster: "/assets/world/murad-architecture-poster.jpg",
    mobileClip: "/assets/world/murad-architecture-mobile.mp4",
    mobilePoster: "/assets/world/murad-architecture-mobile-poster.jpg",
    scroll: 3.2,
    linger: 0.22,
    tags: ["Architecture", "Interior Design", "Project Leadership"],
    title: "MURAD MAGHARBEH",
  },
];
