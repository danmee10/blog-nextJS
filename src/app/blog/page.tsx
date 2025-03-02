"use client";

import { useState } from "react";
import { Button } from "../shared/components/Button";
import { Card } from "../shared/components/Card";
import { List, Grid, AlignJustify, Link } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
  const [viewMode, setViewMode] = useState("standard");
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
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md"
        />
        <div className="flex gap-2">
          <Button
            variant={viewMode === "verbose" ? "default" : "outline"}
            onClick={() => setViewMode("verbose")}
          >
            <AlignJustify size={18} />
          </Button>
          <Button
            variant={viewMode === "standard" ? "default" : "outline"}
            onClick={() => setViewMode("standard")}
          >
            <Grid size={18} />
          </Button>
          <Button
            variant={viewMode === "condensed" ? "default" : "outline"}
            onClick={() => setViewMode("condensed")}
          >
            <List size={18} />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card key={post.id} className="p-4">
              {viewMode !== "condensed" && (
                <h2 className="text-lg font-semibold">{post.heading}</h2>
              )}
              {viewMode === "verbose" && (
                <p className="text-gray-600">{post.subHeading}</p>
              )}
              {viewMode === "standard" && (
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
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
