import { LOADED_PULL_REQUESTS } from './constant';

const reducer = (state = { pullRequests: [] }, action) => {
  switch (action.type) {
    case LOADED_PULL_REQUESTS:
      return { ...state, pullRequests: [...action.value] };
    default:
      return state;
  }
};

export default reducer;