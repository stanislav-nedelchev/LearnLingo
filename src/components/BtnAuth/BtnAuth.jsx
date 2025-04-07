import { useState } from 'react';
import css from './BtnAuth.module.css';
import LoginForm from '../LoginForm/LoginForm.jsx';
import RegistrationForm from '../RegistrationForm/RegistrationForm.jsx';

const BtnAuth = ({ isLoggedIn }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <div className={css.btnAuth}>
          <p className={css.btnLogIn}>
            Hello, <span className={css.userName}>User</span>
          </p>
          <button className={css.btnReg}>Log Out</button>
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
