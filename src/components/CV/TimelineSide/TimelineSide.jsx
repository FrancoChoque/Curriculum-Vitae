import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimelineSide.module.css';

const TimelineSide = (props) => {
  const { name, date, detail } = props;
  return (
    <div className={styles.TimeLineSide}>
      <div className={styles.Name}>{name}</div>      
      <div className={styles.Web}>{detail}</div>
      <div className={styles.Date}>{date}</div>
    </div>
  );
};

TimelineSide.propTypes = {
  date: PropTypes.string,
  name: PropTypes.string,
  web: PropTypes.string,
};

TimelineSide.defaultProps = {
  date: '',
  name: '',
  web: '',
};

export default TimelineSide;
