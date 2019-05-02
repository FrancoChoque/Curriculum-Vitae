import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";

const Navbar = props => {
  const { drawerToggleClick } = props;
  return (
    <header className={styles.Navbar}>
      <NavigationItems />
    </header>
  );
};

Navbar.propTypes = {
  drawerToggleClick: PropTypes.func
};

Navbar.defaultProps = {
  drawerToggleClick: null
};

export default Navbar;
