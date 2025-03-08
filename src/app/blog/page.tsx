"use client";

import { useState } from "react";
import { blogPosts } from "../data/blogPosts";
import { SearchBar } from "../lib/components/SearchBar";
import { ListViewMode } from "../lib/types/ListViewMode";
import { ListViewModeSelect } from "../lib/components/ListViewModeSelect";
import { PostListItem } from "./PostListItem";
import { TagSelect } from "../lib/components/TagSelect";
import { Tag } from "../data/tags";

export default function BlogPage() {
  const [viewMode, setViewMode] = useState<ListViewMode>(ListViewMode.STANDARD);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearchTerm =
      post.heading.toLowerCase().includes(search.toLowerCase()) ||
      post.subHeading.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

    const matchesSelectedTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => post.tags.includes(tag));

    return matchesSearchTerm && matchesSelectedTags;
  });

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <SearchBar
            search={search}
            setSearch={setSearch}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
          <ListViewModeSelect viewMode={viewMode} setViewMode={setViewMode} />
        </div>
        <TagSelect
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      </div>

      <div
        className={`${
          viewMode === ListViewMode.VERBOSE
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            : "space-y-4"
        }`}
      >
        {filteredPosts.map((post) => (
          <PostListItem key={post.id} post={post} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
}
