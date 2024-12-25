// src/components/HomepageFeatures.jsx
import React from 'react';

const FeatureList = [
  {
    title: 'Easy to Use',
    description:
      'Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.',
  },
  // ... more features
];

function FeatureComponent({ title, description }) {
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