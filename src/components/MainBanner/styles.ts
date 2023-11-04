import { keyframes, styled } from "styled-components";
import sizes from "../../styles/devicesSizes";

export const MainContainer = styled.main`
	margin-top: 8rem;

	@media (max-width: ${sizes.mainBannerBreak}) {
		margin-top: 5rem;
	}

	@media (max-width: ${sizes.headerBreakPoint}) {
		margin-top: 3rem;
	}
`;

export const BannerContainer = styled.section`
	display: flex;

	@media (max-width: ${sizes.mainBannerBreak}) {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`;

export const InformationContainer = styled.div`
	width: 50%;

	@media (max-width: ${sizes.mainBannerBreak}) {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}
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

export const Title = styled(BaseTitle)``;

export const TypeWriterTitle = styled(BaseTitle)`
	color: ${({ theme }) => theme.primary};
`;

export const BannerImageContainer = styled.div`
	position: relative;
	width: 50%;

	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: ${sizes.mainBannerBreak}) {
		display: none;
	}
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
	/* animation: ${floatAnimation} 5s infinite ease-in; */
`;

export const SelfDescription = styled.p`
	margin-top: 1rem;
	color: ${({ theme }) => theme.text};
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 1rem;

	@media (max-width: ${sizes.mainBannerBreak}) {
		justify-content: center;
	}

	@media (max-width: ${sizes.mobileS}) {
		gap: 0.3rem;
	}
`;
