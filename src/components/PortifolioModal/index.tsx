import React from "react";
import { ModalButton } from "./styles";

interface Props {
	layoutId: string;
	onClick: () => void;
}

const PortifolioModal: React.FC<Props> = ({ layoutId, onClick }) => {
	return (
		// <BackdropBackground onClick={onClick}>
		<ModalButton layoutId={layoutId} onClick={onClick} exit={{ opacity: 0 }}>
			<h1>IgniteShoes</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nesciunt eius alias</p>
		</ModalButton>
		// </BackdropBackground>
	);
};

export default PortifolioModal;
