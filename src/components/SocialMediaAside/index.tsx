import React from "react";
import { motion } from "framer-motion";

import { IconsContainer, SocialMediaContainer, StyledLinkedinIcon, StyledGitHubIcon } from "./styles";

const SocialMediaAside: React.FC = () => {
	return (
		<SocialMediaContainer>
			<IconsContainer>
				<motion.div whileHover={{ scale: 1.3 }}>
					<a href="https://linkedin.com/in/miguelbizzi" target="_blank">
						<StyledLinkedinIcon />
					</a>
				</motion.div>

				<motion.div whileHover={{ scale: 1.3 }}>
					<a href="https://github.com/MiguelBizzi" target="_blank">
						<StyledGitHubIcon />
					</a>
				</motion.div>
			</IconsContainer>
		</SocialMediaContainer>
	);
};

export default SocialMediaAside;
