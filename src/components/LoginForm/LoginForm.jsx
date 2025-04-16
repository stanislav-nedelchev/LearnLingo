import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserDataIsLoading } from '../../redux/auth/authSelector.js';
import { apiLoginUser } from '../../redux/auth/authOperations.js';
import { LoginUserSchema } from '../../utils/schemas.js';
import Loader from '../Loader/Loader.jsx';
import toast from 'react-hot-toast';
import css from './LoginForm.module.css';

const LoginForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectUserDataIsLoading);

  const handleSubmit = values => {
    dispatch(apiLoginUser(values))
      .unwrap()
      .then(() => {
        onClose();
        navigate('/teachers');
        toast.success('Authorization was successful');
      })
      .catch(error => {
        if (error === 'Firebase: Error (auth/invalid-credential).') {
          toast.error('You have entered an incorrect username or password');
        } else {
          toast.error('Authorization failed. Please try again later.');
        }
      });
  };

  return (
    <div className={css.formBox}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button
            type="button"
            className={css.modalCloseButton}
            onClick={() => onClose()}
          >
            <svg width="32" height="32" className={css.svgClose}>
              <use href="/sprite.svg#close"></use>
            </svg>
          </button>
          <h2 className={css.formTitle}>Log In</h2>
          <p className={css.formText}>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </p>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginUserSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form>
                <label className={css.label}>
                  <Field
                    type="email"
                    name="email"
                    className={css.input}
                    placeholder="Email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    className={css.errorMessage}
                    name="email"
                    component="span"
                  />
                </label>
                <label className={css.label}>
                  <Field
                    type="password"
                    name="password"
                    className={css.input}
                    placeholder="Password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    className={css.errorMessage}
                    name="password"
                    component="span"
                  />
                </label>

                <button
                  type="submit"
                  className={css.formBtn}
                  disabled={isLoading}
                >
                  Log In
                </button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default LoginForm;
