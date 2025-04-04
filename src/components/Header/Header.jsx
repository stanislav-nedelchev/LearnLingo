import Navigation from '../Navigation/Navigation.jsx';
import BtnAuth from '../BtnAuth/BtnAuth.jsx';
import Logo from '../Logo/Logo.jsx';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectUserDataIsLoggedIn } from '../../redux/auth/authSelector.js';

export default function Header() {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <header className={css.header}>
      <Logo />
      <Navigation isLoggedIn={isLoggedIn} />
      <BtnAuth isLoggedIn={isLoggedIn} />
    </header>
  );
}
