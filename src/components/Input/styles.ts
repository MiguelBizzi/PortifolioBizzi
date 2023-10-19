import styled from "styled-components";

interface InputStyleProps {
	isThemeDark: boolean;
}

export const StyledInput = styled.input<InputStyleProps>`
	border: 1px solid ${({ theme, isThemeDark }) => (isThemeDark ? theme.text : "rgba(0, 0, 0, 0.2)")};
	border-radius: 0.4rem;

	padding: 0.8rem 1rem;

	color: ${({ theme }) => theme.text};
	background-color: ${({ theme }) => theme.background};
`;
