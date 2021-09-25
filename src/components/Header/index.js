import React from 'react';
import { Nav, Title } from './styled';
import SearchInput from '../Search';

export default function Header() {
  return (
    <Nav>
      <Title>React Base Project</Title>
      <SearchInput />
    </Nav>
  );
}
