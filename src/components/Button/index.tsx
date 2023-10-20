import { ReactNode } from "react";
import { ButtonContainer } from "./styles";
import LoadingSpinner from "../LoadingSpinner";

interface Props {
	title: string;
	backgroundColor: string;
	color: string;
	loading?: boolean;
	icon?: ReactNode;
	onClick?: () => void;
	border?: string;
}

type ButtonProps = JSX.IntrinsicElements["button"] & Props;

const Button: React.FC<ButtonProps> = ({ title, backgroundColor, color, loading, onClick, icon, border, ...rest }) => {
	return (
		<ButtonContainer border={border} backgroundcolor={backgroundColor} color={color} onClick={onClick} {...rest}>
			{loading ? <LoadingSpinner /> : title}
			{loading ? icon ?? <></> : <></>}
		</ButtonContainer>
	);
};

export default Button;
