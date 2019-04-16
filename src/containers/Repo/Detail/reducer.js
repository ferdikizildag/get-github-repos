import { LOADED_REPO } from './constant';

const reducer = (state = { currentRepo: {} }, action) => {
  switch (action.type) {
    case LOADED_REPO:
      return { ...state, currentRepo: { ...action.value } };
    default:
      return state;
  }
};

export default reducer;