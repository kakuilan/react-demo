import { actionTypes } from './../action';

const initialState = {
  number: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TEST:
      return {
        ...state,
        number: action.number + 1
      };
    default:
      return state;
  }
}