import { css, styled } from "styled-components";

interface ButtonProps {
	backgroundColor: string;
	color: string;
	border?: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	gap: 0.75rem;

	padding: 0.7rem 1.5rem;
	background-color: ${({ backgroundColor }) => backgroundColor};
	color: ${({ color }) => color};

	border: none;

	${({ border }) =>
		border &&
		css`
			border: 1px solid ${border};
		`}

	border-radius: 0.5rem;
	outline: none;
	cursor: pointer;
`;
