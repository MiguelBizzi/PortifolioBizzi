import React from "react";
import Backdrop from "./Backdrop";
import { ChangeThemeButton, CloseIcon, LogoImage, NavItem, SidebarContainer, SidebarHeader } from "./styles";
import Reveal from "../../utils/Reveal";
import { useThemeContext } from "../../hooks/theme";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Logo from "../../assets/favicon/favicon-32x32.png";

interface Props {
	handleClose: () => void;
}

const Sidebar: React.FC<Props> = ({ handleClose }) => {
	const { toggleTheme, selectedTheme, theme } = useThemeContext();

	const sidebarVariants = {
		hidden: { x: "100%" },
		visible: { x: 0 }
	};

	return (
		<Backdrop onClick={handleClose}>
			<SidebarContainer
				initial="hidden"
				animate="visible"
				exit="hidden"
				variants={sidebarVariants}
				transition={{ duration: 0.3 }}
				onClick={(e) => e.stopPropagation()}
			>
				<SidebarHeader>
					<LogoImage src={Logo} />
					<CloseIcon onClick={handleClose} />
				</SidebarHeader>

				<Reveal width={"100%"} isFromTop>
					<NavItem
						to="/portifolio"
						activeStyle={{ color: theme.primary }}
						spy
						smooth
						offset={50}
						duration={500}
						onClick={handleClose}
					>
						Portifólio
					</NavItem>
				</Reveal>
				<Reveal width={"100%"} delay={0.35} isFromTop>
					<NavItem
						to="/experience"
						activeStyle={{ color: theme.primary }}
						spy
						smooth
						offset={-50}
						duration={500}
						onClick={handleClose}
					>
						Experiências
					</NavItem>
				</Reveal>
				<Reveal width={"100%"} delay={0.45} isFromTop>
					<NavItem
						to="/skills"
						activeStyle={{ color: theme.primary }}
						spy
						smooth
						offset={-50}
						duration={500}
						onClick={handleClose}
					>
						Habilidades
					</NavItem>
				</Reveal>
				<Reveal width={"100%"} delay={0.55} isFromTop>
					<NavItem
						to="/contact"
						activeStyle={{ color: theme.primary }}
						spy
						smooth
						offset={-50}
						duration={500}
						onClick={handleClose}
					>
						Me contate
					</NavItem>
				</Reveal>
				<Reveal width={"100%"} delay={0.65} isFromTop>
					<ChangeThemeButton onClick={toggleTheme}>
						{selectedTheme === "light" ? <FaRegMoon /> : <FiSun />}
					</ChangeThemeButton>
				</Reveal>
			</SidebarContainer>
		</Backdrop>
	);
};

export default Sidebar;
