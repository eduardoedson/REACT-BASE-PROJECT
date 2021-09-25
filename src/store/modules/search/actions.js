import * as types from '../types';

export function searchRequest(payload) {
  return {
    type: types.SEARCH_REQUEST,
    payload,
  };
}

export function searchSuccess(payload) {
  return {
    type: types.SEARCH_REQUEST,
    payload,
  };
}

export function searchFailure(payload) {
  return {
    type: types.SEARCH_REQUEST,
    payload,
  };
}
