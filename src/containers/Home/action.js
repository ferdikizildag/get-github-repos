import { LOAD_REPOS, LOADED_REPOS, SPINNER_START, SPINNER_STOP } from './constant';

export function loadRepos(data) {
  return {
    type: LOAD_REPOS,
    value: data
  };
}

export function loadedRepos(data) {
  return {
    type: LOADED_REPOS,
    value: data,
  };
}


export function spinnerStart() {
  return {
    type: SPINNER_START
  };
}
export function spinnerStop() {
  return {
    type: SPINNER_STOP
  };
}