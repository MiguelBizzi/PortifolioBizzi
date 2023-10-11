import styled from "styled-components";

export const StyledInput = styled.input`
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 0.4rem;

	padding: 0.8rem 1rem;

	color: ${({ theme }) => theme.text};
`;
