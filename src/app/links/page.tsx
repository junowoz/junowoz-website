import React from "react";
import { links } from "@/data/links";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "junowoz | links",
  description: "लिङ्कानि",
};

export default function Links() {
  return (
    <div id="links">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} className="text-link hover:underline">
            {link.name}:{" "}
          </a>
          <span>{link.description}</span>
        </li>
      ))}
    </div>
  );
}
