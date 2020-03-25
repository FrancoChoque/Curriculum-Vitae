import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhoneSquare,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import styles from './CV.module.css';
import myself from '../../assets/me.png';
import TimelineSide from './TimelineSide/TimelineSide';
import TimelineBody from './TimelineBody/TimelineBody';
import Chip from '../UI/Chip/Chip';

const CV = ({ showPhoto = true }) => (
  <div className={styles.Container}>
    <div id="FrancoChoque" className={styles.Layout}>
      <div className={styles.Header}>
        {showPhoto && (
          <div style={{ flex: 1 }}>
            <img src={myself} alt="foto" height={180} />
          </div>
        )}
        <div className={styles.Name}>
          <h2>Franco Choque</h2>
          <h4>Full-Stack Web Developer</h4>
        </div>
        <div className={styles.FooterCol}>
          <div>
            <span>Capital Federal, Argentina </span>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div>
            <span>franco.choquescipione@gmail.com </span>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div>
            <span> (+54) 1159237943 </span>
            <FontAwesomeIcon icon={faPhoneSquare} />
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/franco-choque-8b7616174/"
            >
              <span>linkedin.com/in/FrancoChoque </span>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/FrancoChoque"
            >
              <span>github.com/FrancoChoque </span>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.Body}>
        <h2>Skills</h2>
        <div className={styles.Skills}>
          <Chip text="Javascript" />
          <Chip text="React.js" />
          <Chip text="React Native" />
          <Chip text="Node.js" />
          <Chip text="Express.js" />
          <Chip text="Next.js" />
          <Chip text="HTML" />
          <Chip text="CSS" />
          <Chip text="Angular" />
          <Chip text="Amazon Web Services" />
          <Chip text="PHP" />
          <Chip text="Unit / E2E Testing" />
        </div>
        <h2>Experience</h2>
        <div className={styles.Timeline}>
          <TimelineSide
            name="Ixpandit"
            date="01/2019 - Now"
            web="ixpandit.com"
          />
          <TimelineBody
            position="Full-Stack Web Developer"
            description="Migrated the frontend of a Laravel web app to a React SPA. Refactored the backend and developed REST APIs for the web page."
          >
            <ul>
              <li>
                Developed a fully responsive, SEO friendly, progressive web app
                in React.
              </li>
              <li>
                Implemented Node, Express, and Next.js for server side
                rendering.
              </li>
              <li>Developed REST APIs with PHP and Node.</li>
              <li>
                Developed unit and end-to-end tests for both frontend and
                backend with PHPUnit, Chai and Cypress.
              </li>
            </ul>
          </TimelineBody>
        </div>
        <div className={styles.Timeline}>
          <TimelineSide
            name="Ayi & Asociados"
            date="01/2018 - 12/2018"
            web="ayi-asociados.com"
          />
          <TimelineBody
            position="Front-End and Mobile Developer"
            description="Worked mainly in a project which involved a web app for agency brokers and a mobile app for their clients. The mobile app allowed users to receive push notifications and perform stock operations."
          >
            <ul>
              <li>
                Built a crossplatform mobile application using React Native and
                published it on both Play Store and App Store.
              </li>
              <li>Maintained a React web app.</li>
              <li>
                Developed part of the frontend for a banking web app with
                Angular.
              </li>
            </ul>
          </TimelineBody>
        </div>
        <div>
          <h2>Education</h2>
          <div className={styles.Timeline}>
            <TimelineSide
              name="Universidad de Buenos Aires"
              date="2016 - Now"
            />
            <TimelineBody position="System Engineering" />
          </div>
          <div className={styles.Timeline}>
            <TimelineSide
              name="Colegio Nacional de Buenos Aires"
              date="2007 - 2011"
            />
            <TimelineBody position="High School" />
          </div>
          <div className={styles.Timeline}>
            <TimelineSide name="Cambridge Assessment English" date="2018" />
            <TimelineBody position="Certificate in Advanced English (C1)" />
          </div>
        </div>
      </div>
      {/* <Radar data={Chartdata} options={Chartoptions} /> */}
    </div>
  </div>
);

export default CV;
