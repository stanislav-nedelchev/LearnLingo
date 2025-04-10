import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { usersReducer } from './users/usersReducer';
// import { filterReducer } from './filter/filterReducer';
// import { shopReducer } from './shop/shopSlice';
import { authReducer } from './auth/authSlice.js';
import { teachersReducer } from './teachers/slice.js';
// import { contactsReducer } from './phonebook/contactsSlice';

// const usersConfig = {
//   key: 'usersKey',
//   storage,
//   //   whitelist: ["users"], // blacklist: ["showProfilesList"]
// };
const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    // usersData: persistReducer(usersConfig, usersReducer),
    // filter: filterReducer,
    // shop: shopReducer,
    auth: persistReducer(authConfig, authReducer),
    teachers: teachersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
