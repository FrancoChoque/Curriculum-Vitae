import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const NavigationItem = (props) => {
  const { children, path } = props;
  return (
    <li className={styles.NavigationItem}>
      <NavLink to={path} activeClassName={styles.active} exact>
        {children}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
};

NavigationItem.defaultProps = {
  children: null,
  path: '',
};

export default NavigationItem;
