import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation.jsx';

const Layout = () => {
    return (
        <div className="app">
            <Navigation />
            <Outlet />
        </div>
    );
};

export default Layout;