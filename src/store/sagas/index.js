import {all, takeEvery} from 'redux-saga/effects';

import {Types as MoviesTypes} from '~/store/ducks/movies';
import {loadAll} from './movies';

export default function* rootSaga() {
  yield all([takeEvery(MoviesTypes.GET_ALL_REQUEST, loadAll)]);
}
