import { Tag } from "@/app/data/tags";
import { Item } from "../types/Item";

interface SearchItemsInput {
  items: Item[];
  search: string;
  selectedTags: Tag[];
}
export const searchItems = ({
  items,
  search,
  selectedTags,
}: SearchItemsInput): Item[] => {
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
