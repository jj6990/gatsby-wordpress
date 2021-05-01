import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
    --primary-color: #054E81;
    --secondary-color: #E84243;
    --black-color: #181918;
    --white-color: #EFEFEF;
    --gray-light: #F6F6F6;
    }

    html, 
    body {
        font-size: 10px;
        overflow-x: hidden;
        width: 100%;
        box-sizing: border-box;
    }

    ul, 
    a {
        list-style: none;
        text-decoration: none;
    }

    .container {
        max-width: 1440px;
        padding: 15px;
        margin: 1rem auto;
        width: 100%; 
        box-sizing: border-box;
    }

    a:visited {
        color: var(--black-color);
    }
`;

export default GlobalStyles;
