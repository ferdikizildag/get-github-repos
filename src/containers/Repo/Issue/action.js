import { LOAD_ISSUES, LOADED_ISSUES } from './constant';

export function loadIssues(data) {
  return {
    type: LOAD_ISSUES,
    value: data
  };
}

export function loadedIssues(data) {
  return {
    type: LOADED_ISSUES,
    value: data,
  };
}
