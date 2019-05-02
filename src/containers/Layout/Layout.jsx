import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Footer from './../../components/Navigation/Footer/Footer';

const Layout = (props) => {
    const { children } = props;
    return (
        <div>
        <Navbar />
            {children}
        <Footer />
    </div>
    );    
};


export default Layout;