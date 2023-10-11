import React, { useRef } from "react";

import {
	ContactContainer,
	Title,
	TitlePrimary,
	Description,
	Content,
	InfoContainer,
	Form,
	Row,
	ButtonRow
} from "./styles";
import CardContact from "../CardContact";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SubmitHandler, FormHandles } from "@unform/core";
import Input from "../Input";
import Button from "../Button";
import { useTheme } from "styled-components";
import Textarea from "../Textarea";

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
}

const Contact: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const theme = useTheme();

	const handleSubmit: SubmitHandler<FormData> = (data) => {
		alert(JSON.stringify(data));
	};

	return (
		<ContactContainer>
			<Title>
				Entre em <TitlePrimary>contato</TitlePrimary> comigo
			</Title>
			<Description>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sapiente exercitationem laboriosam
				sit saepe magnam doloribus dolorum suscipit totam quam. Modi, ipsum voluptate? Enim id quaerat eligendi,
				laudantium totam numquam.
			</Description>
			<Content>
				<InfoContainer>
					{CARD_DATA.map((item) => (
						<CardContact key={item.label} label={item.label} info={item.info} icon={item.icon} />
					))}
				</InfoContainer>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<Row>
						<Input key={1} name="subject" placeholder="Assunto" style={{ flex: 1 }} />
						<Input key={2} name="email" placeholder="Email" style={{ flex: 1 }} />
					</Row>
					<Textarea
						name="message"
						placeholder="Mensagem"
						style={{
							flex: 1
						}}
					/>
				</Form>
			</Content>
			<ButtonRow>
				<Button
					backgroundColor={theme.primary}
					color={theme.text_light}
					title="Enviar mensagem"
					onClick={() => formRef.current?.submitForm()}
				/>
			</ButtonRow>
		</ContactContainer>
	);
};

export default Contact;
