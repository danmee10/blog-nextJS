import Link from "next/link";
import { Card } from "../lib/components/Card";
import { ListViewMode } from "../lib/types/ListViewMode";
import { BlogPost } from "../data/blogPosts";
import Image from "next/image";
import { TagDisplay } from "../TagDisplay";

interface PostListItemProps {
  post: BlogPost;
  viewMode: ListViewMode;
}

export const PostListItem = ({ post, viewMode }: PostListItemProps) => {
  return (
    <Card className="p-4 relative">
      <Link key={post.id} href={`/blog/${post.name}`}>
        {viewMode === ListViewMode.VERBOSE && post.image && (
          <div className="relative mb-4">
            <Image
              src={post.image}
              alt={post.heading}
              className="w-full h-48 object-cover rounded-md"
              width={200}
              height={120}
            />
            <h2 className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black bg-opacity-50 p-2 rounded-md">
              {post.heading}
            </h2>
          </div>
        )}

        {viewMode !== ListViewMode.VERBOSE && (
          <h2 className="text-lg font-semibold">{post.heading}</h2>
        )}

        {viewMode === ListViewMode.VERBOSE && (
          <p className="text-gray-600">{post.subHeading}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-2">
          <TagDisplay tags={post.tags} />
        </div>
      </Link>
    </Card>
  );
};