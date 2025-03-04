import React from "react";

import { type PostData } from "@/app/lib/utils/posts";
import { getPostsDataByName } from "../../lib/utils/posts";
import Image from "next/image";
import { blogPosts, type BlogPost } from "@/app/data/blogPosts";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ blogName: string }>;
}) {
  const { blogName } = await params;
  const blogPostData: BlogPost | undefined = blogPosts.find(
    (post) => post.name === blogName
  );
  const blogPost: PostData = await getPostsDataByName(blogName);

  console.log({ params, blogPost });

  if (!blogPost || !blogPostData) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blogPostData.heading}</h1>
      <Image
        src={blogPostData.image}
        alt={blogPostData.heading}
        width={800}
        height={400}
        className="rounded-md mb-4"
      />
      <div dangerouslySetInnerHTML={{ __html: blogPost.contentHtml }} />
    </div>
  );
}
