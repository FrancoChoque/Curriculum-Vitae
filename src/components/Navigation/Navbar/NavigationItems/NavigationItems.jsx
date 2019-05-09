import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

const NavigationItems = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem path="/">
        About
    </NavigationItem>
    <NavigationItem path="/portfolio">
        Portfolio
    </NavigationItem>
    <NavigationItem path="/contact">
        Contact
    </NavigationItem>
  </ul>
);

export default NavigationItems;
