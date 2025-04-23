import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../api/firebaseConfig.js';

export const apiRegisterUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      return {
        user: {
          name: userCredential.user.displayName,
          email: userCredential.user.email,
          id: userCredential.user.uid,
        },
        token: userCredential.user.accessToken,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const apiLoginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return {
        user: {
          name: userCredential.user.displayName,
          email: userCredential.user.email,
          id: userCredential.user.uid,
        },
        token: userCredential.user.accessToken,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const apiGetCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, currentUser => {
          if (currentUser) {
            const data = {
              user: {
                name: currentUser.displayName,
                email: currentUser.email,
                id: currentUser.uid,
              },
              token: currentUser.accessToken,
            };
            resolve(data);
          } else {
            return reject('Пользователь не аутентифицирован');
          }
        });
      });
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  },
);

export const apiLogoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  },
);
