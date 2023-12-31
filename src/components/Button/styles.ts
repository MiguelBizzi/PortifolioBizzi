import { css, styled } from "styled-components";
import sizes from "../../styles/devicesSizes";

interface ButtonProps {
	backgroundcolor: string;
	color: string;
	border?: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	gap: 0.75rem;

	padding: 0.7rem 1.5rem;
	background-color: ${({ backgroundcolor }) => backgroundcolor};
	color: ${({ color }) => color};

	${({ border }) =>
		border &&
		css`
			border: 1px solid ${border};
		`}

	border-radius: 0.5rem;

	@media (max-width: ${sizes.mobileS}) {
		font-size: 0.9rem;
	}
`;
