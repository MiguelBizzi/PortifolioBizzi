import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        padding: 2.5rem 4rem;
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem 'Montserrat', sans-serif;
    }
`;
