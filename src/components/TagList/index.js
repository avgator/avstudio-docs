// src/components/TagList/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function TagList() {
  const {siteConfig} = useDocusaurusContext();
  
  // Demo tags with proper formatting
  const demoTags = [
    { label: 'knowledge-base', count: 5 },
    { label: 'crestron', count: 3 },
    { label: 'configuration', count: 2 },
    { label: 'guide', count: 4 },
    { label: 'documentation', count: 6 }
  ];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      margin: '1rem 0'
    }}>
      {demoTags.map(({label, count}) => (
        <Link
          key={label}
          to={`/avstudio-docs/tags/${label.toLowerCase()}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            backgroundColor: 'var(--ifm-color-primary-lighter)',
            color: 'var(--ifm-color-white)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            border: '1px solid transparent',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--ifm-color-primary)';
            e.target.style.transform = 'translateY(-1px)';
            e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'var(--ifm-color-primary-lighter)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
          }}
        >
          <span>{label}</span>
          <span style={{
            marginLeft: '0.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '0.15rem 0.5rem',
            borderRadius: '10px',
            fontSize: '0.8rem'
          }}>
            {count}
          </span>
        </Link>
      ))}
    </div>
  );
}