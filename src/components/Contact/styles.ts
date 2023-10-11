import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const ContactContainer = styled.section`
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 3rem;
	font-weight: 600;
`;

export const TitlePrimary = styled.h1`
	display: inline;
	font-size: 3rem;
	font-weight: 600;
	color: ${({ theme }) => theme.primary};
`;

export const Description = styled.p`
	margin-top: 1rem;
	width: 70%;
	text-align: center;

	color: ${({ theme }) => theme.text};
`;

export const Content = styled.div`
	width: 100%;
	display: flex;

	gap: 2rem;
	margin-top: 5rem;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export const Form = styled(Unform)`
	display: flex;
	flex-direction: column;

	gap: 1.2rem;
	flex: 1;
`;

export const Row = styled.div`
	display: flex;
	gap: 1rem;
`;

export const ButtonRow = styled.div`
	width: 100%;

	margin-top: 1rem;
	display: flex;
	justify-content: flex-end;
`;
