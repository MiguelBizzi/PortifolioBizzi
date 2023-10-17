import styled from "styled-components";
import sizes from "../../styles/devicesSizes";

export const CardContainer = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: ${sizes.tablet}) {
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		flex: 1;
	}
`;

export const IconContainer = styled.div`
	height: 100%;
	background-color: ${({ theme }) => theme.primary};

	font-size: 1.5rem;
	color: ${({ theme }) => theme.text_light};

	border-radius: 5px;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 1rem;
`;

export const Details = styled.div`
	height: 90%;
	padding-left: 1.2rem;

	font-size: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: ${sizes.tablet}) {
		text-align: center;
		padding-left: 0rem;
	}
`;

export const Label = styled.span`
	color: ${({ theme }) => theme.text};
	opacity: 0.4;
`;

export const Info = styled.span`
	@media (max-width: ${sizes.tablet}) {
		flex-wrap: wrap;
	}
`;
