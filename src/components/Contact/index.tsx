import React, { useRef, useState } from "react";

import {
	ContactContainer,
	Title,
	TitlePrimary,
	Description,
	Content,
	InfoContainer,
	Form,
	Row,
	ButtonRow,
	InputsContainer
} from "./styles";
import CardContact from "../CardContact";
import { SubmitHandler, FormHandles } from "@unform/core";
import Input from "../Input";
import Button from "../Button";
import { useTheme } from "styled-components";
import Textarea from "../Textarea";
import emailJs from "@emailjs/browser";
import Reveal from "../../utils/Reveal";
import CARD_DATA from "../../storage/data/contactCards";
import { toast } from "react-toastify";
import { useThemeContext } from "../../hooks/theme";

interface FormData {
	name: string;
	email: string;
	message: string;
}

const Contact: React.FC = () => {
	const [isSendingForm, setIsSendingForm] = useState<boolean>(false);

	const formRef = useRef<FormHandles>(null);
	const { selectedTheme } = useThemeContext();
	const theme = useTheme();

	const handleSubmit: SubmitHandler<FormData> = (data) => {
		const templateParams = {
			from_name: data.name,
			email: data.email,
			message: data.message
		};

		setIsSendingForm(true);

		emailJs
			.send("service_q956f2i", "template_wmbwl96", templateParams, "Q6nURcDaXGQbNuH-K")
			.then((response) => {
				if (response.status === 200) {
					formRef.current?.reset();
					toast.success("Email enviado com sucesso!", {
						theme: selectedTheme as "light" | "dark"
					});
				} else {
					throw new Error();
				}
			})
			.catch((err) => {
				toast.error("Ocorreu um error ao enviar o email! Tente novamente mais tarde!");
				console.log(err);
			})
			.finally(() => {
				setIsSendingForm(false);
			});
	};

	return (
		<ContactContainer id="/contact">
			<Reveal hasSlide>
				<Title>
					Entre em <TitlePrimary>contato</TitlePrimary> comigo
				</Title>
			</Reveal>
			<Description>
				<Reveal delay={0.4}>
					<>
						Estou à disposição para discutir oportunidades de colaboração, responder a consultas e explorar
						projetos inovadores. Preencha o formulário abaixo, e entrarei em contato rapidamente para
						discutir como posso contribuir para o sucesso do seu projeto.
					</>
				</Reveal>
			</Description>
			<Form ref={formRef} onSubmit={handleSubmit}>
				<Content>
					<InfoContainer>
						{CARD_DATA.map((item) => (
							<CardContact key={item.label} label={item.label} info={item.info} icon={item.icon} />
						))}
					</InfoContainer>
					<InputsContainer>
						<Row>
							<Input key={1} required name="name" placeholder="Nome:" style={{ flex: 1 }} />
							<Input
								key={2}
								required
								name="email"
								type="email"
								placeholder="Email:"
								style={{ flex: 1 }}
							/>
						</Row>
						<Textarea
							required
							name="message"
							placeholder="Mensagem:"
							style={{
								flex: 1
							}}
						/>
					</InputsContainer>
				</Content>
				<ButtonRow>
					<Button
						backgroundColor={theme.primary}
						color={theme.text_light}
						title="Enviar mensagem"
						disabled={isSendingForm}
						loading={isSendingForm}
						type="submit"
					/>
				</ButtonRow>
			</Form>
		</ContactContainer>
	);
};

export default Contact;
