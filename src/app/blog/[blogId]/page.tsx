import fs from "fs";

import React from "react";
import { blogPosts } from "../../data/blogPosts";
import Image from "next/image";
import Markdown from "react-markdown";
import path from "path";

import { useParams } from "next/navigation";
export default function BlogPostPage() {
  const params = useParams<{ blogId: string }>();

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params);

  const blogPost = blogPosts.find((post) => post.id === Number(params.blogId));

  let markdown = "";
  if (blogPost) {
    const markdownPath = path.join(
      process.cwd(),
      `/blog-markdown/${blogPost.name}.md`
    );
    markdown = fs.readFileSync(markdownPath, "utf8");
  }

  if (!blogPost || !markdown) {
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
