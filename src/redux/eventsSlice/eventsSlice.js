import { createSlice } from '@reduxjs/toolkit';

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: {
      status: 'wait',
      title: '',
      description: '',
      tag: '',
      money: '',
      date: '',
      program: '',
      file: '',
      speaker: '',
      timeStart: '',
      timeEnd: '',
      format: '',
      hall: '',
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
