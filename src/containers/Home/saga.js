import { put, takeLatest } from 'redux-saga/effects';
import { loadedRepos, spinnerStart, spinnerStop } from './action';
import { LOAD_REPOS } from './constant';

function* loadReposSaga(action) {
  const params = action.value;
  yield put(spinnerStart())
  const data = yield fetch(`https://api.github.com/users/reactjs/repos?page=${params.page}&per_page=${params.perPage}`)
    .then(response => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Request failed', error);
    })
  yield put(loadedRepos(data));
  yield put(spinnerStop())
}

export default function* homeSaga() {
  yield takeLatest(LOAD_REPOS, loadReposSaga)
}