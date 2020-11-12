import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import postsThunk from './postsThunk';

const rootReducer = combineReducers({
  counter,
  todos,
  postsThunk
});

export default rootReducer;