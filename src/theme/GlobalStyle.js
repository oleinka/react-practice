import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
    *,*::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Montserrat', sans-serif;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
    }
`;

export default GlobalStyle;
