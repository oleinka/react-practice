import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        font-size: 62.5%;
    }
    body {
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
    }
`;

export default GlobalStyle;
