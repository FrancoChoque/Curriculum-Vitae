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

const CV = ({ showPhoto = false }) => (
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
          <h4>Frontend Developer</h4>
        </div>
        <div className={styles.FooterCol}>
          <div>
            <span>Bilbao, Spain </span>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div>
            <span>franco.choquesc@gmail.com </span>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div>
            <span> (+34) 602633072 </span>
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
          <Chip text="Typescript" />
          <Chip text="React.js" />
          <Chip text="React Native" />
          <Chip text="Node.js" />
          <Chip text="Next.js" />
          <Chip text="PHP" />
          <Chip text="Laravel" />
          <Chip text="AWS" />
        </div>                
        <div className={styles.Spacer} />
        <h2>Experience</h2>
        <div className={styles.Timeline}>
          <TimelineSide
            name="Lastminute.com"
            date="04/2023 - Now"
            detail="Online Travel Agency"
          />
          <TimelineBody position="Frontend Developer">
            <ul>
              <li>
                Built and maintained UI components for the cart checkout module using React, MobX, TypeScript, and Java
              </li>
              <li>
                Implemented UX improvements, AB Tests, and bug tracking/resolution
              </li>
            </ul>
          </TimelineBody>
        </div>
        <div className={styles.Timeline}>
          <TimelineSide
            name="Autofi"
            date="10/2021 - 04/2023"
            detail="Digital Retailing"
          />
          <TimelineBody position="Fullstack Developer">
            <ul>
              <li>
                Developed common, reusable components such as forms, accordions
                and cards for an internal app and a B2B app
              </li>
              <li>Managed data models and wrote database migrations</li>
              <li>
                Used React, GraphQL (Apollo), Node.js and MongoDB
              </li>
            </ul>
          </TimelineBody>
        </div>
        <div className={styles.Timeline}>
          <TimelineSide
            name="Optic Power"
            date="03/2021 - 10/2021"
            detail="Gaming"
          />
          <TimelineBody position="Mobile Developer">
            <ul>
              <li>
                Worked on an MVP of blitz.gg mobile app for League of Legends using React Native
              </li>
            </ul>
          </TimelineBody>
        </div>
        <div className={styles.Timeline}>
          <TimelineSide
            name="Erisx"
            date="06/2020 - 03/2021"
            detail="Financial services"
          />
          <TimelineBody position="Frontend Developer">
            <ul>
              <li>
                Worked on both back-office and customer-facing React apps using
                Redux Sagas and testing with Jest/Enzyme
              </li>
              <li>
                Developed features for a crypto currency trading app built with
                React, Typescript and WebSockets
              </li>
            </ul>
          </TimelineBody>
        </div>
        <div className={styles.Timeline}>
          <TimelineSide
            name="Ixpandit"
            date="01/2019 - 05/2020"
            detail="Financial services"
          />
          <TimelineBody position="Full-Stack Developer">
            <ul>
              <li>
                Created a fully responsive, SEO friendly, server side rendered,
                progressive web app in NextJs
              </li>
              <li>Developed RESTful APIs with PHP and Node</li>
              <li>
                Implemented frontend/backend testing (PHPUnit, Chai, Cypress)
              </li>
            </ul>
          </TimelineBody>
        </div>
        <div className={styles.Timeline}>
          <TimelineSide
            name="Ayi & Asociados"
            date="01/2018 - 12/2018"
            detail="IT Consulting"
          />
          <TimelineBody position="Front-End and Mobile Developer">
            <ul>
              <li>
                Built a cross platform mobile app with React Native and
                AWS
              </li>
              <li>
                Contributed to a back-office banking system in Angular 2+
              </li>
            </ul>
          </TimelineBody>
        </div>
        <div className={styles.Timeline}>
          <TimelineSide
            name="Freelance"
          />
          <TimelineBody position="Mobile Developer">
            <ul>
              <li>
                Developed UI components and maintained mobile apps using React Native
              </li>
              <li>
                Managed deployment to both App Store and Play Store
              </li>
            </ul>
          </TimelineBody>
        </div>
        {/* <div className={styles.Timeline}>
          <TimelineSide name="Freelance" />
          <TimelineBody position="Mobile Developer">
            <ul>
              <li>
                Arcor: Internal enterprise app for notifications and
                announcements. Tech stack: React Native, Redux and i18n.
              </li>
              <li>
                Appbar: Delivery app for drinks. Tech stack: React Native, MobX,
                GraphQL and i18n.
              </li>
              <li>
                Liteup: App that allows influencers to apply for marketing
                campaigns and earn revenue. Tech stack: React Native, Context
                API, Firebase and Expo.
              </li>
            </ul>
          </TimelineBody>
        </div> */}
        <div>
          <h2>Education</h2>
          <div className={styles.Timeline}>
            <TimelineSide
              name="Universidad de Buenos Aires"
            />
            <TimelineBody position="System Engineering" />
          </div>
        </div>
      </div>
      {/* <Radar data={Chartdata} options={Chartoptions} /> */}
    </div>
  </div>
);

export default CV;
