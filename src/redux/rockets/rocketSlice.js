import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRocketsData = createAsyncThunk(
    'rockets/fetchRocketsData',
  async () => {
    const response = await fetch(baseURL);

    const data = await response.json();

    const rocketsData = data.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      images: rocket.flickr_images,
      reserved: false,
    }));

    return rocketsData;
  },
)
