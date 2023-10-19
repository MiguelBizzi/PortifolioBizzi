import React from "react";

import { Container, Title, SkillsContainer, SkillCard, SkillCardText } from "./styles";
import SKILLS_DATA from "../../storage/data/skills";
import { useThemeContext } from "../../hooks/theme";

const Skills: React.FC = () => {
	const { selectedTheme } = useThemeContext();

	return (
		<Container id="/skills">
			<Title>Habilidades</Title>

			<SkillsContainer>
				{SKILLS_DATA.map((skill) => (
					<SkillCard isThemeDark={selectedTheme == "dark"} key={skill}>
						<SkillCardText>{skill}</SkillCardText>
					</SkillCard>
				))}
			</SkillsContainer>
		</Container>
	);
};

export default Skills;
