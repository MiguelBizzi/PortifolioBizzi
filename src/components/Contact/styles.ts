import styled from "styled-components";

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

	margin-top: 5rem;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export const FormContainer = styled.div`
	flex: 1;
`;
