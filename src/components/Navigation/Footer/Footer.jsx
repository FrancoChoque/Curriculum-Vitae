import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.Footer} id="contact">
    <p>About me</p>
    <div className={styles.FooterCol}>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/franco-choque-8b7616174/">
          <FontAwesomeIcon icon={faLinkedin} />
          <span className={styles.DesktopOnly}>
            <span>
              {' '}
              LinkedIn profile
            </span>
          </span>
        </a>
      </div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/FrancoChoque">
          <FontAwesomeIcon icon={faGithub} />
          <span className={styles.DesktopOnly}>
            <span>
              {' '}
              @FrancoChoque
            </span>
          </span>
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <span className={styles.DesktopOnly}>
          franco.choquescipione@gmail.com
        </span>
      </div>
      <div>
        <FontAwesomeIcon icon={faPhoneSquare} />
        <span>
          {' '}
          (+54)1159237943
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
