import Navigation from '../Navigation/Navigation.jsx';
import BtnAuth from '../BtnAuth/BtnAuth.jsx';
import Logo from '../Logo/Logo.jsx';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectUserDataIsLoggedIn } from '../../redux/auth/authSelector.js';
import RandomThemeButton from '../RandomThemeButton/RandomThemeButton.jsx';

export default function Header() {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <header className={css.header}>
      <Logo />
      <Navigation isLoggedIn={isLoggedIn} />
      <RandomThemeButton />
      <BtnAuth isLoggedIn={isLoggedIn} />
    </header>
  );
}
