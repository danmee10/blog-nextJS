import React from "react";
import Link from "next/link";

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
  const blogPost: PostData | null = await getPostsDataByName(blogName);

  if (!blogPost || !blogPostData) {
    return (
      <div className="max-w-4xl mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-4">
          Sorry, the blog post you are looking for does not exist or has been
          removed.
        </p>
        <Link href="/blog" className="text-blue-600 hover:underline">
          Go back to Blog
        </Link>
      </div>
    );
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
