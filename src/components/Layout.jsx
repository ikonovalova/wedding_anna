// import React from 'react';
// import Navigation from './Navigation.jsx';
//
// const Layout = ({ children }) => {
//     return (
//         <div className="app">
//             <header>
//                 <Navigation />
//             </header>
//             <main>
//                 {children}
//             </main>
//         </div>
//     );
// };
//
// export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation.jsx';

const Layout = () => {
    return (
        <div className="app">
            <header>
                <Navigation />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;