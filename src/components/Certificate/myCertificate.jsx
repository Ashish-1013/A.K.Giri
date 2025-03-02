/*
import React from 'react';
import styles from './myCertificate.module.css'; // Import CSS Module

const MyCertificate = ({ certificates }) => {
    return (
    <div id={styles.certificatesContainer}>
        <h1 className={styles.portfolioTitle}>My Certificates</h1>
        <p className={styles.portfolioDesc}>Click on the image to Download my Certificate.</p>
        <div className={styles.certificatesGrid}>
        {certificates.map((certificate, index) => (
            <div key={index} className={styles.certificateCard}>
            <a
                href={certificate.downloadLink}
                download={certificate.name}
                className={styles.certificateLink}
            >
                <img
                src={certificate.imageUrl}
                alt={certificate.name}
                className={styles.certificateImage}
                />
            </a>
            <h3 className={styles.certificateName}>{certificate.name}</h3>
            </div>
        ))}
        </div>
    </div>
    );
};


export default MyCertificate;
*/

import React from 'react';
import './MyCertificate.css'; // Import normal CSS

const MyCertificate = ({ certificates }) => {
  return (
    <section id="certificatesContainer">
      <h1 className="portfolioTitle">My Certificates</h1>
      <p className="portfolioDesc">Click on the image to Download my Certificate.</p>
      <div className="certificatesGrid">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificateCard">
            <a
              href={certificate.downloadLink}
              download={certificate.name}
              className="certificateLink"
            >
              <img
                src={certificate.imageUrl}
                alt={certificate.name}
                className="certificateImage"
              />
            </a>
            <h3 className="certificateName">{certificate.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyCertificate;