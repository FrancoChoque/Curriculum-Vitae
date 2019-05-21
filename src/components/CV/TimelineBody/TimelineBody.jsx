import React from 'react';
import styles from './TimelineBody.module.css';

const TimelineBody = (props) => {
  const { position, description } = props;
  return (
    <div className={styles.TimelineBody}>
      <h4>{position}</h4>
      <p>{description}</p>
    </div>
  );
};

export default TimelineBody;
