import React from "react";
import { useRouter } from "next/router";
import { blogPosts } from "../../data/blogPosts";
import Image from "next/image";
import Markdown from "react-markdown";
import fs from "fs";
import path from "path";

export default function BlogPostPage() {
  const {
    query: { blogId },
  } = useRouter();

  const blogPost = blogPosts.find((post) => post.id === Number(blogId));

  let markdown = "";
  if (blogPost) {
    const markdownPath = path.join(
      process.cwd(),
      `/blog-markdown/${blogPost.name}.md`
    );
    markdown = fs.readFileSync(markdownPath, "utf8");
  }

  if (!markdown) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blogPost.heading}</h1>
      <Image
        src={blogPost.image}
        alt={blogPost.heading}
        width={800}
        height={400}
        className="rounded-md mb-4"
      />
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
