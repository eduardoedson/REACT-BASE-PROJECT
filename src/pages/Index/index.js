import React from 'react';
import { useSelector } from 'react-redux';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';

export default function Index() {
  const isLoading = useSelector((state) => state.searchReducer.isLoading);
  const searchText = useSelector((state) => state.searchReducer.searchText);

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Hello World!</Title>
      {searchText}
    </Container>
  );
}
