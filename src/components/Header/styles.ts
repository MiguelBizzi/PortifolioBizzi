import { styled } from "styled-components";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import sizes from "../../styles/devicesSizes";

export const HeaderContainer = styled.header`
	background: ${({ theme }) => theme.background};
	margin-bottom: 2.5rem;
`;

export const HeaderContent = styled.div`
	position: relative;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media (max-width: ${sizes.headerBreakPoint}) {
		height: 1rem;
		flex-direction: column;
		align-items: flex-end;
	}
`;

interface NavContainerProps {
    isDarkMode: boolean;
}

export const NavContainer = styled.nav<NavContainerProps>`
	display: flex;
	gap: 2rem;

	@media (max-width: ${sizes.headerBreakPoint}) {
        display: none;
	}
`;

export const NavItem = styled(Link)`
	cursor: pointer;
	text-align: center;

	transition: color ease-in 0.2s;

	&:hover {
		color: ${({ theme }) => theme.primary};
	}
`;

export const ChangeThemeButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: transparent;
	color: ${({ theme }) => theme.text};
`;

export const HamburguerButton = styled.div`
	display: none;

	background-color: transparent;
	color: ${({ theme }) => theme.text};
	font-size: 2rem;

	@media (max-width: ${sizes.headerBreakPoint}) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const HamburguerIcon = styled(BiMenu)``;

