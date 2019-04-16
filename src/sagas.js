import { all } from 'redux-saga/effects';
import homeSaga from 'containers/Home/saga';
import repoDetailSaga from 'containers/Repo/Detail/saga';
import repoPullRequestSaga from 'containers/Repo/PullRequest/saga';
import repoIssueSaga from 'containers/Repo/Issue/saga';

export default function* sagas() {
  yield all([
    homeSaga(),
    repoDetailSaga(),
    repoPullRequestSaga(),
    repoIssueSaga(),
  ]);
}
