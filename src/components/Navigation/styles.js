import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
    padding: 15px 30px;
    //position: fixed;
    //top: 0;
    //left: 0;
    //right: 0;
    position: relative;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        padding: 15px 20px;
    }
`;

export const NavLogo = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 700;
    color: #d4a373;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 30px;

    @media (max-width: 768px) {
        position: fixed;
        top: 63px;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        gap: 25px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-150%)'};
        transition: transform 0.3s ease-in-out;
    }
`;

export const NavItem = styled.li`
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`;

export const NavLinkStyle = styled(NavLink)`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #555;
    text-decoration: none;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    padding: 5px 0;
    transition: color 0.3s ease;

    &:hover {
        color: #d4a373;
    }

    &.active {
        color: #d4a373;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #d4a373;
        transition: width 0.3s ease;
    }

    &:hover::after,
    &.active::after {
        width: 100%;
    }

    @media (max-width: 768px) {
        display: block;
        padding: 10px 0;
        font-size: 16px;

        &::after {
            display: none;
        }
    }
`;

export const BurgerMenu = styled.div`
    display: none;
    cursor: pointer;
    z-index: 1100;

    span {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px;
        background-color: #555;
        transition: all 0.3s ease;
    }

    span:nth-child(1) {
        transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'};
    }

    span:nth-child(2) {
        opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }

    span:nth-child(3) {
        transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'};
    }

    @media (max-width: 768px) {
        display: block;
    }
`;