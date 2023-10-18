import Contact from "../../components/Contact";
import MainBanner from "../../components/MainBanner";
import Skills from "../../components/Skills";

const Home: React.FC = () => {
	return (
		<>
			<MainBanner />
			<Skills />
			<Contact />
		</>
	);
};

export default Home;
