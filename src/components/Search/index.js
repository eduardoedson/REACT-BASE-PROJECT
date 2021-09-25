import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as searchActions from '../../store/modules/search/actions';

export default function SearchInput() {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.searchReducer.searchText);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchActions.searchRequest({ searchText: e.target.value }));
  };

  return (
    <input
      type="text"
      onChange={handleSearch}
      value={searchText}
      placeholder="Search"
    />
  );
}
