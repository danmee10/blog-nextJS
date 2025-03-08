"use client";

import { useState } from "react";
import { blogPosts } from "../data/blogPosts";
import { SearchBar } from "../lib/components/SearchBar";
import { ListViewMode } from "../lib/types/ListViewMode";
import { ListViewModeSelect } from "../lib/components/ListViewModeSelect";
import { PostListItem } from "./PostListItem";

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
          <PostListItem key={post.id} post={post} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
}
