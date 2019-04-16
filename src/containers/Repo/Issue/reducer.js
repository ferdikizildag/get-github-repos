import { LOADED_ISSUES } from './constant';

const reducer = (state = { issues: [] }, action) => {
  switch (action.type) {
    case LOADED_ISSUES:
      return { ...state, issues: [...action.value] };
    default:
      return state;
  }
};

export default reducer;