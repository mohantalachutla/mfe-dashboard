import { all } from 'redux-saga/effects';

import helloSaga from './helloSaga';
import authSaga from './authSaga';
import dashboardSaga from './dashboard';

export const rootSaga = function* () {
  yield all([helloSaga(), authSaga(), dashboardSaga()]);
};

export default rootSaga;
