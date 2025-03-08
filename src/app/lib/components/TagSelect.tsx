"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { tagCategories, Tag } from "../../data/tags";

interface TagSelectProps {
  selectedTags: Tag[];
  setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

export const TagSelect = ({
  selectedTags,
  setSelectedTags,
}: TagSelectProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleTag = (tag: Tag) => {
    setSelectedTags((prev: Tag[]) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="w-full border-b border-gray-300 pb-2 mb-4">
      <button
        className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Hide Filters" : "Filter by Tags"}
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {!expanded && selectedTags.length > 0 && (
        <div className="inline-flex flex-wrap gap-2 text-sm ml-2">
          {selectedTags.map((tag) => (
            <span
              key={tag}
              className="flex items-center bg-gray-200 text-gray-700 px-2 py-0.5 rounded-md"
            >
              {tag}
              <button className="ml-1" onClick={() => toggleTag(tag)}>
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      )}

      {expanded && (
        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
          {Object.entries(tagCategories).map(([category, tags]) => (
            <div key={category}>
              <p className="font-semibold text-gray-900 text-lg">{category}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className={`px-2 py-0.5 border rounded-md ${
                      selectedTags.includes(tag)
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white border-gray-300 text-gray-700"
                    } hover:bg-blue-400 hover:text-white transition`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};