import { LOADED_REPOS, SPINNER_START, SPINNER_STOP } from './constant';

const reducer = (state = { repos: [], requestCount: 0 }, action) => {
  switch (action.type) {
    case LOADED_REPOS:
      return { ...state, repos: [...action.value] };
    case SPINNER_START:
      return { ...state, requestCount: state.requestCount + 1 }
    case SPINNER_STOP:
      var count = state.requestCount;
      var newCount = count - 1;
      if (newCount < 0) {
        newCount = 0;
      }
      return { ...state, requestCount: newCount }
    default:
      return state;
  }
};

export default reducer;