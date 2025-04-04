import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <Link className={css.logo} to={'/'}>
      <svg width="28" height="28">
        <use href="/sprite.svg#logo"></use>
      </svg>
      <p className={css.logoTitle}>LearnLingo</p>
    </Link>
  );
};

export default Logo;
