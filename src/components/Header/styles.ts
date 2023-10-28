import { css, styled } from "styled-components";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
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
	isShown: boolean;
	isDarkMode: boolean;
}

export const NavContainer = styled.nav<NavContainerProps>`
	display: flex;
	gap: 2rem;

	@media (max-width: ${sizes.headerBreakPoint}) {
		${({ isShown }) => css`
			display: ${isShown ? "flex" : "none"};
		`}

		width: 150%;
		position: absolute;

		margin-top: 1.5rem;
		padding-bottom: 2rem;
		bottom: -17rem;

		flex-direction: column;
		align-self: center;

		background-color: ${({ theme }) => theme.background};
		box-shadow: -3px 10px 15px -12px ${({ isDarkMode }) => (isDarkMode ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.75)")};
		-webkit-box-shadow: -3px 10px 15px -12px ${({ isDarkMode }) => (isDarkMode ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.75)")};
		-moz-box-shadow: -3px 10px 15px -12px ${({ isDarkMode }) => (isDarkMode ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.75)")};
	}
`;

export const NavItem = styled(Link)`
	cursor: pointer;
	text-align: center;

	transition: color ease-in 0.2s;

	&:hover {
		color: ${({ theme }) => theme.primary};
	}

	@media (max-width: ${sizes.headerBreakPoint}) {
		align-items: center;
		justify-content: center;
	}
`;

export const ChangeThemeButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: transparent;
	color: ${({ theme }) => theme.text};
`;

export const HamburguerButton = styled.button`
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

export const CloseIcon = styled(FaTimes)`
	font-size: 1.5rem;
`;
