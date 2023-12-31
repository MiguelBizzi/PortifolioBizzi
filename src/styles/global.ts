import { createGlobalStyle } from "styled-components";
import sizes from "./devicesSizes";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    ::selection {
        background-color: ${({ theme }) => theme.accent};
        color: ${({ theme }) => theme.text_light};
        outline: none;
    }

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        padding: 2.5rem 8rem 0rem;
        --webkit-font-smoothing: antialiased;

        @media (max-width: 1200px) {
            padding: 2.5rem 4rem 0rem;
        }

        @media (max-width: ${sizes.laptop}) {
            padding: 2.5rem 2rem 0rem;
        }

        @media (max-width: ${sizes.tablet}) {
            padding: 2.5rem 2rem 0rem;
        }

        @media (max-width: ${sizes.mobileS}) {
            padding: 2rem 1rem 0rem;
        }
        
    }

    body, input, textarea, button {
        font: 400 1rem 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
        outline: none;
        border: none;
        background-color: transparent;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
