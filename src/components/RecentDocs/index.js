import React from 'react';
import Link from '@docusaurus/Link';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';

export default function RecentDocs({ count = 5 }) {
  const allDocsData = useAllDocsData();
  const defaultDocsData = allDocsData.default;
  
  // Get all docs and their last update times
  const recentDocs = Object.values(defaultDocsData.versions[0].docs)
    .filter(doc => doc.lastUpdatedAt) // Only include docs with update time
    .map(doc => ({
      title: doc.title,
      lastUpdatedAt: doc.lastUpdatedAt,
      path: doc.path,
    }))
    .sort((a, b) => new Date(b.lastUpdatedAt) - new Date(a.lastUpdatedAt))
    .slice(0, count);

  if (recentDocs.length === 0) {
    return null;
  }

  return (
    <div>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {recentDocs.map((doc) => (
          <li key={doc.path} style={{ marginBottom: '0.75rem' }}>
            <Link
              to={doc.path}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                transition: 'background-color 0.2s'
              }}
            >
              <span style={{
                color: 'var(--ifm-link-color)',
                fontWeight: 500
              }}>
                {doc.title}
              </span>
              <span style={{
                color: 'var(--ifm-color-emphasis-600)',
                fontSize: '0.875rem'
              }}>
                {new Date(doc.lastUpdatedAt).toLocaleDateString()}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}