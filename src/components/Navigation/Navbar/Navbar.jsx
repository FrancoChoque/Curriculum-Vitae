import React, { Component } from 'react';
import styles from './Navbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import SideDrawer from './SideDrawer/SideDrawer';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import Logo from '../Logo/Logo';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
    };
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  }


  render() {
    const { showSideDrawer } = this.state;
    const items = <NavigationItems onClick={this.sideDrawerClosedHandler} />;
    return (
      <header className={styles.Navbar}>
        <Logo />
        <nav className={styles.desktopOnly}>
          {items}
        </nav>
        <DrawerToggle clicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          items={items}
          opened={showSideDrawer}
        />
      </header>
    );
  }
}

export default Navbar;
