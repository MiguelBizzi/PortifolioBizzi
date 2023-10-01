import { Header } from "../../components/Header";
import Typewriter from "typewriter-effect";
import {
	BannerContainer,
	MainContainer,
	InformationContainer,
	BannerImageContainer,
	Title,
	SelfDescription,
	TypeWriterTitle,
	ButtonsContainer
} from "./styles";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";

export function Home() {
	const theme = useTheme();

	return (
		<div>
			<Header />

			<MainContainer>
				<BannerContainer>
					<InformationContainer>
						<Title>
							Olá, eu sou <br />
							<TypeWriterTitle>
								Desenvolvedor
								<Typewriter
									options={{
										strings: ["Mobile", "Front-end", "Back-end"],
										autoStart: true,
										loop: true,
										cursorClassName: "teste"
									}}
								/>
							</TypeWriterTitle>
						</Title>
						<SelfDescription>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sit officiis. Reprehenderit
							accusantium modi obcaecati. Dolores eveniet officia numquam saepe repellat quas sunt fugiat
							modi pariatur? Cum facere odio totam!
						</SelfDescription>
						<ButtonsContainer>
							<Button title="Me contate" backgroundColor={theme.primary} color={theme.text_light} />
							<Button
								title="Ver Portifólio"
								backgroundColor={theme.background}
								color={theme.primary}
								border={theme.primary}
								// icon={<a>aa</a>}
							/>
						</ButtonsContainer>
					</InformationContainer>
					<BannerImageContainer>{/* <h1>penis</h1> */}</BannerImageContainer>
				</BannerContainer>
			</MainContainer>
		</div>
	);
}
