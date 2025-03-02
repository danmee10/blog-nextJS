import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./data/blogPosts";
import TagDisplay from "./TagDisplay";
import fs from "fs";
import path from "path";

export default function FeaturedBlogPosts() {
  const featuredBlogPosts = blogPosts
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <>
      <h3 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">
        Blog Posts
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {featuredBlogPosts.map(({ id, heading, image, tags }) => {
          const imagePath = path.join(process.cwd(), "public", image);
          const hasImage = fs.existsSync(imagePath);

          return (
            <div
              key={id}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transition hover:shadow-xl"
            >
              <Link
                href={`/blog/post?id=${id}`}
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                {hasImage ? (
                  <Image
                    src={image}
                    alt={heading}
                    width={200}
                    height={120}
                    className="rounded-md mb-3"
                  />
                ) : (
                  <div className="mb-3">
                    <TagDisplay tags={tags} />
                  </div>
                )}
              </Link>
              <Link
                href={`/blog/post?id=${id}`}
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                {heading}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
