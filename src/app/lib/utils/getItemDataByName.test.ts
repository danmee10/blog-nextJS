import { describe, it, expect, vi, afterEach } from "vitest";
import fs from "fs";
import matter from "gray-matter";
import { getItemDataByName } from "./getItemDataByName";

const readFileSyncSpy = vi.spyOn(fs, "readFileSync");

vi.mock("gray-matter", () => ({
  default: vi.fn(),
}));
const matterMock = vi.mocked(matter, true);

describe("getItemDataByName", () => {
  const dir = "/test-dir";
  const name = "test-post";

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should return post data when file exists and content is valid markdown", async () => {
    const fileContent = `---
title: Test Post
---
This is test content.`;

    readFileSyncSpy.mockReturnValue(fileContent);
    matterMock.mockReturnValue({
      content: "This is test content.",
    } as matter.GrayMatterFile<matter.Input>);

    const result = await getItemDataByName({ name, dir });

    expect(result).not.toBeNull();
    expect(result?.name).toBe(name);
    expect(result?.contentHtml).toContain("<p>This is test content.</p>");
  });

  it("should return null if file is not found (ENOENT error)", async () => {
    const error = new Error("File not found") as NodeJS.ErrnoException;
    error.code = "ENOENT";

    readFileSyncSpy.mockImplementation(() => {
      throw error;
    });

    const result = await getItemDataByName({ name, dir });
    expect(result).toBeNull();
  });

  it("should throw error for non ENOENT errors", async () => {
    const error = new Error("Unexpected error") as NodeJS.ErrnoException;
    error.code = "EOTHER";

    readFileSyncSpy.mockImplementation(() => {
      throw error;
    });

    await expect(getItemDataByName({ name, dir })).rejects.toThrow(
      "Unexpected error"
    );
  });
});
