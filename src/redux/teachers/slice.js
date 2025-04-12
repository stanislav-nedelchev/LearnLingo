import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers, fetchTeachersWithFilters } from './operations';

const initialState = {
  teachers: [],
  //   totalTeachers: null,
  //   totalPages: null,
  //   page: null,
  //   favouritesTeachers: [],
  lastKey: null,
  error: null,
  loading: false,
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.teachers = action.payload.teachers;
        // state.teachers = [...state.teachers, ...action.payload.teachers];
        state.lastKey = action.payload.lastKey;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTeachersWithFilters.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachersWithFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.teachers = action.payload;
      })
      .addCase(fetchTeachersWithFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
