import React, { useEffect, useRef } from "react";

import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { FilterContainer, FilterCard, FilterCardText } from "./styles";
import FILTER_OPTIONS_DATA from "../../../storage/data/filterPortifolioOptions";
import { FilterOptions } from "../../../dtos/IProject";
import { useTheme } from "styled-components";

interface Props {
	handleFilter: (type: FilterOptions) => void;
	selectedFilterOption: FilterOptions;
}

const Filter: React.FC<Props> = ({ handleFilter, selectedFilterOption }) => {
	const theme = useTheme();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();

	const itemVariants: Variants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 }
	};

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);

	return (
		<FilterContainer>
			{FILTER_OPTIONS_DATA.map((item) => (
				<motion.div
					ref={ref}
					key={item.id}
					variants={itemVariants}
					initial="hidden"
					animate={mainControls}
					transition={{ duration: 0.4, delay: 1 + item.delay }}
				>
					<FilterCard
						key={item.id}
						disabled={selectedFilterOption == item.option}
						onClick={() => handleFilter(item.option)}
						initial={{
							color: selectedFilterOption === item.option ? theme.primary : theme.text,
							borderColor: selectedFilterOption === item.option ? theme.primary : theme.text,
							borderWidth: selectedFilterOption === item.option ? 2 : 1
						}}
						animate={{
							color: selectedFilterOption === item.option ? theme.primary : theme.text,
							borderColor: selectedFilterOption === item.option ? theme.primary : theme.text,
							borderWidth: selectedFilterOption === item.option ? 2 : 1,
							fontWeight: selectedFilterOption === item.option ? 700 : 400
						}}
						transition={{ duration: 0.2 }}
					>
						<FilterCardText>{item.label}</FilterCardText>
					</FilterCard>
				</motion.div>
			))}
		</FilterContainer>
	);
};

export default Filter;
