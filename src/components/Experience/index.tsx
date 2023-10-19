import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container, Title } from "./styles";
import EXPERIENCES_DATA from "../../storage/data/experiences";
import { useThemeContext } from "../../hooks/theme";
// import { Container } from './styles';

const Experience: React.FC = () => {
	const { selectedTheme, theme } = useThemeContext();

	return (
		<Container>
			<Title>Experiencias</Title>
			<VerticalTimeline>
				{EXPERIENCES_DATA.map((exp, index) => (
					<VerticalTimelineElement
						key={index}
						contentStyle={{
							border: `1px solid ${theme.secondary}`,
							boxShadow: "none",
							textAlign: "left",
							padding: "1.3rem 2rem",
							background: selectedTheme === "light" ? "#fff" : "#161018"
						}}
						contentArrowStyle={{
							borderRight: `0.4rem solid ${theme.secondary}`
						}}
						date={exp.date}
						icon={exp.icon}
						iconStyle={{
							background: selectedTheme === "light" ? "#fff" : "#161018",
							fontSize: "1.5rem"
						}}
					>
						<h3>{exp.title}</h3>
						<p>{exp.location}</p>
						<p>{exp.description}</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</Container>
	);
};

export default Experience;
