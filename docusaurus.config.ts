const prismThemes = require('prism-react-renderer').themes;

const config = {
  title: 'AVStudio Docs',
  tagline: 'Documentation and Knowledge Base',
  favicon: 'img/favicon.ico',

  // SEO-optimized metadata
  url: 'https://docs.avgator.com',
  baseUrl: '/avstudio-docs/',
  organizationName: 'AVgator Inc.',
  projectName: 'avstudio-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // SEO metadata configuration
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Comprehensive documentation and knowledge base for AVgator Studio (AVstudio) - Your HTML5 WYSIWYG GUI Editor for control systems like Crestron',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'AVStudio, documentation, HTML5, WYSIWYG, GUI, editor, control systems, Crestron One, knowledge base, AVgator',
      },
    },
  ],

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
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
          tagsBasePath: '/tags',
          path: 'docs',
          remarkPlugins: [
            require('remark-math'),
            [require('remark-gfm'), {}]
          ],
          rehypePlugins: [
            require('rehype-katex')
          ],
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sidebarItems;
          },
          // SEO Optimizations for docs
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Add structured data
          metadata: {
            property: 'og:type',
            content: 'website',
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Enhanced sitemap configuration
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/search/**', '/page/**'],
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

  // Enhanced theme configuration with SEO metadata
  themeConfig: {
    metadata: [
      {name: 'og:title', content: 'AVStudio Documentation'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'robots', content: 'index, follow'},
    ],
    navbar: {
      title: 'AVStudio Docs',
      logo: {
        alt: 'AVStudio Logo',
        src: 'img/400x200_AVstudio_LOGO.avif',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aboutSidebar',
          position: 'left',
          label: 'About',
        },
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
              to: 'about',
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

  // Add plugins for SEO optimization
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
      },
    ],
  ],
};

module.exports = config;