import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import cablecar from 'redux-cablecar'
import { createLogger } from 'redux-logger'
import { loggers } from 'redux-act'
import reducers, { appStartup } from 'reducers'

const logger = createLogger({
  ...loggers.reduxLogger
});

export const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    cablecar,
    logger
  )
);

export const createCablecar = (channel, params = undefined) => (
  cablecar.connect( store, channel, params )
);

store.dispatch( appStartup() );
