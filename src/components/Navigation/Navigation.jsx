import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = ({ isLoggedIn }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  return (
    <nav className={css.navigation}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/teachers" end>
        Teachers
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/favorites">
          Favorites
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
