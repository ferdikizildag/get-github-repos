import { put, takeLatest } from 'redux-saga/effects';
import { loadedIssues } from './action';
import { LOAD_ISSUES } from './constant';
import { spinnerStart, spinnerStop } from 'containers/Home/action';

function* loadIssuesSaga(action) {
  const params = action.value;
  yield put(spinnerStart());
  const data = yield fetch(`https://api.github.com/repos/reactjs/${params.repoName}/issues?page=${params.page}&per_page=${params.perPage}`)
    .then(response => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Request failed', error);
    })
  console.log(data)
  yield put(loadedIssues(data));
  yield put(spinnerStop());
}

export default function* repoIssueSaga() {
  yield takeLatest(LOAD_ISSUES, loadIssuesSaga)
}