import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navigation = () => {
    return (
        <nav className="main-nav">
            <div className="nav-container">
                <div className="nav-logo">Степан и Анна</div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/schedule"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            Расписание
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/faq"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            FAQ
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            О нас
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/form"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            Анкета
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;