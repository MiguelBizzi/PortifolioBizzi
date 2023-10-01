import { styled } from "styled-components";

export const MainContainer = styled.main``;

export const BannerContainer = styled.section`
	display: flex;
	padding: 4rem;
`;

export const InformationContainer = styled.div`
	width: 50%;
`;

export const Title = styled.h1`
	font-size: 3rem;
	font-weight: 600;
`;

export const TypeWriterTitle = styled.h1`
	font-size: 3rem;
	font-weight: 600;
	color: ${({ theme }) => theme.primary};
`;

export const BannerImageContainer = styled.div`
	width: 50%;
`;

export const SelfDescription = styled.p`
	margin-top: 1rem;
	color: ${({ theme }) => theme.text};
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 1rem;
`;
