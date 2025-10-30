/**
 * AV Studio Docs - TagPage Component with Meta Descriptions
 * 
 * This is a swizzled (customized) version of Docusaurus's default TagPage component
 * with automatic SEO meta descriptions for each tag.
 * 
 * Installation:
 * 1. Create directory: mkdir -p src/theme/TagPage
 * 2. Copy this file to: src/theme/TagPage/index.js
 * 3. Run: npm run build
 * 
 * Features:
 * ✅ SEO meta descriptions for all tags
 * ✅ Open Graph tags for social sharing
 * ✅ Twitter card tags
 * ✅ Responsive design
 * ✅ Easy to customize
 */

import React from 'react';
import Head from '@docusaurus/Head';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';

// ============================================================================
// TAG DESCRIPTIONS - Customize these for your needs
// ============================================================================

const TAG_DESCRIPTIONS = {
  // Knowledge Base & Core
  'knowledge-base': 'Knowledge base articles and integration guides for AV Studio. Find solutions and best practices for common tasks.',
  'tutorial': 'Step-by-step tutorials for AV Studio. Learn through comprehensive guides and hands-on examples.',
  'howto': 'How-to guides and best practices. Quick solutions to common questions and use cases.',
  'reference': 'Reference documentation and specifications. Complete API and feature reference.',
  'getting-started': 'Get started with AV Studio. Setup, installation, and first steps guide for new users.',
  'troubleshooting': 'Troubleshooting guide. Find solutions to common issues and error fixes.',
  
  // JavaScript & Functions
  'javascript': 'Explore JavaScript integration and scripting capabilities in AV Studio. Learn functions, events, and dynamic content.',
  'functions': 'Function documentation and usage in AV Studio. Master scripting and automation.',
  'dynamic-content': 'Dynamic content handling and data binding in AV Studio. Learn reactive programming.',
  'polling-data': 'Data polling and real-time updates configuration for AV Studio applications.',
  
  // Media & Streaming
  'autonomic': 'Autonomic Mirage Media Server integration guide. Connect and control music streaming services.',
  'media-player': 'Advanced media player features and controls documentation for AV Studio.',
  'media-server': 'Media server integration and configuration. Setup streaming and playback.',
  'player': 'Media player component documentation and setup guide.',
  'spotify': 'Spotify music streaming integration with AV Studio. Connect and control playback.',
  'tidal': 'Tidal music service integration guide for AV Studio projects.',
  'music': 'Music playback and streaming documentation. Setup and configure audio.',
  'streaming': 'Audio and video streaming configuration for AV Studio with third-party services.',
  'streaming-services': 'Third-party streaming service integrations and setup.',
  'mirage': 'Autonomic Mirage Media Server configuration and integration.',
  
  // Control Systems & Integration
  'api': 'API integration and HTTP/HTTPS communication for AV Studio. Build custom integrations and automate tasks.',
  'control-system': 'Control system integration setup and management for AV Studio.',
  'crestron': 'Crestron control system integration guide for AV Studio. Setup and manage connectivity.',
  'doorbird': 'DoorBird smart door system integration guide for AV Studio.',
  'intercom': 'Intercom system setup and management. Configure video and audio communication.',
  'automation': 'Home automation and system integration guide for AV Studio.',
  
  // HTTP & Networking
  'http-request': 'HTTP request configuration for API integration and data exchange.',
  'https': 'Secure HTTPS communication setup for AV Studio applications.',
  'http': 'HTTP communication and API integration documentation.',
  'proxy': 'Proxy configuration and network setup for AV Studio.',
  
  // UI & Components
  'ui-components': 'User interface components documentation and usage guides for AV Studio.',
  'interface-design': 'Interface design guidelines and UI/UX best practices for AV Studio.',
  'button': 'Button component documentation and styling guide.',
  'container': 'Container component layout and configuration for responsive design.',
  'alignment': 'Alignment and responsive layout techniques in AV Studio.',
  
  // System & Configuration
  'configuration': 'System configuration and settings for AV Studio projects.',
  'setup': 'Initial setup and installation guide for AV Studio.',
  'installation': 'Installation procedures and system requirements.',
  'environment': 'Environment configuration and deployment options for AV Studio.',
  'hardware': 'Hardware requirements and compatibility guide.',
  'access': 'Access control and permission management in AV Studio.',
  'security': 'Security features and access control documentation.',
  
  // Localization
  'localization': 'Localization (L10n) documentation for AV Studio. Adapt for different regions.',
  'internationalization': 'Internationalization (i18n) implementation guide for multi-language support.',
  'language-codes': 'Language codes and regional settings reference.',
  
  // Version Specific
  'avstudio': 'AV Studio core functionality and features documentation.',
  '4-series': 'AV Studio 4-Series documentation and features guide.',
  
  // Other
  'recovery': 'Data recovery and backup procedures for AV Studio.',
  'about': 'About AV Studio. Learn about the platform and features.',
  'showcase': 'Featured projects and use cases built with AV Studio.',
  'best-practices': 'Best practices and recommendations for AV Studio projects.',
  'tips-tricks': 'Tips, tricks, and advanced techniques for AV Studio.',
  'example': 'Code examples and usage demonstrations.',
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get description for a tag
 * Returns custom description if available, otherwise generates one
 */
function getTagDescription(tag) {
  if (TAG_DESCRIPTIONS[tag]) {
    return TAG_DESCRIPTIONS[tag];
  }

  // Fallback: Generate description from tag name
  const titleCase = tag
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return `Comprehensive guide to ${titleCase.toLowerCase()} in AV Studio documentation.`;
}

/**
 * Truncate description to SEO-optimal length (160 chars)
 */
function truncateDescription(description, maxLength = 160) {
  if (description.length > maxLength) {
    return description.substring(0, maxLength - 3) + '...';
  }
  return description;
}

/**
 * Format tag name for display
 */
function formatTagName(tag) {
  return tag
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function TagPage({ tag, items }) {
  // Get description and truncate for meta tags
  const description = getTagDescription(tag);
  const truncatedDesc = truncateDescription(description);
  const formattedTag = formatTagName(tag);
  const title = `${formattedTag} - AV Studio Docs`;

  return (
    <>
      {/* SEO Metadata */}
      <PageMetadata
        title={title}
        description={truncatedDesc}
        keywords={[tag, 'documentation', 'guide', 'tutorial']}
      />

      {/* Meta Tags for Search Engines & Social Media */}
      <Head>
        {/* Standard meta description */}
        <meta name="description" content={truncatedDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph (Facebook, LinkedIn, etc) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={truncatedDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://docs.avstudio.app/docs/tags/${tag}/`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={truncatedDesc} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
      </Head>

      {/* Page Layout */}
      <Layout title={title} description={truncatedDesc}>
        <div className="container container--fluid margin-vert--lg">
          <div className="row">
            <div className="col col--12">
              {/* Page Heading */}
              <Heading as="h1" className="margin-bottom--md">
                {items.length} {items.length === 1 ? 'doc' : 'docs'} tagged with{' '}
                <code>{formattedTag}</code>
              </Heading>

              {/* Description */}
              <div className={clsx('margin-bottom--xl', 'lead')}>
                <p>{description}</p>
              </div>

              {/* Tagged Articles Section */}
              <section className="margin-vert--lg">
                {items.length > 0 ? (
                  <div className="row">
                    {items.map(({ content: Content, metadata }) => (
                      <article
                        key={metadata.permalink}
                        className="col col--12 margin-bottom--lg"
                      >
                        {/* Article Title */}
                        <Heading as="h2" className="margin-bottom--sm">
                          <a href={metadata.permalink} className="text--no-decoration">
                            {metadata.title}
                          </a>
                        </Heading>

                        {/* Article Description */}
                        {metadata.description && (
                          <p className="margin-bottom--md margin-top--sm text--secondary">
                            {metadata.description}
                          </p>
                        )}

                        {/* Read More Link */}
                        <a
                          href={metadata.permalink}
                          className="button button--link button--primary"
                        >
                          Read more →
                        </a>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="alert alert--warning">
                    <p>No documents found for this tag.</p>
                  </div>
                )}
              </section>

              {/* Footer Info */}
              <div className="margin-top--xl padding-top--lg border-top">
                <p className="text--small text--secondary">
                  Found in {items.length} {items.length === 1 ? 'article' : 'articles'} tagged as{' '}
                  <code>{tag}</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

// ============================================================================
// CUSTOMIZATION GUIDE
// ============================================================================

/*
 * 
 * QUICK CUSTOMIZATIONS
 * 
 * 1. ADD MORE TAG DESCRIPTIONS:
 *    Add new entries to TAG_DESCRIPTIONS object above
 * 
 * 2. CHANGE DISPLAY FORMAT:
 *    Modify the Heading component or add custom CSS
 * 
 * 3. ADD FILTERING/SORTING:
 *    Add useState and sorting logic before rendering items
 * 
 * 4. CUSTOMIZE ARTICLE DISPLAY:
 *    Modify the article section to use cards, grid, etc
 * 
 * 5. ADD RELATED TAGS:
 *    Add a new section with links to related tags
 * 
 * EXAMPLES:
 * 
 * // Show articles as cards instead of list
 * <div className="row">
 *   {items.map(item => (
 *     <div key={item.metadata.permalink} className="col col--4">
 *       <div className="card">
 *         <h3>{item.metadata.title}</h3>
 *         <p>{item.metadata.description}</p>
 *         <a href={item.metadata.permalink}>Read</a>
 *       </div>
 *     </div>
 *   ))}
 * </div>
 * 
 * // Add sorting
 * const [sortBy, setSortBy] = React.useState('date');
 * const sortedItems = items.sort((a, b) => {
 *   if (sortBy === 'date') {
 *     return new Date(b.metadata.date) - new Date(a.metadata.date);
 *   }
 *   return a.metadata.title.localeCompare(b.metadata.title);
 * });
 * 
 * // Add related tags section
 * const relatedTags = ['tutorial', 'getting-started'];
 * <section>
 *   <h3>Related Topics</h3>
 *   {relatedTags.map(t => (
 *     <a key={t} href={`/docs/tags/${t}/`}>{formatTagName(t)}</a>
 *   ))}
 * </section>
 * 
 */