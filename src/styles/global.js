import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: monospace;

    }

    button{
        cursor: pointer;
    }

    :root{
        --darkblue: #141259;
        --blue: #204F8C;
        --black: #232526;
        --darkgray: #878A8C;
        --gray: #B0BBBF;
    }
`