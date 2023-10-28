import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import {
	HeaderContainer,
	HeaderContent,
	NavContainer,
	NavItem,
	ChangeThemeButton,
	HamburguerButton,
	HamburguerIcon,
	CloseIcon
} from "./styles";
import { useThemeContext } from "../../hooks/theme";
import { useState } from "react";

const Header: React.FC = () => {
	const [isHeaderOpen, setIsHeaderOpen] = useState<boolean>(false);

	const { toggleTheme, selectedTheme, theme } = useThemeContext();

	return (
		<HeaderContainer>
			<HeaderContent>
				<HamburguerButton onClick={() => setIsHeaderOpen((prev) => !prev)}>
					{isHeaderOpen ? <CloseIcon /> : <HamburguerIcon />}
				</HamburguerButton>
				<NavContainer isDarkMode={selectedTheme === "dark"} isShown={isHeaderOpen}>
					<NavItem
						to="/portifolio"
						activeStyle={{ color: theme.primary }}
						spy
						smooth
						offset={50}
						duration={500}
						onClick={() => setIsHeaderOpen(false)}
					>
						Portifólio
					</NavItem>
					<NavItem
						to="/experience"
						activeStyle={{ color: theme.primary }}
						spy
						smooth
						offset={-50}
						duration={500}
						onClick={() => setIsHeaderOpen(false)}
					>
						Experiências
					</NavItem>
					<NavItem
						to="/skills"
						activeStyle={{ color: theme.primary }}
						spy
						smooth
						offset={-50}
						duration={500}
						onClick={() => setIsHeaderOpen(false)}
					>
						Habilidades
					</NavItem>

					<NavItem
						to="/contact"
						activeStyle={{ color: theme.primary }}
						spy
						smooth
						offset={-50}
						duration={500}
						onClick={() => setIsHeaderOpen(false)}
					>
						Me contate
					</NavItem>

					<ChangeThemeButton onClick={toggleTheme}>
						{selectedTheme === "light" ? <FaRegMoon /> : <FiSun />}
					</ChangeThemeButton>
				</NavContainer>
			</HeaderContent>
		</HeaderContainer>
	);
};

export default Header;
