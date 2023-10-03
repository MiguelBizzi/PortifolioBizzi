import React from "react";

import { IconsContainer, SocialMediaContainer, StyledLinkedinIcon, StyledGitHubIcon } from "./styles";

const SocialMediaAside: React.FC = () => {
	return (
		<SocialMediaContainer>
			<IconsContainer>
				<a href="https://linkedin.com/in/miguelbizzi" target="_blank">
					<StyledLinkedinIcon />
				</a>
				<a href="https://github.com/MiguelBizzi" target="_blank">
					<StyledGitHubIcon />
				</a>
			</IconsContainer>
		</SocialMediaContainer>
	);
};

export default SocialMediaAside;
