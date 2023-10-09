import React from "react";

import { ContactContainer, Title, TitlePrimary, Description, Content, InfoContainer, FormContainer } from "./styles";
import CardContact from "../CardContact";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const CARD_DATA = [
	{
		label: "Me ligue",
		info: "(31) 99572-1022",
		icon: <FaPhone />
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

const Contact: React.FC = () => {
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
						<CardContact label={item.label} info={item.info} icon={item.icon} />
					))}
				</InfoContainer>
				<FormContainer></FormContainer>
			</Content>
		</ContactContainer>
	);
};

export default Contact;
