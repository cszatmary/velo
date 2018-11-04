import { TOGGLE_GRID } from '../actions/p5Actions';

export default (state = { isGridVisible: false }, action) => {
  switch (action.type) {
    case TOGGLE_GRID:
      return { ...state, isGridVisible: action.isVisible };
    default:
      return state;
  }
};
