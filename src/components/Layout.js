import React, { Children } from 'react';
import Header from './Header';
import Footer from './Footer';
const Layout = () => {
    return (
        <div>
            <Header>
            <div>{children}</div>
            <Footer/>    
        </div>
    );
}

export default Layout;
