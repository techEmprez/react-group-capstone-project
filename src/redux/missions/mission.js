import { createAsyncThunk } from "@reduxjs/toolkit";

// Actions
const FETCH_MISSIONS = 'spaceTravelers/missions/missions'

// Fetch Missions Api
const fetchApi = 'https://api.spacexdata.com/v3/missions'

const initialState = {
    missionsList: [],
}

export const fetchMissionsList = createAsyncThunk(
    FETCH_MISSIONS,
    async (args, { dispatch }) => {
        const response = await fetch(fetchApi);
        const data = await response.json();
        const missions = Object.keys(data).map((key) => {
            const mission = data[key];
            return {
                mission_id: key,
               ...mission,
            }
        });
        dispatch({
            type: FETCH_MISSIONS,
            payload: missions,
        });
       return missions;

    }
)

const missionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MISSIONS:
            return {
                ...state,
                missionsList: action.payload,
            };
        
        default:
            return state;
           
    }
}


export default missionReducer;
