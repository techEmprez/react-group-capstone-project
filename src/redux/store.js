import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';

export default configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});
