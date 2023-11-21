import React from "react";

// import { AnimatePresence, motion } from "framer-motion";

import {
	Container,
	Description,
	Details,
	Image,
	ImageContainer,
	HoverContent,
	HoverCodeIcon,
	HoverGitHubIcon,
	IsDevelopingLabel,
	ProjectTitle,
	TecnologiesCard,
	TecnologiesList,
	BorderLink
} from "./styles";
import PROJECTS_DATA from "../../storage/data/projects";

interface Props {
	data: (typeof PROJECTS_DATA)[0];
	// selected: boolean;
	// handleSelectedId: (id: string) => void;
}

const PortifolioCard: React.FC<Props> = ({ data }) => {
	return (
		// <Container onClick={() => handleSelectedId(data.id)} disabled={selected}>
		<Container isDeveloping={data.isDeveloping}>
			<ImageContainer>
				<Image src={data.bannerImage} />
				<HoverContent className="hover-content">
					{data.linkPreview && (
						<BorderLink className="border-link" href={data.linkPreview} target="_blank">
							<HoverCodeIcon />
						</BorderLink>
					)}
					<BorderLink className="border-link" href={data.linkGitHub} target="_blank">
						<HoverGitHubIcon />
					</BorderLink>
					<IsDevelopingLabel className="developing-label"></IsDevelopingLabel>
				</HoverContent>
			</ImageContainer>
			<Details>
				<>
					<ProjectTitle>{data.title}</ProjectTitle>
					<Description>{data.description}</Description>
				</>
				<TecnologiesList>
					{data.tecnologies.map((item) => (
						<TecnologiesCard key={item}>{item}</TecnologiesCard>
					))}
				</TecnologiesList>
			</Details>
		</Container>
	);
};

export default PortifolioCard;
