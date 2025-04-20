import { useSelector } from 'react-redux';
import { selectUserDataIsLoggedIn } from '../../redux/auth/authSelector.js';
import MobileMenu from '../MobileHeader/MobileHeader.jsx';
import DesktopMenu from '../DesktopHeader/DesktopHeader.jsx';

export default function Header() {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <header>
      <MobileMenu isLoggedIn={isLoggedIn} />
      <DesktopMenu isLoggedIn={isLoggedIn} />
    </header>
  );
}
