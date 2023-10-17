import styled from "styled-components";
import sizes from "../../styles/devicesSizes";

export const StyledTextArea = styled.textarea`
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 0.4rem;

	padding: 1rem;

	color: ${({ theme }) => theme.text};
	resize: none;

	@media (max-width: ${sizes.tablet}) {
		padding: 1rem 1rem 5rem;
	}
`;
