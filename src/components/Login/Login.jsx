// src/Login.js

import { signInWithEmailAndPassword } from 'firebase/auth';

import { useState } from 'react';
import { auth } from '../../api/firebaseConfig.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Вы успешно вошли в систему');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
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
  );
}

export default Login;
