/**
 * Docusaurus Plugin: Tag Page Meta Descriptions
 * Automatically adds SEO meta descriptions to all tag pages
 * Place this at: plugins/tag-meta-descriptions/index.js
 */

const fs = require('fs');
const path = require('path');

module.exports = function (context, options = {}) {
  // Tag descriptions map
  const TAG_DESCRIPTIONS = {
    'javascript': 'Explore JavaScript integration and scripting capabilities in AV Studio. Learn functions and dynamic content.',
    'autonomic': 'Autonomic Mirage Media Server integration guide. Connect music streaming services in AV Studio.',
    'api': 'API integration and HTTP/HTTPS communication for AV Studio. Build custom integrations and automate tasks.',
    'crestron': 'Crestron control system integration guide for AV Studio. Set up and manage connectivity.',
    'knowledge-base': 'Knowledge base articles and integration guides for AV Studio solutions.',
    'media-player': 'Advanced media player features and controls documentation for AV Studio.',
    'streaming': 'Audio and video streaming configuration for AV Studio with third-party services.',
    'configuration': 'System configuration and settings for AV Studio projects.',
    'ui-components': 'User interface components documentation and usage guides.',
    'functions': 'Function documentation and usage in AV Studio projects.',
    'control-system': 'Control system integration setup and management.',
    'player': 'Media player component documentation and setup.',
    'setup': 'Initial setup and installation guide for AV Studio.',
    'tutorial': 'Step-by-step tutorials and how-to guides for AV Studio.',
    'howto': 'How-to guides and best practices for common tasks.',
    'reference': 'Reference documentation and specifications.',
    'getting-started': 'Get started with AV Studio. Onboarding and first steps.',
    'troubleshooting': 'Troubleshooting guide. Find solutions to common problems.',
    'interface-design': 'Interface design guidelines and UI/UX best practices.',
    'installation': 'Installation procedures and system requirements.',
    'security': 'Security features and access control documentation.',
    'automation': 'Home automation and system integration guide.',
    'dynamic-content': 'Dynamic content handling and data binding in AV Studio.',
    'http-request': 'HTTP request configuration for API integration.',
    'https': 'Secure HTTPS communication setup for AV Studio.',
    'proxy': 'Proxy configuration and network setup.',
    'polling-data': 'Data polling and real-time updates configuration.',
    'doorbird': 'DoorBird smart door system integration guide.',
    'intercom': 'Intercom system setup and management.',
    'mirage': 'Autonomic Mirage Media Server configuration.',
    'spotify': 'Spotify music streaming integration with AV Studio.',
    'tidal': 'Tidal music service integration guide.',
    'music': 'Music playback and streaming documentation.',
    'streaming-services': 'Third-party streaming service integrations.',
    '4-series': 'AV Studio 4-Series documentation and features.',
    'button': 'Button component documentation and styling guide.',
    'container': 'Container component layout and configuration.',
    'alignment': 'Alignment and responsive layout techniques.',
    'hardware': 'Hardware requirements and compatibility guide.',
    'environment': 'Environment configuration and deployment options.',
    'recovery': 'Data recovery and backup procedures.',
    'access': 'Access control and permission management.',
    'localization': 'Localization and multi-language support.',
    'internationalization': 'Internationalization (i18n) implementation guide.',
    'language-codes': 'Language codes and regional settings reference.',
    ...options.customDescriptions || {}, // Allow custom descriptions
  };

  function getTagDescription(tag) {
    if (TAG_DESCRIPTIONS[tag]) {
      return TAG_DESCRIPTIONS[tag];
    }

    // Generate fallback
    const titleCase = tag
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return `Comprehensive guide to ${titleCase.toLowerCase()} in AV Studio documentation.`;
  }

  function truncateDescription(desc, maxLength = 160) {
    if (desc.length > maxLength) {
      return desc.substring(0, maxLength - 3) + '...';
    }
    return desc;
  }

  return {
    name: 'docusaurus-plugin-tag-meta-descriptions',

    // Hook to modify page metadata
    async extendPageData(pageData) {
      // Check if this is a tag page
      const tagMatch = pageData.pathname.match(/\/tags\/([^/]+)\/?$/);
      
      if (tagMatch) {
        const tag = tagMatch[1];
        const description = getTagDescription(tag);
        const truncatedDesc = truncateDescription(description);

        // Add metadata
        pageData.metadata = pageData.metadata || {};
        pageData.metadata.description = truncatedDesc;

        // Also add to frontMatter if available
        if (!pageData.frontMatter) {
          pageData.frontMatter = {};
        }
        pageData.frontMatter.description = truncatedDesc;
      }

      return pageData;
    },

    // Hook to inject HTML head tags
    injectHtmlTags() {
      return {
        headTags: [],
        preBodyTags: [],
        postBodyTags: [],
      };
    },

    // Post-build: Check and add descriptions to HTML files
    async postBuild(props) {
      const { outDir } = props;

      // Process tag HTML files
      const tagsDir = path.join(outDir, 'docs', 'tags');
      
      if (!fs.existsSync(tagsDir)) {
        return; // No tags directory
      }

      const tagDirs = fs.readdirSync(tagsDir);

      for (const tagDir of tagDirs) {
        const indexFile = path.join(tagsDir, tagDir, 'index.html');

        if (fs.existsSync(indexFile)) {
          let htmlContent = fs.readFileSync(indexFile, 'utf-8');
          const description = getTagDescription(tagDir);
          const truncatedDesc = truncateDescription(description);

          // Check if description already exists
          if (!htmlContent.includes(`<meta name="description"`)) {
            // Add description meta tag before </head>
            const metaTag = `<meta name="description" content="${truncatedDesc.replace(/"/g, '&quot;')}">`;
            htmlContent = htmlContent.replace('</head>', `${metaTag}\n</head>`);

            // Also add og:description
            const ogTag = `<meta property="og:description" content="${truncatedDesc.replace(/"/g, '&quot;')}">`;
            htmlContent = htmlContent.replace('</head>', `${ogTag}\n</head>`);

            // Write back
            fs.writeFileSync(indexFile, htmlContent, 'utf-8');
            console.log(`✅ Added meta description to /tags/${tagDir}/`);
          }
        }
      }
    },
  };
};
