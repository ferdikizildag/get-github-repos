import { put, takeLatest } from 'redux-saga/effects';
import { loadedRepo } from './action';
import { spinnerStart, spinnerStop } from 'containers/Home/action';

import { LOAD_REPO } from './constant';

function* loadRepoSaga(action) {
  const repoName = action.value;
  yield put(spinnerStart());
  const data = yield fetch(`https://api.github.com/repos/reactjs/${repoName}`)
    .then(response => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Request failed', error);
    })
  console.log(data)
  yield put(loadedRepo(data));
  yield put(spinnerStop());
}

export default function* repoDetailSaga() {
  yield takeLatest(LOAD_REPO, loadRepoSaga)
}