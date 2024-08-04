import { combineReducers } from 'redux';
import postReducer from './postReducer';
import rootReducer from './postReducer';


export default combineReducers({
  posts: postReducer,
});
