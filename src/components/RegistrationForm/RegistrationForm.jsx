import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../api/firebaseConfig.js';
import css from './RegistrationForm.module.css';

const RegistrationForm = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onWrapperClick = event => {
    if (event.target.classList.contains(css.modalWrapper)) onClose();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Регистрация прошла успешно');
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {isOpen && (
        <div className={css.modal}>
          <div className={css.modalWrapper} onClick={onWrapperClick}>
            <div className={css.modalContent}>
              <h2>Регистрация</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Зарегистрироваться</button>
              </form>
              {error && <p>{error}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
