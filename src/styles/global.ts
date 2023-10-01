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

    ::selection {
        background-color: ${({ theme }) => theme.accent}; 
        /* TODO */
        /* color: ${({ theme }) => theme.text};  */
        color: #E2E2F8; 
    }

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        padding: 2.5rem 4rem;
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem 'Montserrat', sans-serif;
        &:focus,
        &:active {
            outline: none;
            border: none;
        }
    }
`;
