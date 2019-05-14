import React from 'react';
import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './CV.module.css';
import myself from '../../assets/me.png';


const printDocument = () => {
  const input = document.getElementById('FrancoChoque');
  html2Canvas(input)
    .then((canvas) => {
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
          <p style={{ fontStyle: 'italic', color: '#aaaaaa' }}>
            {`"Never let success get to your head, never let failure get to your heart"`}
          </p>
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
        <h2>Experiencia Laboral</h2>
      <div>
      <h2>Educación</h2>
      <ul>
        <li>
        2014 - Actualidad Licenciatura en Análsis de sistemas
        </li>
        <li>
        2017 Curso “UNIX” en educación IT.
        </li>
        <li>
        2017 Curso “Fundamentos de programación con SQL Server”
en educación IT.
        </li>
        <li>
          2015 Curso “Programación Java orientada a objetos” organizado por EMPLEARTEC en la Facultad de Ingeniería (FIUBA).
        </li>
      </ul>
      </div>
        <h2>Skills</h2>
      </div>
      <button type="button" onClick={printDocument}>pdf</button>
    </div>
  </div>
);

export default CV;
