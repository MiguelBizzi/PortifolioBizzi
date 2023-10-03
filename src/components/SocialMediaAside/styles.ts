import { styled } from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const SocialMediaContainer = styled.aside`
	position: absolute;
	right: 0;
    top: 50%;
    transform: translateY(-50%);

`;

export const IconsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 1.4rem;
    color: ${({ theme }) => theme.primary};
    font-size: 1.6rem;
`;

export const StyledLinkedinIcon = styled(FaLinkedin)`
`;

export const StyledGitHubIcon = styled(FaGithub)`

`;
