import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">AVStudio Documentation</h1>
        <p className="hero__subtitle">
          Comprehensive documentation for AVStudio software suite
        </p>
        <div className={clsx('padding-horiz--md')}>
          <Link
            className="button button--secondary button--lg"
            to="/about"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Documentation for AVStudio software suite"
    >
      <HomepageHeader />
      <main>
        <div className="container margin-top--lg">
          <div className="row">
            <div className="col col--6">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <Link to="/documentation/getting-started">Getting Started Guide</Link>
                </li>
                <li>
                  <Link to="/showcase">Showcase</Link>
                </li>
                <li>
                  <Link to="/knowledge-base">Knowledge Base</Link>
                </li>
                <li>
                  <Link to="/documentation">Documentation</Link>
                </li>
              </ul>
            </div>
            <div className="col col--6">
              <h2>Support</h2>
              <p>Need help? Check our documentation or contact support.</p>
            </div>
          </div>
        </div>
      </main>

    </Layout>
  );
}