import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

const Backdrop = (props) => {
  const { clicked, show } = props;
  return (
    show ? <div role="presentation" onClick={clicked} className={styles.Backdrop} /> : null
  );
};
Backdrop.defaultProps = {
  show: false,
  clicked: null,
};

Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
};

export default Backdrop;
