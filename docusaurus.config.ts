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
            copyright: `Copyright © ${new Date().getFullYear()} AVstudio Inc.`,
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
      {name: 'description', content: 'Comprehensive documentation and knowledge base for AVstudio (avstudio.app) - Your HTML5 WYSIWYG GUI Editor for control systems like Crestron'},
      {name: 'keywords', content: 'AVstudio, documentation, audio-visual, knowledge base, AVgator, Crestron One, HTML5, WYSIWYG, GUI, editor'},
      {name: 'og:title', content: 'AVstudio Documentation'},
      {name: 'og:type', content: 'website'},
      {name: 'og:description', content: 'Comprehensive documentation and knowledge base for AVstudio (avstudio.app) - Your HTML5 WYSIWYG GUI Editor for control systems like Crestron'},
      {name: 'og:image', content: 'https://docs.avstudio.app/avstudio-docs/img/400x200_AVstudio_LOGO.avif'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'AVstudio Documentation'},
      {name: 'twitter:description', content: 'Your HTML5 WYSIWYG GUI Editor for control systems like Crestron'},
      {name: 'robots', content: 'index, follow, max-image-preview:large'},
      {name: 'author', content: 'AVstudio Inc.'},
      {name: 'language', content: 'English'}
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
          type: 'docSidebar',
          sidebarId: 'avstudioEditorSidebar',
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
      copyright: `Copyright © 2022 - ${new Date().getFullYear()} AVstudio Inc.`,
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
        trackingID: 'G-4HP0VV8V2Z',
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
    [
    '@docusaurus/plugin-client-redirects',
    {
      createRedirects(existingPath) {
        // Automatically redirect any path containing /docs/avstudio-editor/
        // from its old equivalent /docs/documentation/
        if (existingPath.includes('/docs/avstudio-editor/')) {
          return [
            existingPath.replace('/docs/avstudio-editor/', '/docs/documentation/'),
          ];
        }
        return [];
      },
    },
  ],
  ],
scripts: [
  {
    src: '/avstudio-docs/js/zoho-init.js',
    defer: true,
  },
  {
    src: 'https://salesiq.zohopublic.com/widget?wc=siq1a525445dedc30bf13ef0981eea4ecf87904b7c2772b4823e47b7b97ca15bf4c',
    defer: true,
  },
],
};

module.exports = config;
