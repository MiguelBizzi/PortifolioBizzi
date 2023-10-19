import styled from "styled-components";
import sizes from "../../styles/devicesSizes";
import { css } from "styled-components";

export const Container = styled.footer`
	margin-top: 6rem;
`;

export const Line = styled.hr`
	opacity: 0.4;
`;

export const Content = styled.div`
	width: 100%;
	padding: 1.5rem 0;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: ${sizes.tablet}) {
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		text-align: center;
	}
`;

interface FooterTextProps {
	isCenter?: boolean;
}

export const FooterText = styled.span<FooterTextProps>`
	width: 33%;
	color: ${({ theme }) => theme.text};

	${({ isCenter }) =>
		isCenter &&
		css`
			text-align: center;
			cursor: pointer;
		`}

	@media (max-width: ${sizes.tablet}) {
		width: 100%;
	}
`;

export const FooterTextColored = styled.span`
	color: ${({ theme }) => theme.primary};
`;

export const IconContainer = styled.div`
	display: flex;
	gap: 1rem;

	justify-content: flex-end;

	font-size: 1.4rem;
	color: ${({ theme }) => theme.primary};

	@media (max-width: ${sizes.tablet}) {
		justify-content: center;
		gap: 1rem;
	}
`;
