import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.Footer}>
    <p>About me</p>
    <div className={styles.FooterCol}>
      <div>
        <FontAwesomeIcon icon={faLinkedin} />
        <span className={styles.DesktopOnly}>
        View my Linkedin profile
        </span>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} />
        <span className={styles.DesktopOnly}>
        Check me out on
          <span>
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/FrancoChoque">@FrancoChoque</a>
          </span>
        </span>
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <span className={styles.DesktopOnly}>
        franco.choquescipione@gmail.com
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
