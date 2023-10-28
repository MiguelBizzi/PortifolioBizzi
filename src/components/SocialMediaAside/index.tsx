import React from "react";
import { motion } from "framer-motion";

import { IconsContainer, SocialMediaContainer, StyledLinkedinIcon, StyledGitHubIcon } from "./styles";

const SocialMediaAside: React.FC = () => {
	return (
		<SocialMediaContainer>
			<IconsContainer>
				<motion.div
					variants={{
						hidden: { opacity: 0, x: 40 },
						visible: { opacity: 1, x: 1 }
					}}
					initial="hidden"
					animate={"visible"}
					transition={{ duration: 0.5, delay: 0.35 }}
				>
					<motion.div whileHover={{ scale: 1.3 }}>
						<a href="https://linkedin.com/in/miguelbizzi" target="_blank">
							<StyledLinkedinIcon />
						</a>
					</motion.div>
				</motion.div>

				<motion.div
					variants={{
						hidden: { opacity: 0, x: 40 },
						visible: { opacity: 1, x: 1 }
					}}
					initial="hidden"
					animate={"visible"}
					transition={{ duration: 0.5, delay: 0.35 }}
				>
					<motion.div whileHover={{ scale: 1.3 }}>
						<a href="https://github.com/MiguelBizzi" target="_blank">
							<StyledGitHubIcon />
						</a>
					</motion.div>
				</motion.div>
			</IconsContainer>
		</SocialMediaContainer>
	);
};

export default SocialMediaAside;
