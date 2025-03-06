import React from "react";
import { type PostData } from "@/app/lib/utils/posts";
import { getPostsDataByName } from "../../lib/utils/posts";
import Image from "next/image";
import { blogPosts, type BlogPost } from "@/app/data/blogPosts";
import NotFound from "@/app/lib/components/NotFound";
import { NotFoundObject } from "@/app/lib/types/NotFoundObject";

interface BlogPostPageProps {
  params: Promise<{ postName: string }>;
}

export default async function BlogPostPage({ params: asyncParams }: BlogPostPageProps) {
  const params = await asyncParams;
  const { postName } = params;
  const blogPostData: BlogPost | undefined = blogPosts.find(
    (post) => post.name === postName
  );

  const blogPost: PostData | null = await getPostsDataByName(postName);

  if (!blogPost || !blogPostData) {
    return <NotFound objectType={NotFoundObject.POST} />;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Image
        src={blogPostData.image}
        alt={blogPostData.heading}
        width={800}
        height={400}
        className="rounded-md mb-4 object-cover"
      />
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blogPost.contentHtml }}
      />
    </div>
  );
}
