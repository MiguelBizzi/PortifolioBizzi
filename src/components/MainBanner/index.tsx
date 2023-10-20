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

const MainBanner: React.FC = () => {
	const theme = useTheme();

	const handleGoToContact = () => {
		scroller.scrollTo("/contact", {
			duration: 1000,
			smooth: "easeInOutQuint"
		});
	};
	return (
		<MainContainer id="/about">
			<BannerContainer>
				<InformationContainer>
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
					<SelfDescription>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sit officiis. Reprehenderit
						accusantium modi obcaecati. Dolores eveniet officia numquam saepe repellat quas sunt fugiat modi
						pariatur? Cum facere odio totam!
					</SelfDescription>
					<ButtonsContainer>
						<Button
							onClick={handleGoToContact}
							title="Me contate"
							backgroundColor={theme.primary}
							color={theme.text_light}
						/>
						<Button
							title="Ver Portifólio"
							backgroundColor={theme.background}
							color={theme.primary}
							border={theme.primary}
							// icon={<a>aa</a>}
						/>
					</ButtonsContainer>
				</InformationContainer>

				<BannerImageContainer>
					<Image src={Imagem} alt="Imagem do banner" />
					<SocialMediaAside />
				</BannerImageContainer>
			</BannerContainer>
		</MainContainer>
	);
};

export default MainBanner;
