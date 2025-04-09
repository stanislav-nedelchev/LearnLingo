import * as Yup from 'yup';

// const phoneNumberRegex =
//   /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

// export const AddProfileSchema = Yup.object({
//   name: Yup.string()
//     .min(2, 'Name must be at least 2 characters')
//     .max(20, 'Name must be less than 20 characters')
//     .required('Name is required'),
//   phone: Yup.string()
//     .required('Phone is required')
//     .matches(
//       phoneNumberRegex,
//       'Invalid phone number. Phone must be +380XXXXXXXXX',
//     ),
//   email: Yup.string()
//     .required('Email is required')
//     .email('Invalid email address'),
//   status: Yup.string()
//     .required('Status is required to choose')
//     .oneOf(
//       ['online', 'offline'],
//       "Status must be either 'online' or 'offline'",
//     ),
//   hasPhysicalAddress: Yup.boolean(),
// });

export const RegisterUserSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(20, 'Name must be less than 20 characters')
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

// export const AddContactSchema = Yup.object({
//   name: Yup.string()
//     .min(2, 'Name must be at least 2 characters')
//     .required('Name is required'),
//   number: Yup.string()
//     .min(9, 'Number must be at least 9 characters')
//     .max(13, 'Number must be less than 13 characters')
//     .required('Number is required'),
// });

// export const SearchProductsSchema = Yup.object({
//   searchTerm: Yup.string()
//     .required('Search term is required')
//     .min(2, 'Search term must be at least 2 characters'),
// });
