import { applyMiddleware, createStore } from "redux";
import getListOfRosterReducer from './get-data/getListOfRoster.reducer';
import { watcherSaga } from './get-data/getListOfRoster.saga'
import createSagaMiddleware from 'redux-saga';

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
  
    const store = createStore(
      getListOfRosterReducer,
      applyMiddleware(sagaMiddleware)
    )
  
    sagaMiddleware.run(watcherSaga);
  
    return store;
}