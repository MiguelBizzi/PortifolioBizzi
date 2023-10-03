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

const Button: React.FC<Props> = ({ title, backgroundColor, color, onClick, icon, border }) => {
	return (
		<ButtonContainer border={border} backgroundcolor={backgroundColor} color={color} onClick={onClick}>
			{title}
			{icon ?? <></>}
		</ButtonContainer>
	);
};

export default Button;
