import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
    const { children, path } = props;
    return (
        <Link to={path}>
            {children}
        </Link>
    );
};

export default NavigationItem;