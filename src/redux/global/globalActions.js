'use strict';

import {
  GLOBAL_INIT
} from '../../constants/actions';

export function globalInit(platform) {
  return (dispatch, getState) => {
    dispatch({
      type: GLOBAL_INIT,
      platform
    });
  }
}