import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  languages: [],
  levels: [],
  price: { min: 0, max: 50 },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action) {
      return { ...state, ...action.payload };
    },
    setLanguages(state, action) {
      state.languages = action.payload;
    },
    setLevels(state, action) {
      state.levels = action.payload;
    },
    setPrice(state, action) {
      state.price = { ...state.price, ...action.payload };
    },
  },
});

export const { setFilters, setLanguages, setLevels, setPrice } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
