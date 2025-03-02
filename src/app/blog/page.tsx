import { useState } from "react";
import { Input } from "../shared/components/Input";
import { Button } from "../shared/components/Button";
import { Card } from "../shared/components/Card";
import { List, Grid, AlignJustify } from "lucide-react";

export default function BlogPage() {
  const [viewMode, setViewMode] = useState("standard");
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Search Bar & View Toggle */}
      <div className="flex justify-between items-center mb-4">
        <Input
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

      {/* Blog Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="p-4">
            {viewMode !== "condensed" && (
              <h2 className="text-lg font-semibold">{post.title}</h2>
            )}
            {viewMode === "verbose" && (
              <p className="text-gray-600">{post.content}</p>
            )}
            {viewMode === "standard" && (
              <p className="text-gray-600">{post.excerpt}</p>
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
        ))}
      </div>
    </div>
  );
}
