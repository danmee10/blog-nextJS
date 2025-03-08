import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostData {
  name: string;
  contentHtml: string;
}

const FsFileNotFoundErrorCode = "ENOENT";

export async function getItemDataByName({
  name,
  dir,
}: {
  name: string;
  dir: string;
}): Promise<PostData | null> {
  try {
    const fileContents = fs.readFileSync(
      `${dir}/${name}.md`,
      "utf8"
    );

    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      name,
      contentHtml,
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === FsFileNotFoundErrorCode) {
      return null;
    } else {
      throw error;
    }
  }
}
