import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://avanishd-3.github.io/",
    title: "Av Blog",
    description: "My personal blog",
    author: "Avanish Davuluri",
    profile: "https://avanishd-3.github.io/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/Los_Angeles",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true, // show back button in post detail
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/avanishd-3" },
    { name: "linkedin", url: "https://www.linkedin.com/in/avanish-davuluri-710a422a7/" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "bluesky", url: "https://bsky.app/intent/post?text=" },
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
  ],
});