import React from 'react';
import NavigationItem from './../NavigationItem/NavigationItem';

const NavigationItems = () => (
    <>
        <NavigationItem path='/'>
            About
        </NavigationItem>
        <NavigationItem path='/portfolio'>
            Portfolio
        </NavigationItem>
    </>
);

export default NavigationItems;