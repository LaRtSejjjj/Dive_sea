import { createSlice } from '@reduxjs/toolkit';

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: {
      title: '',
      description: '',
      tag: '',
      money: '',
      date: '',
      file: '',
    },
  },
  reducers: {
    setEvents(state, { payload }) {
      state.events = payload;
    },
  },
});

export const { setEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
