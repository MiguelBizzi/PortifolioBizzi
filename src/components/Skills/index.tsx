import React from "react";

import { Container, Title, SkillsContainer, SkillCard, SkillCardText } from "./styles";
import SKILLS_DATA from "../../storage/data/skills";

const Skills: React.FC = () => {
	return (
		<Container>
			<Title>Habilidades</Title>

			<SkillsContainer>
				{SKILLS_DATA.map((skill) => (
					<SkillCard key={skill}>
						<SkillCardText>{skill}</SkillCardText>
					</SkillCard>
				))}
			</SkillsContainer>
		</Container>
	);
};

export default Skills;
