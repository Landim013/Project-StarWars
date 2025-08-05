import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
    @font-face {
    font-family: 'StarJedi';
    src: url('/src/assets/fonts/Starjhol.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
  }

  input, button {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
 



`;

export default GlobalStyle;
