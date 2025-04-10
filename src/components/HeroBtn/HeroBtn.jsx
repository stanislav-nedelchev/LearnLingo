import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserDataIsLoggedIn } from '../../redux/auth/authSelector.js';
import RegistrationForm from '../RegistrationForm/RegistrationForm.jsx';
import Modal from '../Modal/Modal.jsx';
import css from './HeroBtn.module.css';

const HeroBtn = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <button
          className={css.heroBtn}
          type="button"
          onClick={() => navigate('/teachers')}
        >
          Get a Tutor
        </button>
      ) : (
        <>
          <button
            className={css.heroBtn}
            type="button"
            onClick={() => setIsRegistrationModalOpen(true)}
          >
            Get started
          </button>
          <Modal
            isOpen={isRegistrationModalOpen}
            onClose={() => setIsRegistrationModalOpen(false)}
          >
            <RegistrationForm
              onClose={() => setIsRegistrationModalOpen(false)}
            />
          </Modal>
        </>
      )}
    </>
  );
};

export default HeroBtn;
