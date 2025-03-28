import { Searchable } from "../types/Searchable";
import { searchItems } from "./searchItems";

describe("searchItems", () => {
  const items: Searchable[] = [
    {
      name: "Post One",
      description: "This is the first post",
      tags: ["tag1", "tag2"],
    },
    {
      name: "Post Two",
      description: "This is the second post",
      tags: ["tag2", "tag3"],
    },
    {
      name: "Post Three",
      description: "Another post about coding",
      tags: ["tag1", "tag3"],
    },
  ];

  it("should return all items when search term and selected tags are empty", () => {
    const result = searchItems({
      items,
      search: "",
      selectedTags: [],
    });
    expect(result).toEqual(items);
  });

  it("should filter items by search term in name, description, or tags", () => {
    const result = searchItems({
      items,
      search: "first",
      selectedTags: [],
    });
    expect(result).toEqual([items[0]]);
  });

  it("should filter items by selected tags", () => {
    const result = searchItems({
      items,
      search: "",
      selectedTags: ["tag1"],
    });
    expect(result).toEqual([items[0], items[2]]);
  });

  it("should filter items by both search term and selected tags", () => {
    const result = searchItems({
      items,
      search: "post",
      selectedTags: ["tag3"],
    });
    expect(result).toEqual([items[1], items[2]]);
  });

  it("should return an empty array if no items match the search term and selected tags", () => {
    const result = searchItems({
      items,
      search: "nonexistent",
      selectedTags: ["tag4"],
    });
    expect(result).toEqual([]);
  });

  it("should match selected tags exactly", () => {
    const result = searchItems({
      items,
      search: "",
      selectedTags: ["tag2", "tag3"],
    });
    expect(result).toEqual([items[1]]);
  });
});