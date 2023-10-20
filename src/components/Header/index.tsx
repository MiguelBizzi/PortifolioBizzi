import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { HeaderContainer, HeaderContent, NavContainer, NavItem, ChangeThemeButton } from "./styles";
import { useThemeContext } from "../../hooks/theme";

const Header: React.FC = () => {
	const { toggleTheme, selectedTheme, theme } = useThemeContext();

	return (
		<HeaderContainer>
			<HeaderContent>
				<NavContainer>
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
					<NavItem to="/skills" activeStyle={{ color: theme.primary }} spy smooth offset={-50} duration={500}>
						Habilidades
					</NavItem>

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

					<ChangeThemeButton onClick={toggleTheme}>
						{selectedTheme === "light" ? <FaRegMoon /> : <FiSun />}
					</ChangeThemeButton>
				</NavContainer>
			</HeaderContent>
		</HeaderContainer>
	);
};

export default Header;
