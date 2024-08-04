// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Named import
import { composeWithDevTools } from 'redux-devtools-extension';
import postReducer from './reducers/postReducer';

const rootReducer = combineReducers({
  posts: postReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
