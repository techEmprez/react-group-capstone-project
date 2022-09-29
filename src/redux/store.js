import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';
import missionReducer from './missions/mission';

export default configureStore({
  reducer: {
    rocket: rocketReducer,
    allMissions: missionReducer,
  },
});
