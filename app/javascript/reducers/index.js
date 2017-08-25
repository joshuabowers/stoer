import { combineReducers } from 'redux'
import app from './app'

export const appStartup = () => (
  dispatch => (
    true
  )
);

export default combineReducers({
  app
});
