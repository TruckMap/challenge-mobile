'use strict';

import {
  SEARCH_AUTOCOMPLETE
} from '../../constants/actions';

const initial = {
};

export default function searchReducer(state = initial, action) {
  switch (action.type) {
    case SEARCH_AUTOCOMPLETE:
      return {
        //...
      }
  }

  return state;
}
