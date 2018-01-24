import { combineReducers } from 'redux';
import item from './cartReducer';

export default combineReducers({
  item: item,
});
