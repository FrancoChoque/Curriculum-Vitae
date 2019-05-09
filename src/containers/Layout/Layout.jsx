import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Footer from '../../components/Navigation/Footer/Footer';
import styles from './Layout.module.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.Content}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
