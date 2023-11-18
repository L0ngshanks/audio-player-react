import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import mediaReducer from '../slices/mediaSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    media: mediaReducer,
  },
});
