import { put, fork, take } from 'redux-saga/effects';
// import { fetchCurrentTime } from './../../utils/fetch';
import { getCurrentTime, setCurrentTime } from './index';

export function* watchFetchCurrentTime() {
  while (true) {
    try {
      yield take(getCurrentTime);
      // const res = yield call(fetchCurrentTime);
      yield put(setCurrentTime(123));
    } catch (err) {
      console.log('获取系统时间异常', err);
    }
  }
}

export function* UISaga() {
  yield fork(watchFetchCurrentTime);
}