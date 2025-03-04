import fs from "fs";

import React from "react";
import { type BlogPost } from "@/app/data/blogPosts";
import { getSortedPostsData } from "../../lib/utils/posts";
import Image from "next/image";
import Markdown from "react-markdown";
import path from "path";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const params = useParams<{ blogId: string }>();
  const allPostsData: BlogPost[] = await getSortedPostsData();

  console.log({ params, allPostsData });

  const blogPost = allPostsData.find(
    (post) => post.id === Number(params.blogId)
  );

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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}