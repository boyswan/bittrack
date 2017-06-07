import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import sagas from './sagas'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagas)
