import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_SWITCH
} from '../constants/sidebarConstants';

const initialState = {
 open: true
};

export function sidebar(state = initialState, action) {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return {...state, open: true}
    case SIDEBAR_CLOSE:
      return {...state, open: false}
    case SIDEBAR_SWITCH:
      return {...state, open: !state.open}
    default:
      return state
  }
}