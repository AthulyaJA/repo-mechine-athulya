// redux/countriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    allCountries: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchCountriesStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    fetchCountriesSuccess(state, action) {
      state.status = 'succeeded';
      state.allCountries = action.payload;
    },
    fetchCountriesFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  fetchCountriesStart,
  fetchCountriesSuccess,
  fetchCountriesFailure,
} = countriesSlice.actions;

export default countriesSlice.reducer;
