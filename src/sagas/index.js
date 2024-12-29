import { all } from 'redux-saga/effects';

import helloSaga from './helloSaga';
import cartSage from './cartSaga';

export const rootSaga = function* () {
  yield all([helloSaga(), cartSage()]);
};

export default rootSaga;
