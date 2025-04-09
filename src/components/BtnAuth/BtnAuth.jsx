import { useState } from 'react';
import css from './BtnAuth.module.css';
import LoginForm from '../LoginForm/LoginForm.jsx';
import RegistrationForm from '../RegistrationForm/RegistrationForm.jsx';
import { selectUserData } from '../../redux/auth/authSelector.js';
import { useDispatch, useSelector } from 'react-redux';
import { apiLogoutUser } from '../../redux/auth/authOperations.js';

const BtnAuth = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const handleLogout = () => {
    dispatch(apiLogoutUser());
    // dispatch(clearFavorites());
  };

  return (
    <>
      {isLoggedIn ? (
        <div className={css.btnAuth}>
          <p className={css.btnLogIn}>
            Hello, <span className={css.userName}>{user.name}</span>
          </p>
          <button className={css.btnReg} type="button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <div className={css.btnAuth}>
          <button
            className={css.btnLogIn}
            type="button"
            onClick={() => setIsLoginModalOpen(true)}
          >
            <svg width="20" height="20" className={css.svgLogIn}>
              <use href="/sprite.svg#login"></use>
            </svg>
            Log In
          </button>
          {isLoginModalOpen && (
            <LoginForm
              isOpen={isLoginModalOpen}
              onClose={() => setIsLoginModalOpen(false)}
            />
          )}

          <button
            className={css.btnReg}
            type="button"
            onClick={() => setIsRegistrationModalOpen(true)}
          >
            Registration
          </button>
          {isRegistrationModalOpen && (
            <RegistrationForm
              isOpen={isRegistrationModalOpen}
              onClose={() => setIsRegistrationModalOpen(false)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default BtnAuth;
