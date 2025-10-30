/**
 * Minimal TagPage Component with Meta Descriptions
 * This is a simplified version to ensure Docusaurus recognizes and uses it
 */

import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// Tag descriptions
const TAG_DESCRIPTIONS = {
  'javascript': 'Explore JavaScript integration and scripting capabilities in AV Studio. Learn functions, events, and dynamic content.',
  'autonomic': 'Autonomic Mirage Media Server integration guide. Connect and control music streaming services.',
  'api': 'API integration and HTTP/HTTPS communication for AV Studio. Build custom integrations and automate tasks.',
  'crestron': 'Crestron control system integration guide for AV Studio. Setup and manage connectivity.',
  'functions': 'Function documentation and usage in AV Studio. Master scripting and automation.',
  'media-player': 'Advanced media player features and controls documentation for AV Studio.',
  'configuration': 'System configuration and settings for AV Studio projects.',
  'setup': 'Initial setup and installation guide for AV Studio.',
  'tutorial': 'Step-by-step tutorials for AV Studio. Learn through comprehensive guides and hands-on examples.',
  'knowledge-base': 'Knowledge base articles and integration guides for AV Studio.',
};

function getTagDescription(tag) {
  if (TAG_DESCRIPTIONS[tag]) {
    return TAG_DESCRIPTIONS[tag];
  }
  return `Learn about ${tag} in AV Studio documentation.`;
}

export default function TagPage(props) {
  const { tag, items } = props;
  const description = getTagDescription(tag);
  const truncatedDesc = description.length > 160 ? description.substring(0, 157) + '...' : description;
  const title = `${tag} - AV Studio Docs`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={truncatedDesc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={truncatedDesc} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={truncatedDesc} />
      </Head>

      <Layout title={title} description={truncatedDesc}>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--12">
              <Heading as="h1">
                {items.length} doc{items.length > 1 ? 's' : ''} tagged with{' '}
                <code>{tag}</code>
              </Heading>

              {description && (
                <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                  {description}
                </p>
              )}

              <section>
                {items.map((item) => (
                  <article key={item.metadata.permalink} style={{ marginBottom: '2rem' }}>
                    <h2>
                      <a href={item.metadata.permalink}>
                        {item.metadata.title}
                      </a>
                    </h2>
                    {item.metadata.description && (
                      <p>{item.metadata.description}</p>
                    )}
                  </article>
                ))}
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}