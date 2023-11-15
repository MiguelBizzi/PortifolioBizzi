import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import {
	HeaderContainer,
	HeaderContent,
	NavContainer,
	NavItem,
	ChangeThemeButton,
	HamburguerButton,
	HamburguerIcon
} from "./styles";
import { useThemeContext } from "../../hooks/theme";
import { useState } from "react";
import Reveal from "../../utils/Reveal";
import Sidebar from "../Sidebar";
import { AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
	const [isHeaderOpen, setIsHeaderOpen] = useState<boolean>(false);

	const { toggleTheme, selectedTheme, theme } = useThemeContext();

	return (
		<HeaderContainer>
			<HeaderContent>
				<HamburguerButton onClick={() => setIsHeaderOpen((prev) => !prev)}>
					<HamburguerIcon />
				</HamburguerButton>
				<NavContainer isDarkMode={selectedTheme === "dark"}>
					<Reveal isFromTop>
						<NavItem
							to="/portifolio"
							activeStyle={{ color: theme.primary }}
							spy
							smooth
							offset={50}
							duration={500}
						>
							Portifólio
						</NavItem>
					</Reveal>
					<Reveal delay={0.35} isFromTop>
						<NavItem
							to="/experience"
							activeStyle={{ color: theme.primary }}
							spy
							smooth
							offset={-50}
							duration={500}
						>
							Experiências
						</NavItem>
					</Reveal>
					<Reveal delay={0.45} isFromTop>
						<NavItem
							to="/skills"
							activeStyle={{ color: theme.primary }}
							spy
							smooth
							offset={-50}
							duration={500}
						>
							Habilidades
						</NavItem>
					</Reveal>
					<Reveal delay={0.55} isFromTop>
						<NavItem
							to="/contact"
							activeStyle={{ color: theme.primary }}
							spy
							smooth
							offset={-50}
							duration={500}
						>
							Me contate
						</NavItem>
					</Reveal>
					<Reveal delay={0.65} isFromTop>
						<ChangeThemeButton onClick={toggleTheme}>
							{selectedTheme === "light" ? <FaRegMoon /> : <FiSun />}
						</ChangeThemeButton>
					</Reveal>
				</NavContainer>
			</HeaderContent>
			<AnimatePresence initial={false}>
				{isHeaderOpen && <Sidebar handleClose={() => setIsHeaderOpen((prev) => !prev)} />}
			</AnimatePresence>
		</HeaderContainer>
	);
};

export default Header;
