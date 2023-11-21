import React from "react";
import { BackdropContainer } from "./styles";

interface Props {
	children: React.ReactNode;
	onClick: () => void;
}

const Backdrop: React.FC<Props> = ({ children, onClick }) => {
	const backdropVariants = {
		hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
		visible: { backgroundColor: "rgba(0, 0, 0, 0.7)" }
	};

	return (
		<BackdropContainer
			onClick={onClick}
			initial="hidden"
			animate="visible"
			exit="hidden"
			variants={backdropVariants}
		>
			{children}
		</BackdropContainer>
	);
};
export default Backdrop;
