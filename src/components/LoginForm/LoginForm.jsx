// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useState } from 'react';
// import { auth } from '../../api/firebaseConfig.js';
// import css from './LoginForm.module.css';

// const LoginForm = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const onWrapperClick = event => {
//     if (event.target.classList.contains(css.modalWrapper)) onClose();
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert('Вы успешно вошли в систему');
//       onClose();
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className={css.modal}>
//           <div className={css.modalWrapper} onClick={onWrapperClick}>
//             <div className={css.modalContent}>
//               <h2>Авторизация</h2>
//               <form onSubmit={handleSubmit}>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Пароль"
//                   value={password}
//                   onChange={e => setPassword(e.target.value)}
//                   required
//                 />
//                 <button type="submit">Войти</button>
//               </form>
//               {error && <p>{error}</p>}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default LoginForm;

import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/authOperations.js';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './LoginForm.module.css';
import { LoginUserSchema } from '../../utils/schemas.js';

const LoginForm = ({ isOpen, onClose }) => {
  const INITIAL_VALUES = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const onWrapperClick = event => {
    if (event.target.classList.contains(css.modalWrapper)) onClose();
  };

  const handleSubmit = values => {
    dispatch(apiLoginUser(values))
      .unwrap()
      .catch(error => {
        console.log(error);

        if (error === 'Firebase: Error (auth/invalid-credential).') {
          alert('You have entered an incorrect username or password');
        }
      });
    onClose();
    // actions.resetForm();
  };

  return (
    <>
      {isOpen && (
        <div className={css.modal}>
          <div className={css.modalWrapper} onClick={onWrapperClick}>
            <div className={css.modalContent}>
              <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={LoginUserSchema}
                onSubmit={handleSubmit}
              >
                <Form className={css.form}>
                  <label className={css.label}>
                    <span>Email:</span>
                    <Field
                      type="text"
                      name="email"
                      className={css.input}
                      placeholder="example.email@example.com"
                    />
                    <ErrorMessage
                      className={css.errorMessage}
                      name="email"
                      component="span"
                    />
                  </label>
                  <label className={css.label}>
                    <span>Password:</span>
                    <Field
                      type="password"
                      name="password"
                      className={css.input}
                      placeholder="Enter your password"
                    />
                    <ErrorMessage
                      className={css.errorMessage}
                      name="password"
                      component="span"
                    />
                  </label>

                  <button type="submit">LogIn</button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
