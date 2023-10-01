import { HeaderContainer, HeaderContent, NavContainer, NavItem } from "./styles";

export function Header() {
	return (
		<HeaderContainer>
			<HeaderContent>
				<NavContainer>
					<NavItem>Sobre</NavItem>
					<NavItem>Habilidades</NavItem>
					<NavItem>Portifólio</NavItem>
					<NavItem>Currículo</NavItem>
					<NavItem>Me contate</NavItem>
				</NavContainer>
			</HeaderContent>
		</HeaderContainer>
	);
}
