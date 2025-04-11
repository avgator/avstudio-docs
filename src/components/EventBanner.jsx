import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './EventBanner.module.css'; // Optional styling

export default function EventBanner() {
  const imgUrl = useBaseUrl('/img/Infocomm2025-landscape-image.jpg'); // Prepends /avstudio-docs/

  return (
    <section className="event-banner padding-vert--lg">
      <div className="container">
        <h2>Join Us at InfoComm 2025</h2>
        <a href="https://invt.io/1exbas51ph9" target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} alt="InfoComm 2025 AVstudio Exhibit" style={{ maxWidth: '100%' }} />
        </a>
        <p>We’re excited to exhibit AVstudio at <strong>InfoComm 2025</strong>, the premier Pro AV event, from <strong>June 11–13, 2025</strong></p>
      </div>
    </section>
  );
}