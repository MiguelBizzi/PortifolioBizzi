import styled from "styled-components";
import sizes from "../../styles/devicesSizes";

export const Container = styled.section`
	position: relative;
	margin-top: 5rem;
	text-align: center;
`;

export const Title = styled.h1`
	font-size: 3rem;
	font-weight: 600;

	@media (max-width: ${sizes.mobileL}) {
		font-size: 2.5rem;
	}

	@media (max-width: ${sizes.mobileS}) {
		font-size: 2rem;
	}
`;

export const Description = styled.p`
	margin: 0 auto;
	margin-top: 1rem;
	width: 70%;
	text-align: center;

	color: ${({ theme }) => theme.text};

	@media (max-width: ${sizes.contactBreakPoint}) {
		width: 100%;
	}
`;

export const ProjectsContainer = styled.section`
	margin-top: 2rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 2rem;

	@media (max-width: ${sizes.mainBannerBreak}) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 709px) {
		grid-template-columns: 1fr;
	}
`;
