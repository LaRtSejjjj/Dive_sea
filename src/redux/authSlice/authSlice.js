import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setAuth(state, { payload }) {
      state.user = payload;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
