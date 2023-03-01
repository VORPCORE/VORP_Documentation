import { getSidebar } from "vitepress-plugin-auto-sidebar";

export default {
  base: "/vorp_documentation/",
  title: "VORPCore",
  description: "VORPCore Documentation",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: "/logo.png",
    editLink: {
      pattern: "https://github.com/vorpcore/vorp_documentation/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    siteTitle: "VORPCore",
    outline: "deep",
    nav: [
      { text: "Setup Guide", link: "/guide" },
      { text: "Docs", link: "/api" },
      { text: "Team", link: "/team" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/VORPCORE" },
      { icon: "discord", link: "https://discord.gg/xhJRGhQFRr" },
    ],
    sidebar: {
      "/api/": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api"],
        collapsible: true,
        collapsed: false,
      }),
      "/api": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api"],
        collapsible: true,
        collapsed: false,
      }),
    },
    footer: {
      message: "Released under the GNU General Public License v2.0.",
      copyright: "Copyright © 2022-present VORPCore",
    },
  },
};
