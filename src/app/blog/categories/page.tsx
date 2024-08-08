import React from "react";
import Link from "next/link";
import { getPostMetadata } from "@/lib/getPostMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "junowoz | categories",
  description: "श्रेणयः",
};

export default function Categories() {
  const postMetadata = getPostMetadata();
  const categories = Array.from(
    new Set(postMetadata.map((post) => post.category)),
  );

  return (
    <div className="flex flex-col gap-4">
      <Link href="/blog" className="text-secondary hover:underline">
        [BACK TO BLOG]
      </Link>
      <div>
        {categories.map((category) => (
          <div key={category} className="flex gap-2">
            <Link
              href={`/blog/categories/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, "-"))}`}
              className="hover:underline text-primary flex flex-row gap-2"
            >
              <span>{category}</span>
            </Link>
            <span className="text-foreground">
              (
              {postMetadata.filter((post) => post.category === category).length}{" "}
              posts)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
