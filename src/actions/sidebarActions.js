import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_SWITCH
} from '../constants/sidebarConstants';

export const sidebarOpen = () => ({ type: SIDEBAR_OPEN });
export const sidebarClose = () => ({ type: SIDEBAR_CLOSE });
export const sidebarSwitch = () => ({ type: SIDEBAR_SWITCH });