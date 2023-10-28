import React, { useEffect, useRef } from "react";

import { Container, Title, SkillsContainer, SkillCard, SkillCardText } from "./styles";
import SKILLS_DATA from "../../storage/data/skills";
import { useThemeContext } from "../../hooks/theme";
import Reveal from "../../utils/Reveal";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

const Skills: React.FC = () => {
	const { selectedTheme } = useThemeContext();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();

	const itemVariants: Variants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 }
	};

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			// slideControls.start("visible");
		}
	}, [isInView]);

	return (
		<Container id="/skills">
			<Reveal hasSlide>
				<Title>Habilidades</Title>
			</Reveal>

			<SkillsContainer>
				{SKILLS_DATA.map((skill, index) => (
					<motion.div
						ref={ref}
						key={skill}
						variants={itemVariants}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.2, delay: index * 0.1 }} // Adapte conforme necessário
					>
						<SkillCard isThemeDark={selectedTheme == "dark"} key={skill}>
							<SkillCardText>{skill}</SkillCardText>
						</SkillCard>
					</motion.div>
				))}
			</SkillsContainer>
		</Container>
	);
};

export default Skills;
