import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  // Calculate estimated reading time of a Markdown document and add it to the frontmatter of the file.
  return function (tree, file) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string (e.g., "3 min read")
    if (file.data.astro) {
      file.data.astro.frontmatter = {
        ...file.data.astro.frontmatter,
        minutesRead: readingTime.text
      };
    }
  };
}