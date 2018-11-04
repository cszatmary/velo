import { combineReducers } from 'redux';
import p5Reducer from './p5Reducer';

export default combineReducers({
  p5: p5Reducer,
});
