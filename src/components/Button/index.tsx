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

type ButtonProps = JSX.IntrinsicElements["button"] & Props;

const Button: React.FC<ButtonProps> = ({ title, backgroundColor, color, onClick, icon, border, ...rest }) => {
	return (
		<ButtonContainer border={border} backgroundcolor={backgroundColor} color={color} onClick={onClick} {...rest}>
			{title}
			{icon ?? <></>}
		</ButtonContainer>
	);
};

export default Button;
