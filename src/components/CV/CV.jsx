import React from 'react';
import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf';
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

const printDocument = () => {
  const input = document.getElementById('FrancoChoque');
  html2Canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new JsPDF();
    pdf.addImage(imgData, 'JPEG', 0, 0);
    // pdf.output('dataurlnewwindow');
    pdf.save('download.pdf');
  });
};

const CV = () => (
  <div className={styles.Container}>
    <div id="FrancoChoque" className={styles.Layout}>
      <div className={styles.Header}>
        <div style={{ flex: 1 }}>
          <img src={myself} alt="foto" height={180} />
        </div>
        <div className={styles.Name}>
          <h2>Franco Choque</h2>
          <h4>Full-Stack Web Developer</h4>
          {/* <p style={{ fontStyle: 'italic', color: '#aaaaaa' }}>
            {'"Here\'s where I´d put a cool quote if I had one"'}
          </p> */}
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
        <h2>Experiencie</h2>
        <div className={styles.Timeline}>
          <TimelineSide
            name="Ixpandit"
            date="01/2019 - Now"
            web="ixpandit.com"
          />
          <TimelineBody position="Full-Stack Web Developer">
            <ul>
              <li>
                Revamped the frontend of a laravel web app with React, using Node, Express, and Next.js for server side rendering
              </li>
              <li>
                Developed the REST APIs for the aforementioned app
              </li>
            </ul>
          </TimelineBody>
        </div>
        <div className={styles.Timeline}>
          <TimelineSide
            name="Ayi & Asociados"
            date="03/2018 - 12/2018"
            web="ayi-asociados.com"
          />
          <TimelineBody position="Front-End and Mobile Developer">
            <ul>
              <li>
                Built a crossplatform mobile application using React Native and published it on both Play Store and App Store
              </li>
              <li>
                Maintained a React web app.
              </li>
              <li>
                Developed part of the frontend for a banking web app with Angular
              </li>
            </ul>
          </TimelineBody>
        </div>
        <div>
          <h2>Education</h2>
          <div className={styles.Timeline}>
            <TimelineSide
              name="Universidad de Buenos Aires"
              date="2014 - Now"
            />
            <TimelineBody position="System Engineer" />
          </div>
          <div className={styles.Timeline}>
            <TimelineSide
              name="Colegio Nacional de Buenos Aires"
              date="2007 - 2011"
            />
            <TimelineBody position="Bachiller" />
          </div>
        </div>
        <h2>Skills</h2>
      </div>
      <button type="button" onClick={printDocument}>
        pdf
      </button>
    </div>
  </div>
);

export default CV;
