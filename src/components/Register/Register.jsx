// src/Register.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../api/firebaseConfig.js';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Регистрация прошла успешно');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
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
  );
}

export default Register;
