import { createGlobalStyle } from 'styled-components';
import background from '../../assets/stars.png';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap");
  body {
    color: white;
    font-family: "Pathway Gothic One", sans-serif;
    background-image: url(${background});


  }
`;
export { GlobalStyle };
