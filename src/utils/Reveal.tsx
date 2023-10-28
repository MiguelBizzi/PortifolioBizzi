import { useAnimation, useInView, motion, MotionProps } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { defaultTheme } from "../styles/themes/default";

// import { Container } from './styles';

interface Props extends MotionProps {
	children: JSX.Element;
	width?: "fit-content" | "100%";
	delay?: number;
	hasSlide?: boolean;
}

const Reveal: React.FC<Props> = ({ children, width = "fit-content", delay = 0.25, hasSlide, ...rest }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			if (hasSlide) slideControls.start("visible");
		}
	}, [isInView]);

	return (
		<div ref={ref} style={{ position: "relative", width }}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 1 }
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay }}
				{...rest}
			>
				{children}
			</motion.div>
			<motion.div
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" }
				}}
				initial="hidden"
				animate={slideControls}
				transition={{ duration: 0.5, ease: "easeIn" }}
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					background: defaultTheme.primary,
					zIndex: 20,
					display: hasSlide ? "flex" : "none"
				}}
			/>
		</div>
	);
};

export default Reveal;
