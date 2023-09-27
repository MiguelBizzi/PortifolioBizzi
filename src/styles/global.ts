import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.primary};
    }

    body {
        background-color: ${({ theme }) => theme.background};
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem 'Montserrat', sans-serif;
    }
`;
