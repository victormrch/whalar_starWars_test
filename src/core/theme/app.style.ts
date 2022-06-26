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

/* Principal Font Color */
const fontPrimaryColor = '#ECB900';
const fontSecondaryColor = '#000000';
const fontTerciaryColor = '#FFF';

/* Principal Button Color */
const buttonPrincipalColor = '#2E67FF';
const buttonBackgroundColor = '#173278';

/* Error & Loader Color */
const textInfoColor = '#FCCC6b';
const circleAnimationLoader = '#FCA043';

export {
	fontPrimaryColor,
	fontSecondaryColor,
	fontTerciaryColor,
	GlobalStyle,
	buttonPrincipalColor,
	buttonBackgroundColor,
	textInfoColor,
	circleAnimationLoader,
};
