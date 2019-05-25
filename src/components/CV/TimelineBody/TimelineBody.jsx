import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimelineBody.module.css';

const TimelineBody = (props) => {
  const { description, position, children } = props;
  return (
    <div className={styles.TimelineBody}>
      <h4>{position}</h4>
      <p>{description}</p>
      {children}
    </div>
  );
};

TimelineBody.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  position: PropTypes.string,
};

TimelineBody.defaultProps = {
  children: null,
  description: '',
  position: '',
};

export default TimelineBody;
