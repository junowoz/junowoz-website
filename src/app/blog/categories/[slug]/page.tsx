import React from "react";
import Link from "next/link";
import { getPostMetadata } from "@/lib/getPostMetadata";
import type { Metadata } from "next";
import { CategoryPageProps } from "@/interfaces";

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.slug).replace(/-/g, " ");
  return {
    title: `junowoz | ${categoryName} category`,
    description: `posts in the ${categoryName} category`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const postMetadata = getPostMetadata();
  const categoryName = decodeURIComponent(params.slug).replace(/-/g, " ");
  const categoryPosts = postMetadata.filter(
    (post) => post.category.toLowerCase() === categoryName.toLowerCase()
  );
  return (
    <div className="flex flex-col gap-4">
      <Link href="/blog/categories" className="text-secondary hover:underline">
        [BACK TO CATEGORIES]
      </Link>
      <h2 className="text-primary">{categoryName}</h2>
      <div className="flex flex-col gap-2 sm:gap-0">
        {categoryPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="hover:underline flex flex-col sm:flex-row sm:gap-2"
          >
            <p className="text-foreground">{post.date}</p>
            <span className="font-bold">{post.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
