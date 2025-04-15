import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { BookingFormSchema } from '../../utils/schemas.js';
import toast from 'react-hot-toast';
import css from './BookingForm.module.css';

const BookingForm = ({ onClose, teacher }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    teacher: '',
  });

  const teacherFullName = `${teacher.name} ${teacher.surname}`;

  const handleSubmit = (values, { resetForm }) => {
    const updatedData = {
      ...values,
      teacher: teacherFullName,
    };
    setFormData(updatedData);
    console.log(updatedData);
    toast.success('Your booking request has been confirmed.');
    resetForm();
    onClose();
  };

  return (
    <div className={css.formBox}>
      <button
        type="button"
        className={css.modalCloseButton}
        onClick={() => onClose()}
      >
        <svg width="32" height="32" className={css.svgClose}>
          <use href="/sprite.svg#close"></use>
        </svg>
      </button>

      <h2 className={css.formTitle}>Book trial lesson</h2>
      <p className={css.formText}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div className={css.teacherInfo}>
        <img
          src={teacher.avatar_url}
          alt={`A photo of ${teacher.name}`}
          className={css.teacherPhoto}
        />
        <div>
          <p className={css.yourTeacher}>Your teacher</p>
          <p className={css.teacherName}>
            {teacher.name} {teacher.surname}
          </p>
        </div>
      </div>

      <Formik
        initialValues={formData}
        validationSchema={BookingFormSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form className={css.form}>
            <div className={css.radioGroup}>
              <p className={css.radioGroupLabel}>
                What is your main reason for learning English?
              </p>
              <div className={css.radioLabelBox}>
                {[
                  'Career and business',
                  'Lesson for kids',
                  'Living abroad',
                  'Exams and coursework',
                  'Culture, travel or hobby',
                ].map((item, idx) => (
                  <label key={idx} className={css.radioLabel}>
                    <Field
                      type="radio"
                      name="reason"
                      value={item}
                      className={css.radioInput}
                    />
                    <span className={css.customRadio}></span>
                    {item}
                  </label>
                ))}
                <ErrorMessage
                  name="reason"
                  component="span"
                  className={css.errorMessageRadio}
                />
              </div>
            </div>

            <label className={css.label}>
              <Field
                type="text"
                name="name"
                className={css.input}
                placeholder="Full Name"
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
                type="text"
                name="phone"
                className={css.input}
                placeholder="Phone number"
                value={values.phone}
                onChange={handleChange}
              />
              <ErrorMessage
                className={css.errorMessage}
                name="phone"
                component="span"
              />
            </label>

            <button type="submit" className={css.formBtn}>
              Book
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
