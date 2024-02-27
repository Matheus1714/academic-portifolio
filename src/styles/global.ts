import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
    body{
        background: ${(props) => props.theme.black};
        color: ${(props) => props.theme.white};
        -webkit-font-smoothing: antialiased;
    }
`;
