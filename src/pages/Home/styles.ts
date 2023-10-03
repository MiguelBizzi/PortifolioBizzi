import { keyframes, styled } from "styled-components";

export const MainContainer = styled.main`
	margin-top: 8rem;
`;

export const BannerContainer = styled.section`
	display: flex;
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
    position: relative;
	width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Image = styled.img`
    border-radius: 50%;
    width: 22rem;
    height: 22rem;
    border: 5px solid ${({ theme }) => theme.primary};
    animation: ${floatAnimation} 5s infinite ease-in;
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
