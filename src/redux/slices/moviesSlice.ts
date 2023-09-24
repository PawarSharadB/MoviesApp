import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL, API_KEY} from '../../services/api';

export const fetchUpcomingMovies = createAsyncThunk(
  'movies/fetchUpcomingMovies',
  async () => {
    const response = await axios.get(`${API_URL}/upcoming`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    upcomingMovies: [],
    status: 'idle', // or 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUpcomingMovies.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.upcomingMovies = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
