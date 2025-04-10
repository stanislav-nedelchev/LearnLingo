import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { selectUserDataIsLoading } from '../../redux/auth/authSelector.js';
import { apiLoginUser } from '../../redux/auth/authOperations.js';
import { LoginUserSchema } from '../../utils/schemas.js';
import Loader from '../Loader/Loader.jsx';
import toast from 'react-hot-toast';
import css from './LoginForm.module.css';

const RegistrationForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectUserDataIsLoading);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = values => {
    setFormData(values);

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
            initialValues={formData}
            validationSchema={LoginUserSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form>
                <label className={css.label}>
                  <Field
                    type="text"
                    name="email"
                    className={css.input}
                    placeholder="Email"
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

export default RegistrationForm;
