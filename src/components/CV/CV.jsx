import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneSquare,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./CV.module.css";
import myself from "../../assets/me.png";
import TimelineSide from "./TimelineSide/TimelineSide";
import TimelineBody from "./TimelineBody/TimelineBody";
import Chip from "../UI/Chip/Chip";

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
          <h4>Full-Stack Web Developer</h4>
        </div>
        <div className={styles.FooterCol}>
          <div>
            <span>Buenos Aires, Argentina </span>
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
          <Chip text="Typescript" />
          <Chip text="PHP" />
          <Chip text="React.js" />
          <Chip text="React Native" />
          <Chip text="Node.js" />
          <Chip text="Express.js" />
          <Chip text="Next.js" />
          <Chip text="Laravel" />
          <Chip text="Amazon Web Services" />
          <Chip text="Unit / E2E Testing" />
        </div>
        <div className={styles.Spacer} />
        <h2>Experience</h2>
        <div className={styles.Timeline}>
          <TimelineSide name="Optic Power - Blitz" date="03/2021 - now" detail="Gaming" />
          <TimelineBody position="Mobile Developer">
            <ul>
              <li>
                Currently working on the mobile app version of blitz.gg for League of Legends. The stack is React-Native (Typescript), Redux and GraphQL.
              </li>
            </ul>
          </TimelineBody>
        </div>
        <div className={styles.Timeline}>
          <TimelineSide name="Erisx" date="06/2020 - 03/2021" detail="Financial services" />
          <TimelineBody position="Frontend Developer">
            <ul>
              <li>
                Worked on both back-office and customer-facing React apps using Redux Sagas and
                testing with Jest/Enzyme.
              </li>
              <li>
                Developed features for a crypto currency trading app built with React,
                Typescript and WebSockets.
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
                Made a fully responsive, SEO friendly, server side
                rendered, progressive web app in React.
              </li>
              <li>Developed REST APIs with PHP and Node.</li>
              <li>
                Wrote unit and end-to-end tests for both frontend and backend
                using PHPUnit, Chai and Cypress.
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
                Built a crossplatform mobile application using React Native and AWS.
              </li>
              <li>
                Developed features for a back office banking app built in Angular 2+.
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
                Arcor: Internal enterprise app for notifications and announcements. Tech stack: React Native, Redux and i18n.
              </li>
              <li>
                Appbar: Delivery app for drinks. Tech stack: React Native, MobX, GraphQL and i18n.
              </li>
              <li>
                Liteup: App that allows influencers to apply for marketing campaigns and earn revenue. Tech stack: React Native, Context API, Firebase and Expo.
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
        </div>
      </div>
      {/* <Radar data={Chartdata} options={Chartoptions} /> */}
    </div>
  </div>
);

export default CV;
