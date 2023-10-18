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

export const SkillsContainer = styled.div`
	margin-top: 3rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
`;

export const SkillCard = styled.div`
	padding: 0.8rem;
	border-radius: 0.5rem;
	border: 1px solid ${({ theme }) => theme.secondary};
`;

export const SkillCardText = styled.span`
	font-size: 0.9rem;
	color: ${({ theme }) => theme.text};
`;
