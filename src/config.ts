export const SITE = {
  website: "https://avanishd-3.github.io/",
  author: "Avanish Davuluri",
  profile: "https://avanishd-3.github.io/",
  desc: "My personal blog",
  title: "Av Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/avanishd-3/avanishd-3.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Los_Angeles", // My time zone
} as const;
