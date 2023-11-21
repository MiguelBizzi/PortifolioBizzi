import styled from "styled-components";
import { motion } from "framer-motion";

export const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	margin: 0 auto;
	margin-top: 2rem;
`;

export const FilterCard = styled(motion.button)`
	border: 1px solid;
	border-radius: 0.5rem;
	padding: 0.4rem 0.8rem;

	cursor: pointer;
`;

export const FilterCardText = styled.span``;
