import RandomThemeButton from '../RandomThemeButton/RandomThemeButton.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import BtnAuth from '../BtnAuth/BtnAuth.jsx';
import Logo from '../Logo/Logo.jsx';
import css from './DesktopHeader.module.css';

const DesktopHeader = ({ isLoggedIn }) => {
  return (
    <div className={css.desktopHeader}>
      <Logo />
      <Navigation isLoggedIn={isLoggedIn} />
      <RandomThemeButton />
      <BtnAuth isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default DesktopHeader;
