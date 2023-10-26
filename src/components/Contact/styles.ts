import styled from "styled-components";
import { Form as Unform } from "@unform/web";
import sizes from "../../styles/devicesSizes";

export const ContactContainer = styled.section`
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BaseTitle = styled.h1`
	font-size: 3rem;
	font-weight: 600;

	@media (max-width: ${sizes.mobileL}) {
		font-size: 2.5rem;
	}

	@media (max-width: ${sizes.mobileS}) {
		font-size: 2rem;
	}
`;

export const Title = styled(BaseTitle)`
	@media (max-width: ${sizes.contactBreakPoint}) {
		text-align: center;
		gap: 1.2rem;
	}
`;

export const TitlePrimary = styled(BaseTitle)`
	display: inline;
	color: ${({ theme }) => theme.primary};
`;

export const Description = styled.p`
	margin-top: 1rem;
	width: 70%;
	text-align: center;

	color: ${({ theme }) => theme.text};

	@media (max-width: ${sizes.contactBreakPoint}) {
		width: 100%;
	}
`;

export const Form = styled(Unform)`
	margin-top: 5rem;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Content = styled.div`
	display: flex;
	gap: 2rem;

	@media (max-width: ${sizes.contactBreakPoint}) {
		flex-direction: column;
	}
`;

export const InputsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	@media (max-width: ${sizes.contactBreakPoint}) {
		flex-direction: row;
	}

	@media (max-width: ${sizes.cardContactBreakPoint}) {
		flex-direction: column;
	}
`;

export const Row = styled.div`
	display: flex;
	gap: 1rem;

	@media (max-width: ${sizes.cardContactBreakPoint}) {
		flex-direction: column;
	}
`;

export const ButtonRow = styled.div`
	width: 100%;

	margin-top: 1rem;
	display: flex;
	justify-content: flex-end;
`;
