import { put, takeLatest } from 'redux-saga/effects';
import { loadedPullRequests } from './action';
import { LOAD_PULL_REQUESTS } from './constant';
import { spinnerStart, spinnerStop } from 'containers/Home/action';

function* loadPullRequestsSaga(action) {
  const params = action.value;
  yield put(spinnerStart());
  const data = yield fetch(`https://api.github.com/repos/reactjs/${params.repoName}/pulls?page=${params.page}&per_page=${params.perPage}`)
    .then(response => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Request failed', error);
    })
  console.log(data)
  yield put(loadedPullRequests(data));
  yield put(spinnerStop());
}

export default function* repoPullRequestSaga() {
  yield takeLatest(LOAD_PULL_REQUESTS, loadPullRequestsSaga)
}