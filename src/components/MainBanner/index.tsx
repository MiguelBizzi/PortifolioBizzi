import Typewriter from "typewriter-effect";
import {
	BannerContainer,
	MainContainer,
	InformationContainer,
	BannerImageContainer,
	Title,
	SelfDescription,
	TypeWriterTitle,
	ButtonsContainer,
	Image
} from "./styles";

import Button from "../../components/Button";
import { useTheme } from "styled-components";
import SocialMediaAside from "../../components/SocialMediaAside";
import Imagem from "../../assets/euemomo.jpg";
import { scroller } from "react-scroll";
import Reveal from "../../utils/Reveal";
import { motion } from "framer-motion";

const MainBanner: React.FC = () => {
	const theme = useTheme();

	const handleGoToContact = () => {
		scroller.scrollTo("/contact", {
			duration: 500,
			smooth: true
		});
	};

	const handleSeeCurriculum = () => {
		window.open("../src/assets/Curriculo.pdf", "_blank");
	};

	return (
		<MainContainer id="/about">
			<BannerContainer>
				<InformationContainer>
					<Reveal width="100%">
						<Title>
							Olá, eu sou <br />
							<TypeWriterTitle>
								Desenvolvedor
								<Typewriter
									options={{
										strings: ["Mobile", "Freelancer", "Front-end", "Back-end"],
										autoStart: true,
										loop: true,
										cursorClassName: "teste"
									}}
								/>
							</TypeWriterTitle>
						</Title>
					</Reveal>

					<Reveal delay={0.55}>
						<SelfDescription>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sit officiis. Reprehenderit
							accusantium modi obcaecati. Dolores eveniet officia numquam saepe repellat quas sunt fugiat
							modi pariatur? Cum facere odio totam!
						</SelfDescription>
					</Reveal>

					<ButtonsContainer>
						<Reveal delay={0.65}>
							<Button
								onClick={handleGoToContact}
								title="Me contate"
								backgroundColor={theme.primary}
								color={theme.text_light}
							/>
						</Reveal>
						<Reveal delay={0.75}>
							<Button
								title="Ver Currículo"
								backgroundColor={theme.background}
								color={theme.primary}
								border={theme.primary}
								onClick={handleSeeCurriculum}
							/>
						</Reveal>
					</ButtonsContainer>
				</InformationContainer>
				<BannerImageContainer>
					<motion.div
						animate={{ y: [0, 10, 0] }} // Define a animação de flutuação no eixo Y
						transition={{ duration: 3, repeat: Infinity, ease: "linear" }} // Configura a duração e repetição infinita
					>
						<Image src={Imagem} alt="Imagem do banner" />
					</motion.div>

					<SocialMediaAside />
				</BannerImageContainer>
			</BannerContainer>
		</MainContainer>
	);
};

export default MainBanner;
