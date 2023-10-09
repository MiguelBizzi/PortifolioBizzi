import React, { ReactNode } from "react";
import { CardContainer, IconContainer, Details, Label, Info } from "./styles";

interface Props {
	label: string;
	info: string;
	icon: ReactNode;
}

const CardContact: React.FC<Props> = ({ label, info, icon }) => {
	return (
		<CardContainer>
			<IconContainer>{icon}</IconContainer>
			<Details>
				<Label>{label}</Label>
				<Info>{info}</Info>
			</Details>
		</CardContainer>
	);
};

export default CardContact;
