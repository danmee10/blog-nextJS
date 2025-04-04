import fs from "fs";
import matter from "gray-matter";
import { getItemDataByName } from "./getItemDataByName"; // adjust the import path as needed

// Mock the fs and gray-matter modules
jest.mock("fs");
jest.mock("gray-matter");

describe("getItemDataByName", () => {
  const dir = "/test-dir";
  const name = "test-post";

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return post data when file exists and content is valid markdown", async () => {
    // Arrange: sample markdown file with front matter and content
    const fileContent = `---
title: Test Post
---
This is test content.`;

    // Simulate fs.readFileSync returning the file content
    (fs.readFileSync as jest.Mock).mockReturnValue(fileContent);
    // Simulate gray-matter returning an object with the markdown content
    (matter as unknown as jest.Mock).mockReturnValue({
      content: "This is test content.",
    });

    // Act: call the function under test
    const result = await getItemDataByName({ name, dir });

    // Assert: verify the result contains the expected properties and HTML conversion
    expect(result).not.toBeNull();
    expect(result?.name).toBe(name);
    // remark-html wraps plain text in a paragraph tag; so we check that
    expect(result?.contentHtml).toContain("<p>This is test content.</p>");
  });

  it("should return null if file is not found (ENOENT error)", async () => {
    // Arrange: simulate a file not found error
    const error = new Error("File not found") as NodeJS.ErrnoException;
    error.code = "ENOENT";
    (fs.readFileSync as jest.Mock).mockImplementation(() => {
      throw error;
    });

    // Act: call the function under test
    const result = await getItemDataByName({ name, dir });

    // Assert: function returns null when file is missing
    expect(result).toBeNull();
  });

  it("should throw error for non ENOENT errors", async () => {
    // Arrange: simulate an error with a different code
    const error = new Error("Unexpected error") as NodeJS.ErrnoException;
    error.code = "EOTHER";
    (fs.readFileSync as jest.Mock).mockImplementation(() => {
      throw error;
    });

    // Act & Assert: the function should reject with the thrown error
    await expect(getItemDataByName({ name, dir })).rejects.toThrow(
      "Unexpected error"
    );
  });
});