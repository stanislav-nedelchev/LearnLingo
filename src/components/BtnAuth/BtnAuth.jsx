import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../../redux/auth/authSelector.js';
import { apiLogoutUser } from '../../redux/auth/authOperations.js';
import RegistrationForm from '../RegistrationForm/RegistrationForm.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';
import Modal from '../Modal/Modal.jsx';
import css from './BtnAuth.module.css';

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
          <p className={css.userNameText}>
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
          <Modal
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
          >
            <LoginForm onClose={() => setIsLoginModalOpen(false)} />
          </Modal>

          <button
            className={css.btnReg}
            type="button"
            onClick={() => setIsRegistrationModalOpen(true)}
          >
            Registration
          </button>
          <Modal
            isOpen={isRegistrationModalOpen}
            onClose={() => setIsRegistrationModalOpen(false)}
          >
            <RegistrationForm
              onClose={() => setIsRegistrationModalOpen(false)}
            />
          </Modal>
        </div>
      )}
    </>
  );
};

export default BtnAuth;
