import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.Footer}>
    <p>About me</p>
    <div>
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  </footer>
);

export default Footer;
