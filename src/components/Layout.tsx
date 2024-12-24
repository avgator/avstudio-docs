// src/components/Layout.tsx
import * as ReactAlias from 'react';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string; // Optional title
  description?: string; // Optional description
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

// src/components/HomepageFeatures.tsx
import React from 'react';

interface Feature {
  title: string;
  description: string;
}

const FeatureList: Feature[] = [
  {
    title: 'Easy to Use',
    description: 'Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.',
  },
  // ... more features
];

function FeatureComponent({ title, description }: Feature) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      {FeatureList.map((props, idx) => (
        <FeatureComponent key={idx} {...props} />
      ))}
    </section>
  );
}