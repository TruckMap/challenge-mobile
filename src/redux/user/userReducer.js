'use strict';

import {
  USER_SELECT
} from '../../constants/actions';

const initial = {
  //...
}

export default function userReducer(state = initial, action) {
  switch (action.type) {
    case USER_SELECT:
      return {
        //...
      }
  }
  
  return state;
}
