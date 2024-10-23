import { createGlobalStyle } from 'styled-components';
import img from './assets/img.jpg'; 

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        background-image: url(${img});
        background-size: cover; 
        background-position: center; 
        background-repeat: no-repeat;
    }
`;

export default GlobalStyle;