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
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SubmitHandler, FormHandles } from "@unform/core";
import Input from "../Input";
import Button from "../Button";
import { useTheme } from "styled-components";
import Textarea from "../Textarea";
import emailJs from "@emailjs/browser";

const CARD_DATA = [
	{
		label: "Me ligue",
		info: "(31) 99572-1022",
		icon: <FaPhoneAlt />
	},
	{
		label: "E-mail",
		info: "migueloliveirabizzi@gmail.com",
		icon: <HiOutlineMail />
	},
	{
		label: "Endereço",
		info: "Belo Horizonte - MG",
		icon: <FaLocationArrow />
	}
];

interface FormData {
	name: string;
	email: string;
	message: string;
}

const Contact: React.FC = () => {
	const [isSendingForm, setIsSendingForm] = useState<boolean>(false);

	const formRef = useRef<FormHandles>(null);
	const theme = useTheme();

	const handleSubmit: SubmitHandler<FormData> = (data) => {
		const templateParams = {
			from_name: data.name,
			email: data.email,
			message: data.message
		};

		setIsSendingForm(true);

		emailJs
			.send("service_rkcu2oc", "template_wmbwl96", templateParams, "Q6nURcDaXGQbNuH-K")
			.then((response) => {
				if (response.status === 200) {
					formRef.current?.reset();
				} else {
					throw new Error();
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setIsSendingForm(false);
			});
	};

	return (
		<ContactContainer id="/contact">
			<Title>
				Entre em <TitlePrimary>contato</TitlePrimary> comigo
			</Title>
			<Description>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sapiente exercitationem laboriosam
				sit saepe magnam doloribus dolorum suscipit totam quam. Modi, ipsum voluptate? Enim id quaerat eligendi,
				laudantium totam numquam.
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
