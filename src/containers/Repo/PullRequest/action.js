import { LOAD_PULL_REQUESTS, LOADED_PULL_REQUESTS } from './constant';

export function loadPullRequests(data) {
  return {
    type: LOAD_PULL_REQUESTS,
    value: data
  };
}

export function loadedPullRequests(data) {
  return {
    type: LOADED_PULL_REQUESTS,
    value: data,
  };
}
