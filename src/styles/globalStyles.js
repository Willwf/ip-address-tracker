import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: url("./public/pattern-bg.png");

    height: 100vh;
  }

  .leaflet-container {
    z-index: 0;
  }
`;
