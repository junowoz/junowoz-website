import React, { Fragment } from "react";
import Image from "next/image";
import WebBadges from "@/components/WebBadges";
import { basics } from "@/data/basics";
import { projects } from "@/data/projects";
import { techStack } from "@/data/techStack";
import { socials } from "@/data/socials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "junowoz | index",
  description: "जूनोवोस्",
};

export default async function Home() {
  return (
    <div className="grid gap-4">
      <Image
        src="/og.png"
        alt="Identicon"
        priority
        quality={100}
        width={128}
        height={128}
      />
      <div>
        <p className="text-primary">{basics.name}</p>
        <p className="text-foreground">{basics.label}</p>
      </div>
      <section id="contact" className="text-link">
        <a className="hover:underline" href={`mailto:${basics.email}`}>
          {basics.email}
        </a>
        <div id="socials" className="flex flex-wrap">
          {socials.map((social, index) => (
            <div key={social.network}>
              <a target="_blank" href={social.url} className="hover:underline">
                {social.network.toLowerCase()}
              </a>
              {index < socials.length - 1 && <span className="mx-2">/</span>}
            </div>
          ))}
        </div>
      </section>
      <section id="about" className="grid gap-2">
        <p>{basics.summary}</p>
        {basics.interests && (
          <ul className="list-disc list-inside">
            {basics.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        )}
      </section>
      <section id="projects" className="grid gap-2">
        <h2 className="text-xl font-bold">PROJECTS</h2>
        <ul className="list-disc list-inside">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                target="_blank"
                href={project.url}
                className="text-link hover:underline"
              >
                {project.name}:{" "}
              </a>
              <span>{project.description}</span>
            </li>
          ))}
        </ul>
      </section>
      <section id="techStack" className="grid gap-2">
        <h2 className="text-xl font-bold">TECH STACK</h2>
        <p>{techStack.join(", ")}</p>
      </section>
      <WebBadges />
    </div>
  );
}
