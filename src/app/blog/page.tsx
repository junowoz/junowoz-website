import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getPostMetadata } from "@/lib/getPostMetadata";

export const metadata: Metadata = {
  title: "junowoz | blog",
  description: "लेखनम्",
};

export default function Blog() {
  const postMetadata = getPostMetadata();
  return (
    <div className="flex flex-col gap-4">
      <Link href="/blog/categories" className="text-secondary hover:underline">
        [BLOG CATEGORIES]
      </Link>
      <div className="flex flex-col gap-2 sm:gap-0">
        {postMetadata.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="hover:underline flex flex-col sm:flex-row sm:gap-2"
          >
            <p className="text-foreground">{post.date}</p>
            <span>{post.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
