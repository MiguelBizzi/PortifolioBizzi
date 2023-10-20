import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoadingContainer = styled.div`
	width: 1rem;
	height: 1rem;

	border: 0.2rem solid;
	border-color: ${({ theme }) => theme.text_light} transparent transparent transparent;
	border-radius: 50%;
	animation: ${rotateAnimation} 1.2s linear infinite;
`;
