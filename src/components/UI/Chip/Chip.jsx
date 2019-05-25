import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chip.module.css';

const Chip = (props) => {
  const { text } = props;
  return (
    <div className={styles.Chip}>
      {text}
    </div>
  );
};

Chip.propTypes = {
  text: PropTypes.string,
};

Chip.defaultProps = {
  text: '',
};

export default Chip;
