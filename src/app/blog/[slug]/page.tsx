import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "react-markdown";
import { PostPageProps } from "@/interfaces";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = getPostContent(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | junowoz blog`,
    description: post.title,
  };
}

function getPostContent(slug: string) {
  const folder = path.join(process.cwd(), "/src/posts");
  const fullPath = path.join(
    folder,
    `${slug.toLowerCase().replace(/\s+/g, "-")}.md`
  );
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { ...data, content } as {
      title: string;
      date: string;
      category: string;
      content: string;
    };
  } catch (error) {
    return null;
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostContent(params.slug);
  if (!post) notFound();

  return (
    <div id="post" className="grid gap-4">
      <Link href="/blog" className="text-secondary hover:underline">
        [BACK TO BLOG]
      </Link>
      <div className="flex gap-2">
        <p className="text-foreground">{post.date}</p>
        <span className="font-bold">{post.title}</span>
        <Link
          href={`/blog/categories/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
          className="hover:underline text-primary"
        >
          [{post.category}]
        </Link>
        <hr />
      </div>
      <article>
        <Markdown className="prose prose-invert">{post.content}</Markdown>
      </article>
    </div>
  );
}
