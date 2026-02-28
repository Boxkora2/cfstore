import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:             "KoraChoco Coffee",
    short_name:       "KoraChoco",
    description:      "Cozy coffee shop — Specialty beans, espresso & pastries in a warm, welcoming space.",
    start_url:        "/",
    display:          "standalone",
    background_color: "#FAF7F2",
    theme_color:      "#6F4E37",
    orientation:      "portrait-primary",
    icons: [
      { src: "/icon.svg",    sizes: "any",   type: "image/svg+xml", purpose: "any" },
      { src: "/icon.svg",    sizes: "any",   type: "image/svg+xml", purpose: "maskable" },
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}
