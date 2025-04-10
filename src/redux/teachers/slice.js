import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers } from './operations';

const initialState = {
  teachers: [],
  //   totalTeachers: null,
  //   totalPages: null,
  //   page: null,
  //   favouritesTeachers: [],
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
        state.totalTeachers = action.payload.totalTeachers;
        state.totalPages = action.payload.totalPages;
        state.page = Number(action.payload.page);
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
