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
        <img src={imgUrl} alt="InfoComm 2025 Banner" style={{ maxWidth: '100%' }} />
        <p>We’re excited to exhibit at <strong>InfoComm 2025</strong>, the premier Pro AV event, from <strong>June 11–13, 2025</strong>. Visit us to explore cutting-edge technology, discover innovative solutions like AVstudio, and connect with industry professionals to grow your network.</p>
        <h3>Event Highlights</h3>
        <ul>
          <li><strong>Dates:</strong> June 11–13, 2025</li>
          <li><strong>Location:</strong> InfoComm, the coolest Pro AV showcase on the planet</li>
          <li><strong>What to Expect:</strong> Hands-on demos, the latest AV tools, and networking opportunities</li>
        </ul>
        <h3>Get Your Free Exhibit Hall Pass</h3>
        <p>Register using our VIP code for complimentary access.</p>
        <Link className="button button--primary" to="https://invt.io/1exbas51ph9" target="_blank">Register Now</Link>
        <h3>Book a Personal AVstudio Demo</h3>
        <p>Schedule a 1:1 appointment for an exclusive AVstudio presentation.</p>
        <Link className="button button--primary" to="https://calendly.com/vadim-avgator/30min" target="_blank">Reserve Your Slot</Link>
        <p>We can’t wait to see you there! <strong>#InfoComm2025 #ProAV #AVstudio</strong></p>
      </div>
    </section>
  );
}