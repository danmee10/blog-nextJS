"use client";

import { useState } from "react";
import { Card } from "../lib/components/Card";
import { blogPosts } from "../data/blogPosts";
import Link from "next/link";
import SearchBar from "../lib/components/SearchBar";
import { ListViewMode } from "../lib/types/ListViewMode";
import { ListViewModeSelect } from "../lib/components/ListViewModeSelect";

export default function BlogPage() {
  const [viewMode, setViewMode] = useState<ListViewMode>(ListViewMode.STANDARD);
  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.heading.toLowerCase().includes(search.toLowerCase()) ||
      post.subHeading.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <SearchBar
          search={search}
          setSearch={setSearch}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <ListViewModeSelect viewMode={viewMode} setViewMode={setViewMode} />
      </div>

      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="p-4">
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
        ))}
      </div>
    </div>
  );
}
