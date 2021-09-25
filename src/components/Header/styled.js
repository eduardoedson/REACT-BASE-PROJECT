import styled from 'styled-components';
import { primaryColor } from '../../styles/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 120px;
`;

export const Title = styled.h1`
  background: ${primaryColor};
  color: white;
  font-size: 30px;
  text-transform: uppercase;
`;
