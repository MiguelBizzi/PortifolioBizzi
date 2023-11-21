import React, { useEffect, useRef, useState } from "react";

import { Container, Title, ProjectsContainer, Description } from "./styles";
import Reveal from "../../utils/Reveal";
import PortifolioCard from "../PortifolioCard";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import PROJECTS_DATA from "../../storage/data/projects";
import { FilterOptions, IProject } from "../../dtos/IProject";
import Filter from "./Filter";
// import PortifolioModal from "../PortifolioModal";

const Portifolio: React.FC = () => {
	const [projetos, setProjetos] = useState<IProject[]>(PROJECTS_DATA);
	// const [selectedId, setSelectedId] = useState<string | null>(null);
	const [selectedFilterOptions, setSelectedFilterOptions] = useState<FilterOptions>("all");

	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, margin: "200px 0px" });
	const mainControls = useAnimation();

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 70 },
		visible: { opacity: 1, y: 1 }
	};

	// const handleSelectedId = (id?: string) => setSelectedId(id ?? null);

	const handleFilterProjects = (type: FilterOptions) => {
		setSelectedFilterOptions(type);

		if (type === "all") {
			setProjetos(PROJECTS_DATA);
		} else {
			const filteredData = PROJECTS_DATA.filter((item) => item.type == type);
			setProjetos(filteredData);
		}

		mainControls.set("hidden");
		setTimeout(() => {
			mainControls.start("visible");
		}, 200);
	};

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);

	return (
		<Container id="/portifolio">
			<Reveal width="100%" delay={0.8}>
				<Title>Portifólio</Title>
			</Reveal>
			{/* <Reveal width="100%" delay={0.9} style={{ textAlign: "center" }}>
				<Description>Toque no cartão para abrir os detalhes do projeto!</Description>
			</Reveal> */}

			<Filter handleFilter={handleFilterProjects} selectedFilterOption={selectedFilterOptions} />

			<ProjectsContainer>
				{projetos.map((item: IProject, index: number) => (
					<motion.div
						ref={ref}
						key={item.id}
						layoutId={item.id}
						variants={itemVariants}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.4, delay: index / 10 }}
						style={{ display: "flex" }}
					>
						<PortifolioCard
							data={item}
							// selected={selectedId === item.id}
							// handleSelectedId={handleSelectedId}
						/>
					</motion.div>
				))}
			</ProjectsContainer>

			{/* <AnimatePresence initial={false}>
				{selectedId && <PortifolioModal layoutId={selectedId} onClick={() => handleSelectedId()} />}
			</AnimatePresence> */}
		</Container>
	);
};

export default Portifolio;
