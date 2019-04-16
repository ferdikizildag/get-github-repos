import { LOAD_REPO, LOADED_REPO } from './constant';

export function loadRepo(data) {
  return {
    type: LOAD_REPO,
    value: data
  };
}

export function loadedRepo(data) {
  return {
    type: LOADED_REPO,
    value: data,
  };
}
