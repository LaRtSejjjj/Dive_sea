import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {
            status: 'wait',
            title: '',
            description: '',
            file: '',
            star: ''
        },
    },
    reducers: {
        setEvents(state, { payload }) {
            state.comments = payload;
        },
    },
});

export const { setComments } = commentsSlice.actions;

export default commentsSlice.reducer;