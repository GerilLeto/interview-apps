import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

export function getStore() {
  const sagaMiddleware = createSagaMiddleware({
    onError: (error:Error) => {
      console.error('sagas error', error);
    },
  });
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);

  return store;
}