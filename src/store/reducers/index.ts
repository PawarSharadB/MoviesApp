import {combineReducers} from 'redux';
import moviesReducer from '../../redux/slices/moviesSlice';
import videoReducer from '../../redux/slices/videoSlice';

const rootReducer = combineReducers({
  movies: moviesReducer,
  videos: videoReducer,
});

export default rootReducer;
