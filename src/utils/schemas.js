import * as Yup from 'yup';

export const RegisterUserSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(15, 'Name must be less than 15 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password length must be at least 8 characters')
    .required('Password is required'),
});

export const LoginUserSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password length must be at least 8 characters')
    .required('Password is required'),
});

export const BookingFormSchema = Yup.object({
  reason: Yup.string().required('Please select a reason'),
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .min(8, 'Name must be at least 8 characters')
    .matches(/^\d+$/, 'Phone number must contain only digits')
    .required('Phone is required'),
});
