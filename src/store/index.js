import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'

import sagas from './sagas'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
)
sagaMiddleware.run(sagas)
