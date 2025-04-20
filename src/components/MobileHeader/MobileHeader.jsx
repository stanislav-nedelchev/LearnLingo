import { useState } from 'react';
import RandomThemeButton from '../RandomThemeButton/RandomThemeButton.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import BtnAuth from '../BtnAuth/BtnAuth.jsx';
import Logo from '../Logo/Logo.jsx';
import css from './MobileHeader.module.css';

const MobileHeader = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className={css.mobileHeader}>
      <Logo />
      <RandomThemeButton />
      <button className={css.burgerBtn} onClick={toggleMenu} type="button">
        <svg width="24" height="24">
          <use href="/sprite.svg#icon-menu"></use>
        </svg>
      </button>
      {isMenuOpen && (
        <div className={css.mobileMenu}>
          <Navigation isLoggedIn={isLoggedIn} />
          <BtnAuth isLoggedIn={isLoggedIn} />
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
