'use strict';

import {
  GLOBAL_INIT
} from '../../constants/actions';

const initial = {
  platform: null
};

export default function globalReducer(state = initial, action) {
  switch (action.type) {  
    case GLOBAL_INIT:
      return {
        ...state,
        platform: action.platform
      };
  }

  return state;
}
