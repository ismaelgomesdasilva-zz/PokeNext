import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family:Helvetica, Sans-Serif;
    box-sizing: border-box;
  }
  .main-container{
  min-height: 70vh;
  }
`;

export default GlobalStyle;
