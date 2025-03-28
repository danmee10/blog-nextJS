import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./data/blogPosts";
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
      <h3 className="mb-6 border-b-2 border-gray-300 pb-2 text-3xl font-bold">
        Blog Posts
      </h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
        {featuredBlogPosts.map(({ name, image, slug }) => (
          <div
            key={name}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition hover:shadow-xl"
          >
            <Link
              href={`/blog-posts/${slug}`}
              className="hover:underline text-lg font-medium text-blue-600"
            >
              <Image
                src={image}
                alt={name}
                width={200}
                height={120}
                className="mb-3 rounded-md"
              />
            </Link>
            <Link
              href={`/blog/${name}`}
              className="hover:underline text-lg font-medium text-blue-600"
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}