import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, ref, remove, set } from 'firebase/database';
import { db } from '../../api/firebaseConfig.js';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (user, { rejectWithValue }) => {
    try {
      const favoritesRefBase = ref(db, 'favorites/' + user.id);
      const snapshot = await get(favoritesRefBase);
      const value = snapshot.val();
      const data = value ? Object.values(value).map(fav => fav.teacherId) : [];

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addTeacherToFavorites = async (userId, teacherId) => {
  try {
    const favoriteRef = ref(db, `favorites/${userId}/${teacherId}`);
    await set(favoriteRef, {
      teacherId,
      addedAt: Date.now(),
    });
  } catch (error) {
    console.error('Error adding teacher to favorites:', error);
    throw error;
  }
};

export const removeTeacherFromFavorites = async (userId, teacherId) => {
  try {
    const favoriteRef = ref(db, `favorites/${userId}/${teacherId}`);
    await remove(favoriteRef);
  } catch (error) {
    console.error('Error removing teacher from favorites:', error);
    throw error;
  }
};
