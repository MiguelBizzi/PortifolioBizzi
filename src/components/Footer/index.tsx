import React from "react";

import { Container, Content, IconContainer, Line, FooterText } from "./styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
	return (
		<Container>
			<Line />

			<Content>
				<FooterText>Todos direitos reservados</FooterText>

				<FooterText isCenter>Miguel Bizzi</FooterText>

				<IconContainer style={{ width: "33%" }}>
					<a href="https://linkedin.com/in/miguelbizzi" target="_blank">
						<FaLinkedin />
					</a>
					<a href="https://github.com/MiguelBizzi" target="_blank">
						<FaGithub />
					</a>
				</IconContainer>
			</Content>
		</Container>
	);
};

export default Footer;
