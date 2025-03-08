"use client";

import { useState } from "react";
import { ListViewMode } from "../lib/types/ListViewMode";
import { Tag } from "../data/tags";
import { projects } from "../data/projects";
import { SearchBar } from "../lib/components/SearchBar";
import { ListViewModeSelect } from "../lib/components/ListViewModeSelect";
import { TagSelect } from "../lib/components/TagSelect";
import { ListItem } from "../lib/components/ListItem";

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<ListViewMode>(ListViewMode.VERBOSE);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesSearchTerm =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      );

    const matchesSelectedTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => project.tags.includes(tag));

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
        {filteredProjects.map((project) => (
          <ListItem key={project.id} item={project} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
}
