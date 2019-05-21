import React from 'react';
import styles from './TimelineSide.module.css';

const TimelineSide = (props) => {
  const { name, date ,web } = props;
  return (
    <div className={styles.TimeLineSide}>
      <div className={styles.Name}>{name}</div>
      <div className={styles.Date}>{date}</div>
      <div className={styles.Web}>{web}</div>
    </div>
  );
};

export default TimelineSide;
