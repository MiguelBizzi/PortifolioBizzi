import { styled } from "styled-components";

export const HeaderContainer = styled.header`
	background: ${({ theme }) => theme.background};
	margin-bottom: 2.5rem;
`;

export const HeaderContent = styled.div`
	width: 100%;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const NavContainer = styled.nav`
	display: flex;
	gap: 2rem;
`;

export const NavItem = styled.a`
	cursor: pointer;
	text-align: center;

	transition: color ease-in 0.2s;

	&:hover {
		color: ${({ theme }) => theme.primary};
	}
`;
