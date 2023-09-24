// apiSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL, API_KEY} from '../../services/api';

// const API_KEY = '123456abcdefg';
// const API_URL = 'https://api.themoviedb.org/3/movie/upcoming';

// Create an async thunk to fetch upcoming movies
export const fetchVideo = createAsyncThunk(
  'movies/fetchVideo',
  async movieId => {
    const response = await axios.get(`${API_URL}/${movieId}/videos`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  },
);

// Create a slice to manage the state
const videoSlice = createSlice({
  name: 'movies',
  initialState: {
    videos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchVideo.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default videoSlice.reducer;
