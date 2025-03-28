import { Tag } from "@/app/data/tags";
import { Searchable } from "../types/Searchable";

interface SearchItemsInput<T extends Searchable> {
  items: T[];
  search: string;
  selectedTags: Tag[] | string[];
}

// Generic function that returns same type it receives
export const searchItems = <T extends Searchable>({
  items,
  search,
  selectedTags,
}: SearchItemsInput<T>): T[] => {
  return items.filter((post) => {
    const matchesSearchTerm =
      post.name.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

    const matchesSelectedTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => post.tags.includes(tag));

    return matchesSearchTerm && matchesSelectedTags;
  });
};