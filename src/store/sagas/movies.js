import {put} from 'redux-saga/effects';
import api from '~/services/api';

import {Creators as MovieActions} from '~/store/ducks/movies';

export function* loadAll() {
  try {
    const popular = yield api.get(
      'popular?api_key=eb6e02df77d36c5e8757d4755f4d429c&language=pt-BRpularity.desc',
    );

    const topRated = yield api.get(
      'top_rated?api_key=eb6e02df77d36c5e8757d4755f4d429c&language=pt-BRpularity.desc',
    );

    yield put(MovieActions.getAllMoviesSuccess(popular.data, topRated.data));
    return;
  } catch (error) {
    console.log(error);
  }
}
