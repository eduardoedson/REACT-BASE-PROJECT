import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    background: #EEE;
  }

  body {
    font-family: sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1 {
    color: ${primaryColor}
  }

  input {
    height: 30px;
    border-radius: 15px;
    border: 2px solid rgba(0, 0, 0, 0.5);
    font-size: 14px;
    padding: 0 20px;

    &:focus {
      border: 2px solid ${primaryColor};
    }
  }
`;

export const Container = styled.section`
  max-width: 75%;
  margin: 30px auto;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
