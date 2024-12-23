import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchMFEs } from '../api';
import { loadingOff, loadingOn } from '../reducers/loader';
import { mfeFetchSuccess, mfeFetchFailure } from '../reducers/dashboard';
import { showAlert } from '../reducers/modal';
import { fetchMFEAction } from '../actions';
import { ALERT_TYPES } from '../constants';

const mfeListSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    const data = yield call(fetchMFEs, payload);
    yield put(mfeFetchSuccess(data));
  } catch (error) {
    yield put(mfeFetchFailure());
    yield put(showAlert({ type: ALERT_TYPES.ERROR, message: error.message }));
  }
  yield put(loadingOff());
};

const dashboardSaga = function* () {
  yield takeLatest(fetchMFEAction.type, mfeListSagaHandler);
};

export default dashboardSaga;
