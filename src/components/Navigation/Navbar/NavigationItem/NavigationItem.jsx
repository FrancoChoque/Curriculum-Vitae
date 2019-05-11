import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styles from './NavigationItem.module.css';

const NavigationItem = (props) => {
  const {
    children, hashLink, location, path,
  } = props;
  return (
    <li className={styles.NavigationItem}>
      {hashLink ? (
        <NavHashLink smooth to={`${location.pathname}#${path}`} activeClassName={styles.active} exact>
          {children}
        </NavHashLink>
      ) : (
        <NavLink to={path} activeClassName={styles.active} exact>
          {children}
        </NavLink>
      )}
    </li>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.node,
  hashLink: PropTypes.bool,
  location: PropTypes.object,
  path: PropTypes.string,
};

NavigationItem.defaultProps = {
  children: null,
  hashLink: false,
  location: {},
  path: '',
};

export default withRouter(NavigationItem);
