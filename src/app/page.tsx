import React, { Fragment } from "react";
import Image from "next/image";
import WebBadges from "@/components/WebBadges";
import { basics } from "@/data/basics";
import { projects } from "@/data/projects";
import { techStack } from "@/data/techStack";

export default async function Home() {
  return (
    <div className="grid gap-4">
      <Image
        src="/profile.png"
        alt="Profile Picture"
        width={128}
        height={128}
      />
      <div>
        <p className="text-primary">{basics.name}</p>
        <p className="text-foreground">{basics.label}</p>
      </div>
      <section id="contato" className="text-link">
        <a className="hover:underline" href={`mailto:${basics.email}`}>
          {basics.email}
        </a>
        <div id="redes" className="flex gap-2">
          {basics.socials.map((socials) => (
            <Fragment key={socials.network}>
              <a target="_blank" href={socials.url} className="hover:underline">
                {socials.network.toLowerCase()}
              </a>
              /
            </Fragment>
          ))}
        </div>
      </section>
      <section id="about" className="grid gap-2">
        <p>
          I&apos;m a Computer Engineer and Economist from Brazil, currently
          working as a software developer. I love coding and am a fan of the
          Unix philosophy and the open-source movement.
        </p>
        <ul className="list-disc list-inside">
          <li>
            I&apos;m interested in how technology intersects with society.
          </li>
          <li>
            I&apos;m deeply fascinated by consciousness and the human mind.
          </li>
        </ul>
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
                {project.name}: {project.description}
              </a>
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
