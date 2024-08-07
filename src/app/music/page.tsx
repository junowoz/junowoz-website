import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "junowoz | music",
  description: "संगीतं",
};

export default function Music() {
  return (
    <div id="music">
      <iframe
        src="https://open.spotify.com/embed/playlist/0GNSVsDb7h9a3UycirT6pk?utm_source=generator&theme=0"
        width="100%"
        height="512"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
