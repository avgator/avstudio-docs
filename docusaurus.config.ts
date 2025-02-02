const prismThemes = require('prism-react-renderer').themes;

const config = {
  title: 'AVStudio Docs',
  tagline: 'Documentation and Knowledge Base',
  favicon: 'img/favicon.ico',

  // Enhanced metadata for better SEO 
  url: 'https://docs.avstudio.app',
  baseUrl: '/',
  organizationName: 'AVgator Inc.',
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
          // Enhanced SEO Optimizations for docs
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/avgator/avstudio-docs/edit/main/', // Add this for better UX and SEO
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            copyright: `Copyright © ${new Date().getFullYear()} AVgator Inc.`,
            language: 'en',
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
          ignorePatterns: [
            '/tags/**',
            '/search/**',
            '/page/**',
            '/**/LICENSE.md',
            '/**/CHANGELOG.md'
          ],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items
              .filter((item) => !item.url.includes('/page/'))
              .map((item) => ({
                ...item,
                priority: item.url === '/' ? 1.0 : 0.8 // Prioritize homepage and main sections
              }));
          },
        },
      },
    ],
  ],

  themeConfig: {
    // Enhanced SEO metadata
    metadata: [
      {name: 'description', content: 'Comprehensive documentation and knowledge base for AVgator Studio (AVStudio) - Your HTML5 WYSIWYG GUI Editor for control systems like Crestron'},
      {name: 'keywords', content: 'AVStudio, documentation, audio-visual, knowledge base, AVgator, Crestron One, HTML5, WYSIWYG, GUI, editor'},
      {name: 'og:title', content: 'AVStudio Documentation'},
      {name: 'og:type', content: 'website'},
      {name: 'og:description', content: 'Comprehensive documentation and knowledge base for AVgator Studio (AVStudio) - Your HTML5 WYSIWYG GUI Editor for control systems like Crestron'},
      {name: 'og:image', content: 'https://docs.avstudio.app/img/400x200_AVstudio_LOGO.avif'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'AVStudio Documentation'},
      {name: 'twitter:description', content: 'Your HTML5 WYSIWYG GUI Editor for control systems like Crestron'},
      {name: 'robots', content: 'index, follow, max-image-preview:large'},
      {name: 'author', content: 'AVgator Inc.'},
      {name: 'language', content: 'English'}
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
          sidebarId: 'showcaseSidebar',
          position: 'left',
          label: 'Showcase',
        },
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
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
              label: 'HTML5 UI Showcase',
              to: 'showcase',
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

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-8S2KS09YKE',
        anonymizeIP: true, // Should be enabled for GDPR compliance
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config;