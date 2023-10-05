import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { HeaderContainer, HeaderContent, NavContainer, NavItem, ChangeThemeButton } from "./styles";
import { useThemeContext } from "../../hooks/theme";

const Header: React.FC = () => {
	const { toggleTheme, selectedTheme } = useThemeContext();

	return (
		<HeaderContainer>
			<HeaderContent>
				<NavContainer>
					<NavItem>Sobre</NavItem>
					<NavItem>Habilidades</NavItem>
					<NavItem>Portifólio</NavItem>
					<NavItem>Currículo</NavItem>
					<NavItem>Me contate</NavItem>

					<ChangeThemeButton onClick={toggleTheme}>
						{selectedTheme === "light" ? <FaRegMoon /> : <FiSun />}
					</ChangeThemeButton>
				</NavContainer>
			</HeaderContent>
		</HeaderContainer>
	);
};

export default Header;
