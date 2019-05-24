import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimelineBody.module.css';

const TimelineBody = (props) => {
  const { position, children } = props;
  return (
    <div className={styles.TimelineBody}>
      <h4>{position}</h4>
      {children}
    </div>
  );
};

TimelineBody.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
};

TimelineBody.defaultProps = {
  children: null,
  position: '',
};

export default TimelineBody;
