# My Website

Personal website.

## 🚀 Project Structure

```bash
/
├── public/
│   ├── assets/
|   ├── pagefind/ # auto-generated when build
│   └── favicon.svg
│   └── astropaper-og.jpg
│   └── favicon.svg
│   └── toggle-theme.js
├── src/
│   ├── assets/
│   │   └── icons/
│   │   └── images/
│   ├── components/
│   ├── data/
│   │   └── blog/
│   │       └── some-blog-posts.md
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── utils/
│   └── config.ts
│   └── constants.ts
│   └── content.config.ts
└── astro.config.ts
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

All blog posts are stored in `src/data/blog` directory.

## 📖 Documentation

Using Astro Paper v5.5.0

### Adding Posts

To write a new blog post, create a markdown file inside the `src/data/blog/` directory. You can organize blog posts into subdirectories, making it easier to manage content.

For example, if you want to group posts under `2025`, you can place them in `src/data/blog/2025/`. This also affects the post URL, so `src/data/blog/2025/example-post.md` will be available at `/posts/2025/example-post`.

If you don’t want subdirectories to affect the post URL, just prefix the folder name with an underscore `_`.

```bash
# Example: blog post structure and URLs
src/data/blog/very-first-post.md          -> mysite.com/posts/very-first-post
src/data/blog/2025/example-post.md        -> mysite.com/posts/2025/example-post
src/data/blog/_2026/another-post.md       -> mysite.com/posts/another-post
src/data/blog/docs/_legacy/how-to.md      -> mysite.com/posts/docs/how-to
src/data/blog/Example Dir/Dummy Post.md   -> mysite.com/posts/example-dir/dummy-post
```

> 💡 Tip: You can override a blog post’s slug in the frontmatter as well. See the next section for more details.

If the subdirectory URL doesn’t appear in the build output, remove node_modules, reinstall packages, and then rebuild.

#### Frontmatter

Frontmatter is the main place to store some important information about the blog post (article). Frontmatter lies at the top of the article and is written in YAML format. Read more about frontmatter and its usage in [astro documentation](https://docs.astro.build/en/guides/markdown-content/).

Here is the list of frontmatter properties for each post.

| Property           | Description                                                                                                                           | Remark                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **_title_**        | Title of the post. (h1)                                                                                                               | required<sup>\*</sup>                          |
| **_description_**  | Description of the post. Used in post excerpt and site description of the post.                                                       | required<sup>\*</sup>                          |
| **_pubDatetime_**  | Published datetime in ISO 8601 format.                                                                                                | required<sup>\*</sup>                          |
| **_modDatetime_**  | Modified datetime in ISO 8601 format. (only add this property when a blog post is modified)                                           | optional                                       |
| **_author_**       | Author of the post.                                                                                                                   | default = SITE.author                          |
| **_slug_**         | Slug for the post. This field is optional.                                                                                            | default = slugified file name                  |
| **_featured_**     | Whether or not display this post in featured section of home page                                                                     | default = false                                |
| **_draft_**        | Mark this post 'unpublished'.                                                                                                         | default = false                                |
| **_tags_**         | Related keywords for this post. Written in array yaml format.                                                                         | default = others                               |
| **_ogImage_**      | OG image of the post. Useful for social media sharing and SEO. This can be a remote URL or an image path relative to current folder.  | default = `SITE.ogImage` or generated OG image |
| **_canonicalURL_** | Canonical URL (absolute), in case the article already exists on other source.                                                         | default = `Astro.site` + `Astro.url.pathname`  |
| **_hideEditPost_** | Hide editPost button under blog title. This applies only to the current blog post.                                                    | default = false                                |
| **_timezone_**     | Specify a timezone in IANA format for the current blog post. This will override the `SITE.timezone` config for the current blog post. | default = `SITE.timezone`                      |

> Tip! You can get ISO 8601 datetime by running `new Date().toISOString()` in the console. Make sure you remove quotes though.

Only `title`, `description` and `pubDatetime` fields in frontmatter must be specified.

`slug` is the unique identifier of the url. Thus, `slug` must be unique and different from other posts. The whitespace of `slug` should to be separated with `-` or `_` but `-` is recommended. Slug is automatically generated using the blog post file name. However, you can define your `slug` as a frontmatter in your blog post.

For example, if the blog file name is `adding-new-post.md` and you don't specify the slug in your frontmatter, Astro will automatically create a slug for the blog post using the file name. Thus, the slug will be `adding-new-post`. But if you specify the `slug` in the frontmatter, this will override the default slug. You can read more about this in [Astro Docs](https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs).

If you omit `tags` in a blog post (in other words, if no tag is specified), the default tag `others` will be used as a tag for that post. You can set the default tag in the `content.config.ts` file.

```ts file="src/content.config.ts"
export const blogSchema = z.object({
  // ...
  draft: z.boolean().optional(),
  // [!code highlight:1]
  tags: z.array(z.string()).default(["others"]), // replace "others" with whatever you want
  // ...
});
```

#### Sample Frontmatter

Here is the sample frontmatter for a post.

```yaml file="src/data/blog/sample-post.md"
---
title: The title of the post
author: your name
pubDatetime: 2022-09-21T05:17:19Z
slug: the-title-of-the-post
featured: true
draft: false
tags:
  - some
  - example
  - tags
ogImage: ../../assets/images/example.png # src/assets/images/example.png
# ogImage: "https://example.org/remote-image.png" # remote URL
description: This is the example description of the example post.
canonicalURL: https://example.org/my-article-was-already-posted-here
---
```

#### Adding Table of Contents

Write `Table of contents` in h2 format (## in markdown) and place it where you want it to be appeared on the post.

Ex: Placing your table of contents just under the intro paragraph

<!-- prettier-ignore-start -->
```md
---
# frontmatter
---

Here are some recommendations, tips & ticks for creating new posts.

<!-- [!code ++] -->
## Table of contents

<!-- the rest of the post -->
```
<!-- prettier-ignore-end -->

#### Headings
The blog posts use the title (specified in frontmatter) as h1. So, the rest of the headings in the post should be h2 \~ h6.

### Syntax Highlighting
[Shiki](https://shiki.style/) is the default syntax highlighting. [@shikijs/transformers](https://shiki.style/packages/transformers) is used to enhance better fenced code blocks. If you don't want to use it, you can simply remove it like this

```bash
pnpm remove @shikijs/transformers
```

```js file="astro.config.ts"
// ...
// [!code --:5]
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";

export default defineConfig({
  // ...
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName(),
      // [!code --:3]
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  // ...
}
```

#### Images
> Note! If it's a requirement to style optimized images in markdown you should [use MDX](https://docs.astro.build/en/guides/images/#images-in-mdx-files).

Put images inside src/assets/directory. 

Use relative path or alias path (`@/assets/`) to serve these images.

Example: Suppose you want to display `example.jpg` whose path is `/src/assets/images/example.jpg`.

```md
![something](@/assets/images/example.jpg)

<!-- OR -->

![something](../../assets/images/example.jpg)

<!-- Using img tag or Image component won't work ❌ -->
<img src="@/assets/images/example.jpg" alt="something">
<!-- ^^ This is wrong -->
```

#### OG Image
For posts that don't include OG images in the frontmatter and are not marked as drafts, [Satori](https://github.com/vercel/satori) will be used to dynamically generate OG images. The dynamic image will be blog post title, author name, site title. Author name and site title will be retrieved via SITE.author and SITE.title of “src/config.ts” file. The title is generated from the blog post frontmatter title.


If including an OG image, specify it in the frontmatter. The recommended size for it is 1200 x 640 px.

### Styling

Modify global.css file.

| Color Property     | Definition and Usage                                                           |
| ------------------ | ------------------------------------------------------------------------------ |
| --background       | Primary color of the website. Usually the main background.                     |
| --foreground       | Secondary color of the website. Usually the text color.                        |
| --accent	<br>	<br> | Accent color of the website. Link color, hover color, post title cover, etc... |
| --muted            | Card and scrollbar background color for hover state, highlighted text, etc...  |
| --border           | Border color. Especially used in horizontal rows (hr)                           |


## 💻 Tech Stack

**Main Framework** - [Astro](https://astro.build/)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Styling** - [TailwindCSS](https://tailwindcss.com/)  
**Static Search** - [FuseJS](https://pagefind.app/)  
**Icons** - [Tablers](https://tabler-icons.io/)  
**Code Formatting** - [Prettier](https://prettier.io/)  
**Deployment** - [Github Pages](https://docs.github.com/en/pages)  
**Illustration in About Page** - [https://freesvgillustration.com](https://freesvgillustration.com/)  
**Linting** - [ESLint](https://eslint.org)

## 👨🏻‍💻 Running Locally

You can start using this project locally by running the following command in your desired directory:

```bash
# pnpm
git clone https://github.com/avanishd-3/avanishd-3.github.io.git
```

Then start the project by running the following commands:

```bash
# install dependencies
pnpm install

# start running the project
pnpm run dev
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                              | Action                                                                                                                           |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`                       | Installs dependencies                                                                                                            |
| `pnpm run dev`                       | Starts local dev server at `localhost:4321`                                                                                      |
| `pnpm run build`                     | Build your production site to `./dist/`                                                                                          |
| `pnpm run preview`                   | Preview your build locally, before deploying                                                                                     |
| `pnpm run format:check`              | Check code format with Prettier                                                                                                  |
| `pnpm run format`                    | Format codes with Prettier                                                                                                       |
| `pnpm run sync`                      | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm run lint`                      | Lint with ESLint  |             

> **_Warning!_** Windows PowerShell users may need to install the [concurrently package](https://www.npmjs.com/package/concurrently) if they want to [run diagnostics](https://docs.astro.build/en/reference/cli-reference/#astro-check) during development (`astro check --watch & astro dev`). For more info, see [this issue](https://github.com/satnaing/astro-paper/issues/113).

## 📜 License

Licensed under the MIT License, Copyright © 2025

---
