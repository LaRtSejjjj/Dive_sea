import { createSlice } from '@reduxjs/toolkit';

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: null,
  },
  reducers: {
    setEvents(state, { payload }) {
      state.events = payload;
    },
  },
});

export const { setEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
