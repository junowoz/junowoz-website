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
      <div>
        {postMetadata.map((post) => (
          <div key={post.slug} className="flex gap-2">
            <Link
              href={`/blog/${post.slug}`}
              className="hover:underline flex flex-row gap-2"
            >
              <p className="text-foreground">{post.date}</p>
              <span className="font-bold">{post.title}</span>
            </Link>
            <Link
              href={`/blog/categories/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:underline text-primary"
            >
              [{post.category}]
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
