import { createAction, createReducer } from 'redux-act'
import { combineReducers } from 'redux'

export const actions = {
  changePlatform: createAction('change platform')
};

const platform = createReducer({
  [actions.changePlatform]: (state, payload) => payload
}, 'xbox' );

export default combineReducers({
  platform
});
