import styled, { css } from "styled-components";
import { VscPreview } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

interface ContainerProps {
	isDeveloping: boolean;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-direction: column;
	border-radius: 0.5rem;

	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

	${({ isDeveloping }) =>
		isDeveloping
			? css`
					.hover-content {
						display: flex;
						transition: 0.5s;
					}
			  `
			: css`
					&:hover .hover-content,
					&:hover .border-link {
						display: flex;
						transition: 0.5s;
					}
			  `}
`;

export const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 15rem;
`;

export const Image = styled.img`
	object-fit: cover;
	width: 100%;
	height: 15rem;

	border-top-right-radius: 0.5rem;
	border-top-left-radius: 0.5rem;
`;

export const HoverContent = styled.div`
	display: none;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: 0;

	gap: 1rem;

	width: 100%;
	height: 15rem;

	border-top-right-radius: 0.5rem;
	border-top-left-radius: 0.5rem;

	background-color: rgba(0, 0, 0, 0.3);
	color: ${({ theme }) => theme.text_light};
	font-size: 1.7rem;

	transition: 0.3s;
`;

export const BorderLink = styled.a`
	display: none;
	justify-content: center;
	align-items: center;

	border: 2px solid ${({ theme }) => theme.text_light};
	border-radius: 50%;
	padding: 0.3rem;

	cursor: pointer;
`;

export const HoverCodeIcon = styled(VscPreview)``;

export const HoverGitHubIcon = styled(FaGithub)``;

export const IsDevelopingLabel = styled.span`
	display: none;
	font-size: 1.2rem;
	font-weight: 700;
`;

export const Details = styled.div`
	padding: 1.2rem;
	flex: 1;
`;

export const ProjectTitle = styled.h2``;

export const Description = styled.p`
	margin-top: 1rem;
`;

export const TecnologiesList = styled.div`
	width: 100%;
	margin-top: 1.2rem;
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`;

export const TecnologiesCard = styled.span`
	text-transform: uppercase;
	border-radius: 1rem;
	padding: 0.4rem 0.6rem;
	font-size: 0.7rem;

	color: ${({ theme }) => theme.text_light};
	background-color: rgb(81, 83, 83);
`;
