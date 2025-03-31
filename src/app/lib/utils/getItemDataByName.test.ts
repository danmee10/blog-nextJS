import fs from "fs";
import { getItemDataByName } from "./getItemDataByName"; // Adjust the import path as needed

const mockedFs = fs as jest.Mocked<typeof fs>;

describe("getItemDataByName", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return PostData when the file exists", async () => {
    const fakeMarkdown = `---
title: "Test Post"
---
# Hello World`;

    mockedFs.readFileSync.mockImplementation(() => fakeMarkdown);

    const result = await getItemDataByName({ name: "test", dir: "/fakeDir" });
    expect(result).not.toBeNull();
    expect(result?.name).toBe("test");
    expect(result?.contentHtml).toMatch(/<h1.*?>Hello World<\/h1>/);
  });

  it("should return null when the file is not found (ENOENT)", async () => {
    const error: NodeJS.ErrnoException = new Error("File not found");
    error.code = "ENOENT";

    mockedFs.readFileSync.mockImplementation(() => {
      throw error;
    });

    const result = await getItemDataByName({ name: "notfound", dir: "/fakeDir" });
    expect(result).toBeNull();
  });

  it("should rethrow error for errors other than ENOENT", async () => {
    const error: NodeJS.ErrnoException = new Error("Permission denied");
    error.code = "EACCES";

    mockedFs.readFileSync.mockImplementation(() => {
      throw error;
    });

    await expect(
      getItemDataByName({ name: "test", dir: "/fakeDir" })
    ).rejects.toThrow("Permission denied");
  });
});