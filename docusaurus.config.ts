const prismThemes = require('prism-react-renderer').themes;

const config = {
  title: 'AVStudio Docs',
  tagline: 'Documentation and Knowledge Base',
  favicon: 'img/favicon.ico',

  // Enhanced metadata for better SEO 
  url: 'https://docs.avstudio.app',
  baseUrl: '/avstudio-docs/',
  organizationName: 'AVstudio Inc.',
  projectName: 'avstudio-docs',

  // ✅ Force trailing slashes everywhere (critical for sitemap)
  trailingSlash: true,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
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
          remarkPlugins: [require('remark-math'), [require('remark-gfm'), {}]],
          rehypePlugins: [require('rehype-katex')],
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sidebarItems;
          },
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/avgator/avstudio-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            copyright: `Copyright © ${new Date().getFullYear()} AVstudio Inc.`,
            language: 'en',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

        // ✅ Enhanced sitemap configuration with trailing slash logic
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [
            '/tags/**',
            '/search/**',
            '/page/**',
            '/**/LICENSE.md',
            '/**/CHANGELOG.md',
          ],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);

            // ✅ Add trailing slashes and adjust priorities
            return items
              .filter((item) => !item.url.includes('/page/'))
              .map((item) => {
                let fixedUrl = item.url;
                if (!fixedUrl.endsWith('/')) {
                  fixedUrl += '/';
                }
                return {
                  ...item,
                  url: fixedUrl,
                  priority: item.url === '/' ? 1.0 : 0.8,
                };
              });
          },
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'author', content: 'AVstudio Inc.' },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
    ],
    navbar: {
      title: 'AVstudio Docs',
      logo: {
        alt: 'AVstudio Logo',
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
          sidebarId: 'showcaseSidebar',
          position: 'left',
          label: 'Showcase',
        },
        {
          label: 'Documentation',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'avstudioEditorSidebar',
              label: 'AVstudio Editor',
            },
            {
              type: 'docSidebar',
              sidebarId: 'appContainerSidebar',
              label: 'App Container',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'knowledgeBaseSidebar',
          position: 'left',
          label: 'Knowledge Base',
        },
        { type: 'search', position: 'right' },
        { href: 'https://avstudio.app', label: 'Open AVstudio', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [{ label: 'HTML5 UI Showcase', to: 'showcase' }],
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
      copyright: `Copyright © 2022 - ${new Date().getFullYear()} AVstudio Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
  },

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-4HP0VV8V2Z',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      { quality: 70, max: 1030, min: 640, steps: 2, disableInDev: false },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          if (existingPath.includes('/docs/avstudio-editor/')) {
            return [
              existingPath.replace(
                '/docs/avstudio-editor/',
                '/docs/documentation/'
              ),
            ];
          }
          return [];
        },
      },
    ],
  ],

  scripts: [
    { src: '/avstudio-docs/js/zoho-init.js', defer: true },
    {
      src: 'https://salesiq.zohopublic.com/widget?wc=siq1a525445dedc30bf13ef0981eea4ecf87904b7c2772b4823e47b7b97ca15bf4c',
      defer: true,
    },
  ],
};

module.exports = config;