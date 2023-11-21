import IgniteGymBannerImage from "../../assets/projetos/igniteGym/banner.png";
import IgniteShoesBannerImage from "../../assets/projetos/igniteShoes/banner.png";
import IgniteQuizBannerImage from "../../assets/projetos/igniteQuiz/banner.png";
import bizziDashboardBannerImage from "../../assets/projetos/bizziDashboard/banner.png";
import { IProject } from "../../dtos/IProject";

const PROJECTS_DATA: IProject[] = [
	{
		id: "1",
		type: "mobile",
		title: "IgniteGym",
		description:
			"Um aplicativo para auxiliar o seu treino! Desenvolvido com React Native e outras técnologias, utilizando consumo de API's utilizando axios para obter as informações dos exercícios e JWT para autenticação",
		linkGitHub: "https://github.com/MiguelBizzi/ignitegym",
		linkPreview: undefined,
		isDeveloping: false,
		bannerImage: IgniteGymBannerImage,
		previewImages: [],
		tecnologies: ["React Native", "TypeScript", "Expo", "Native Base", "JWT", "API", "Axios"]
	},
	{
		id: "4",
		type: "web",
		title: "Bizzi Dashboard",
		description:
			"Dashboard incrível desenvolvido em NextJS, com ênfase no aprofundamento e masterização do Tailwind CSS",
		linkGitHub: "https://github.com/MiguelBizzi/admin-tailwind-next",
		linkPreview: "https://admin-tailwind-next.vercel.app/",
		isDeveloping: false,
		bannerImage: bizziDashboardBannerImage,
		previewImages: [],
		tecnologies: ["Next JS", "TypeScript", "Tailwind", "SlotsAPI", "RadixUI", "AutoAnimate"]
	},
	{
		id: "2",
		type: "mobile",
		title: "IgniteShoes",
		description:
			"O Ignite Shoes é muito mais do que apenas uma loja virtual de sneakers; é uma experiência completa e interativa contendo Push Notifications, Deep Linking e muito mais.",
		linkGitHub: "https://github.com/MiguelBizzi/igniteshoes",
		linkPreview: undefined,
		isDeveloping: false,
		bannerImage: IgniteShoesBannerImage,
		previewImages: [],
		tecnologies: ["React Native", "TypeScript", "Expo", "Apns", "OneSignal", "Push Notifications", "Deep Linking"]
	},
	{
		id: "3",
		type: "mobile",
		title: "Rocket Quiz",
		description:
			"Um aplicativo de quiz, com ênfase no aprendizado de animações, microinterações e acessibilidade, contando com feedback visual, tátil e sonoro",
		linkGitHub: "https://github.com/MiguelBizzi/igniteQuiz",
		linkPreview: undefined,
		isDeveloping: true,
		bannerImage: IgniteQuizBannerImage,
		previewImages: [],
		tecnologies: ["React Native", "TypeScript", "Expo", "Skia", "Reanimated", "Feedback Tátil e Sonoro"]
	}
];

export default PROJECTS_DATA;
