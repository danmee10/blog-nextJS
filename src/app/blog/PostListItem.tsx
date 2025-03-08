import Link from "next/link";
import { Card } from "../lib/components/Card";
import { ListViewMode } from "../lib/types/ListViewMode";
import { BlogPost } from "../data/blogPosts";

interface PostListItemProps {
  post: BlogPost;
  viewMode: ListViewMode;
}

export const PostListItem = ({ post, viewMode }: PostListItemProps) => {
  return (
    <Card className="p-4">
      <Link key={post.id} href={`/blog/${post.name}`}>
        {viewMode !== ListViewMode.CONDENSED && (
          <h2 className="text-lg font-semibold">{post.heading}</h2>
        )}
        {viewMode === ListViewMode.VERBOSE && (
          <p className="text-gray-600">{post.subHeading}</p>
        )}
        {viewMode === ListViewMode.STANDARD && (
          <p className="text-gray-600">{post.heading}</p>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-900 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </Card>
  );
};
