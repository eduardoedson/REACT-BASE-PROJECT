import * as types from '../types';

const initialState = {
  searchText: '',
  // isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_SUCCESS: {
      const newState = { ...state };
      newState.searchText = action.payload.searchText;
      // newState.isLoading = false;
      return newState;
    }

    case types.SEARCH_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    case types.SEARCH_REQUEST: {
      const newState = { ...state };
      // newState.isLoading = true;
      return newState;
    }

    default: {
      return state;
    }
  }
}
