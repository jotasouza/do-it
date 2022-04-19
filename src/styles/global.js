import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
}

:root{
    --background-color: #53ba83;
    --input-background-color: #fff;
    --color-icons: #0c0636;
    --color-black: #0c0d0d;
    --color-alert: #d41e45;
    --color-orange: #e86e1c;
    --color-border-input: #666360;
}

body{
    background-color: var(--background-color);
    color: var(--color-icons);
}

body, input, button{
    font-family: 'PT Serif', serif;
    font-size: 1rem;
}

h1, h2, h3, h4, h5, h6{
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
}

button{
    cursor: pointer;
}

button:hover{
    filter: brightness(90%);
}

`;
