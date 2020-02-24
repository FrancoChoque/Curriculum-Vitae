import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';
import asset from '../../../assets/linkedin.png';

const Item = ({ description, link, name }) => (
  <div className={styles.Item} role="presentation">
    <div className={styles.CardContainer}>
      <img src={asset} />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <p className={styles.header}>{name}</p>
        {description}
      </div>
    </div>
  </div>
);

Item.propTypes = {
  description: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.name,
};

Item.defaultProps = {
  description: '',
  link: '',
  name: '',
};

export default Item;
