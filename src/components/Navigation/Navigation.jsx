import React, { useState } from 'react';
import * as S from './styles';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <S.NavContainer>
            <S.NavLogo>Степан и Анна</S.NavLogo>

            <S.BurgerMenu onClick={toggleMenu} isOpen={isMenuOpen}>
                <span></span>
                <span></span>
                <span></span>
            </S.BurgerMenu>

            <S.NavMenu isOpen={isMenuOpen}>
                <S.NavItem>
                    <S.NavLinkStyle to="/" end>
                        Главная
                    </S.NavLinkStyle>
                </S.NavItem>
                <S.NavItem>
                    <S.NavLinkStyle to="/schedule">
                        Расписание
                    </S.NavLinkStyle>
                </S.NavItem>
                <S.NavItem>
                    <S.NavLinkStyle to="/faq">
                        FAQ
                    </S.NavLinkStyle>
                </S.NavItem>
                <S.NavItem>
                    <S.NavLinkStyle to="/about">
                        О нас
                    </S.NavLinkStyle>
                </S.NavItem>
                <S.NavItem>
                    <S.NavLinkStyle to="/gallery">
                        Галерея
                    </S.NavLinkStyle>
                </S.NavItem>
            </S.NavMenu>
        </S.NavContainer>
    );
};

export default Navigation;