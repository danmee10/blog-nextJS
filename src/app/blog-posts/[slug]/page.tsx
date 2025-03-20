import React from "react";
import { type PostData } from "@/app/lib/utils/getItemDataByName";
import { getItemDataByName } from "../../lib/utils/getItemDataByName";
import Image from "next/image";
import { blogPosts } from "@/app/data/blogPosts";
import NotFound from "@/app/lib/components/NotFound";
import { NotFoundObject } from "@/app/lib/types/NotFoundObject";
import { Item } from "@/app/lib/types/Item";
import path from "path";
import { TagDisplay } from "@/app/lib/components/TagDisplay";

const postsDirectory = path.join(process.cwd(), "src/app/blog-markdown");

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({
  params: asyncParams,
}: BlogPostPageProps) {
  const params = await asyncParams;
  const { slug } = params;
  const blogPostData: Item | undefined = blogPosts.find(
    (post) => post.slug === slug
  );

  const blogPost: PostData | null = await getItemDataByName({
    name: slug,
    dir: postsDirectory,
  });

  if (!blogPost || !blogPostData) {
    return <NotFound objectType={NotFoundObject.POST} />;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Image
        src={blogPostData.image}
        alt={blogPostData.name}
        width={800}
        height={400}
        className="rounded-md mb-4 object-cover"
      />
      <div className="flex flex-col gap-2 mb-4">
        <TagDisplay tags={blogPostData.tags} />
      </div>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blogPost.contentHtml }}
      />
    </div>
  );
}
