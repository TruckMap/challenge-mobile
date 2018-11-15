'use strict';

// Actions

import * as globalActions from './global/globalActions';
import * as searchActions from './search/searchActions';
import * as userActions from './user/userActions';


export const actions = [
  globalActions,
  searchActions,
  userActions
];

// Reducers

import global from './global/globalReducer';
import search from './search/searchReducer';
import user from './user/userReducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  global,
  search,
  user
});
