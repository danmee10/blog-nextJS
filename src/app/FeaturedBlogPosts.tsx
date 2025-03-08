import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./data/blogPosts";
import { TagDisplay } from "./TagDisplay";
import fs from "fs";
import path from "path";

export function FeaturedBlogPosts() {
  const featuredBlogPosts = blogPosts
    .filter(({ image }) => {
      const imagePath = path.join(process.cwd(), "public", image);
      return fs.existsSync(imagePath);
    })
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <>
      <h3 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">
        Blog Posts
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {featuredBlogPosts.map(({ name, heading, image }) => {
          return (
            <div
              key={name}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transition hover:shadow-xl"
            >
              <Link
                href={`/blog/${name}`}
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                <Image
                  src={image}
                  alt={heading}
                  width={200}
                  height={120}
                  className="rounded-md mb-3"
                />
              </Link>
              <Link
                href={`/blog/${name}`}
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
