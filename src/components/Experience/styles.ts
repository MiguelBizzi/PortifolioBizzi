import styled from "styled-components";
import sizes from "../../styles/devicesSizes";

export const Container = styled.section`
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 3rem;
	font-weight: 600;

	@media (max-width: ${sizes.contactBreakPoint}) {
		text-align: center;
		gap: 1.2rem;
	}
`;
