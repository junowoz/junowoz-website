import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetadata } from "@/interfaces";

export function getPostMetadata(): PostMetadata[] {
  const folder = path.join(process.cwd(), "/src/posts");
  const files = fs.readdirSync(folder, { recursive: true }) as string[];
  const markdownPosts = files.filter(
    (file) => typeof file === "string" && file.endsWith(".md"),
  );

  const posts = markdownPosts.map((fileName) => {
    const filePath = path.join(folder, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
      published: matterResult.data.published !== false,
      slug: fileName.replace(/\.md$/, "").replace(/\s+/g, "-").toLowerCase(),
    };
  });

  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
