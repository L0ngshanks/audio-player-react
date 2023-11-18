// createSlice() function generates action creators and action types that correspond to the reducers and state.
import { createSlice } from '@reduxjs/toolkit';
// json
import mediaJSON from '../assets/data/media.json';

const initialState = {
  path: '../assets/media/',
  media: mediaJSON.media,
  status: null,
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    getMedia: (state) => {
      state.status = 'loading';
    },
    getMediaSuccess: (state, { payload }) => {
      state.media = payload;
      state.status = 'success';
    },
    getMediaFailure: (state) => {
      state.status = 'failure';
    },
  },
});

export const { getMedia, getMediaSuccess, getMediaFailure } = mediaSlice.actions;

export default mediaSlice.reducer;
