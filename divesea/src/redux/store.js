import { configureStore } from '@reduxjs/toolkit';
import auth from './authSlice/authSlice';
import events from './eventsSlice/eventsSlice';

export const store = configureStore({
  reducer: {
    auth,
    events,
  },
});
