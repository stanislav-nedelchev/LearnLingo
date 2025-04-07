import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../api/firebaseConfig.js';
import css from './LoginForm.module.css';

const LoginForm = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onWrapperClick = event => {
    if (event.target.classList.contains(css.modalWrapper)) onClose();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Вы успешно вошли в систему');
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
              <h2>Авторизация</h2>
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
                <button type="submit">Войти</button>
              </form>
              {error && <p>{error}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
