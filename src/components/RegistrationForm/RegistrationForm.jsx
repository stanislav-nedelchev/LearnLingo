import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { selectUserDataIsLoading } from '../../redux/auth/authSelector.js';
import { apiRegisterUser } from '../../redux/auth/authOperations.js';
import { RegisterUserSchema } from '../../utils/schemas.js';
import Loader from '../Loader/Loader.jsx';
import toast from 'react-hot-toast';
import css from './RegistrationForm.module.css';

const RegistrationForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectUserDataIsLoading);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = values => {
    setFormData(values);

    dispatch(apiRegisterUser(values))
      .unwrap()
      .then(() => {
        onClose();
        navigate('/teachers');
        toast.success('Registration was successful');
      })
      .catch(error => {
        if (error === 'Firebase: Error (auth/email-already-in-use).') {
          toast.error('User with this email already exists');
        } else {
          toast.error('Registration failed. Please try again later.');
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
          <h2 className={css.formTitle}>Registration</h2>
          <p className={css.formText}>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>
          <Formik
            initialValues={formData}
            validationSchema={RegisterUserSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form className={css.form}>
                <label className={css.label}>
                  <Field
                    type="text"
                    name="name"
                    className={css.input}
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    className={css.errorMessage}
                    name="name"
                    component="span"
                  />
                </label>
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
                  Sign Up
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
