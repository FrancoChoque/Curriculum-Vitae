import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideDrawer.module.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  const { opened, closed, items } = props;
  if (opened) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <>
      <Backdrop show={opened} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <nav>
          {items}
        </nav>
      </div>
    </>
  );
};

SideDrawer.defaultProps = {
  opened: false,
  closed: null,
  items: null,
};

SideDrawer.propTypes = {
  opened: PropTypes.bool,
  closed: PropTypes.func,
  items: PropTypes.node,
};

export default SideDrawer;
