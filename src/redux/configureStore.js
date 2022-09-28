import { configureStore } from "@reduxjs/toolkit";
import missionReducer from "./missions/mission";

const store = configureStore({
    reducer: {
        allMissions: missionReducer
    }
});

export default store;
