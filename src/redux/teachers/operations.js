import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, query, ref, orderByKey } from 'firebase/database';
import { db } from '../../api/firebaseConfig.js';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (_, { rejectWithValue }) => {
    try {
      const dbRef = ref(db);
      const dataQuery = query(dbRef, orderByKey());
      const snapshot = await get(dataQuery);

      const data = snapshot.val();

      if (!data || !data.teachers) {
        return [];
      }

      return data.teachers;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
