import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface Props {
	title: string;
	backgroundColor: string;
	color: string;
	icon?: ReactNode;
	onClick?: () => void;
	border?: string;
}

export function Button({ title, backgroundColor, color, onClick, icon, border }: Props) {
	return (
		<ButtonContainer border={border} backgroundColor={backgroundColor} color={color} onClick={onClick}>
			{title}
			{icon ?? <></>}
		</ButtonContainer>
	);
}
