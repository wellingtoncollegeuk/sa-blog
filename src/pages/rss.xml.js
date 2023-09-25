import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "Students Association | Wellington College, Berkshire",
    description: "Students Association at Wellington College, Berkshire",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**/*.md"),
  });
