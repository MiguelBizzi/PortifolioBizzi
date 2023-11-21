import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import MainBanner from "../../components/MainBanner";
import Portifolio from "../../components/Portifolio";
import Skills from "../../components/Skills";

const Home: React.FC = () => {
	return (
		<>
			<MainBanner />
			<Portifolio />
			<Experience />
			<Skills />
			<Contact />
		</>
	);
};

export default Home;
