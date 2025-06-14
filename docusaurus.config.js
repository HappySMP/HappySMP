// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HappySMP Staff wiki",
  tagline: "Staff wiki for the HappySMP server",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://happysmp.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "HappySMP", // Usually your GitHub org/user name.
  projectName: "HappySMP", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/HappySMP/HappySMP/edit/master/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/HappySMP/HappySMP/edit/master/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/banner.png",
      navbar: {
        title: "HappySMP",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "general",
            position: "left",
            label: "⭐ General",
          },
          {
            type: "docSidebar",
            sidebarId: "rank",
            position: "left",
            label: "⚒️ Ranks & Commands",
          },
          {
            type: "docSidebar",
            sidebarId: "policies",
            position: "left",
            label: "⚖️ Policies",
          },
          {
            type: "docSidebar",
            sidebarId: "moderation",
            position: "left",
            label: "📜 Moderation",
          },
          {
            href: "https://happysmp.net/bugs",
            label: "Bug tracker",
            position: "right",
          },
          {
            href: "https://discord.gg/happysmp",
            label: "Discord",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "dark", // default to dark mode
        disableSwitch: false, // allow users to switch between dark/light mode
        respectPrefersColorScheme: false, // respects the user's OS/browser preference
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Home",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/happysmp",
              },
              {
                label: "Bug tracker",
                href: "https://happysmp.net/bugs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HappySMP.`,
      },
      prism: {
        theme: prismThemes.duotoneDark,
        darkTheme: prismThemes.duotoneDark,
      },
    }),
};

export default config;
