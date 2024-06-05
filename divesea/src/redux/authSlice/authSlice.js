import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: null,
  },
  reducers: {
    setAuth(state, { payload }) {
      state.auth = payload;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;