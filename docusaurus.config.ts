const prismThemes = require('prism-react-renderer').themes;

const config = {
  title: 'AVStudio Docs',
  tagline: 'Documentation and Knowledge Base',
  favicon: 'img/favicon.ico',

  url: 'https://avgator.github.io',
  baseUrl: '/avstudio-docs/',
  organizationName: 'avgator',
  projectName: 'avstudio-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'), // Ensure the file is renamed to sidebars.ts
          // editUrl: 'https://github.com/avgator/avstudio-docs/tree/main/',
          routeBasePath: '/',
          tagsBasePath: '/tags',
          path: 'docs',
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sidebarItems;
          },
        },
        blog:  {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          //editUrl: 'https://github.com/avgator/avstudio-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'AVStudio Docs',
      logo: {
        alt: 'AVStudio Logo',
        src: 'img/400x200_AVstudio_LOGO.avif',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'knowledgeBaseSidebar',
          position: 'left',
          label: 'Knowledge Base',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://avstudio.app',
          label: 'Open AVstudio',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: 'avstudio-about',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/avgator/avstudio-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AVStudio Documentation.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  },

  
};

module.exports = config;