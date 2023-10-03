import { FaRegMoon } from "react-icons/fa";
import { HeaderContainer, HeaderContent, NavContainer, NavItem, ChangeThemeButton } from "./styles";

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<HeaderContent>
				<NavContainer>
					<NavItem>Sobre</NavItem>
					<NavItem>Habilidades</NavItem>
					<NavItem>Portifólio</NavItem>
					<NavItem>Currículo</NavItem>
					<NavItem>Me contate</NavItem>

					<ChangeThemeButton>
						<FaRegMoon />
					</ChangeThemeButton>
				</NavContainer>
			</HeaderContent>
		</HeaderContainer>
	);
};

export default Header;
