import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import * as actions from './actions';
import * as types from '../types';

function* searchRequest({ payload }) {
  const { searchText } = payload;
  try {
    const response = yield call(axios.get, `/search/${searchText}`);
    yield put(actions.searchSuccess({ ...response.data }));
  } catch (e) {
    toast.error('Search error!');
    yield put(actions.searchFailure());
  }
}

export default all([takeLatest(types.SEARCH_REQUEST, searchRequest)]);
