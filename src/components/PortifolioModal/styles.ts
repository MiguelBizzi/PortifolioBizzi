import styled from "styled-components";
import { motion } from "framer-motion";

export const BackdropBackground = styled.div`
	position: absolute;

	width: 100%;
	height: 100%;

	background-color: rgba(0, 0, 0, 0.2);
	z-index: 1;
`;

export const ModalButton = styled(motion.div)`
	position: absolute;

	background-color: #fff;
	padding: 5rem;
	border: 1px solid red;
	cursor: pointer;

	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;

	width: 80%;
	height: 400px;
	z-index: 2;
`;
