import styled from "styled-components";
import sizes from "../../styles/devicesSizes";

interface InputStyleProps {
	isThemeDark: boolean;
}

export const StyledTextArea = styled.textarea<InputStyleProps>`
	border: 1px solid ${({ theme, isThemeDark }) => (isThemeDark ? theme.text : "rgba(0, 0, 0, 0.2)")};
	border-radius: 0.4rem;

	padding: 1rem;

	color: ${({ theme }) => theme.text};
	background-color: ${({ theme }) => theme.background};

	resize: none;

	@media (max-width: ${sizes.tablet}) {
		padding: 1rem 1rem 5rem;
	}
`;
