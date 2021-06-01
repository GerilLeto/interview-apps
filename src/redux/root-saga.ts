import { call, spawn, all } from 'redux-saga/effects';
import { UISaga } from './ui/saga';

export function* rootSaga() {
  const sagas = [
    UISaga,
  ];
  try {
    yield all(
      sagas.map((saga) =>
        spawn(function*() {
          while (true) {
            yield call(saga);
            break;
          }
        }),
      ),
    );
  } catch (e) {
    console.log(e);
  }
}