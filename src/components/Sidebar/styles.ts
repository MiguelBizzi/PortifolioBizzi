import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


export const SidebarContainer = styled(motion.div)`
    position: relative;
    padding: 2rem;

    height: 100%;
    width: 75%;
    background: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;

    margin-bottom: 1rem;
`;

export const LogoImage = styled.img`
    object-fit: contain;
    width: 2rem;
    height: 2rem;
`;

export const CloseIcon = styled(FaTimes)`
	font-size: 1.5rem;
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