import { call, put, takeLatest } from 'redux-saga/effects';

import { getCart } from '../api';
import { loadingOff, loadingOn } from '../reducers/loader';
import { cartSuccess, cartFailure } from '../reducers/cart';
import { showAlert } from '../reducers/modal';
import { fetchCartAction, checkoutCartAction } from '../actions';
import { ALERT_TYPES } from '../constants';

const fetchCartSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    const data = yield call(getCart, payload);
    yield put(cartSuccess(data));
  } catch (error) {
    yield put(cartFailure());
    yield put(showAlert({ type: ALERT_TYPES.ERROR, message: error.message }));
  }
  yield put(loadingOff());
};

const checkoutCartSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    const data = yield call(getCart, payload);
    yield put(cartSuccess(data));
  } catch (error) {
    yield put(cartFailure());
    yield put(showAlert({ type: ALERT_TYPES.ERROR, message: error.message }));
  }
  yield put(loadingOff());
};

const wishlistSaga = function* () {
  yield takeLatest(fetchCartAction.type, fetchCartSagaHandler);
  yield takeLatest(checkoutCartAction.type, checkoutCartSagaHandler);
};

export default wishlistSaga;
