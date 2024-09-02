import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaCode } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";

const EXPERIENCES_DATA = [
	{
		title: "COTEMIG - Técnico em informatica",
		location: "Belo Horizonte, MG",
		description:
			"Eu me formei no ensino médio juntamente com técnico em informática, obtive conhecimentos fundamentais sobre algoritimos e técnicas de programação, programação orientada a objetos, banco de dados, desenvolvimento web e redes",
		icon: React.createElement(LuGraduationCap),
		date: "2020 - 2022"
	},
	{
		title: "Desenvolvedor Mobile Junior",
		location: "Aglets Soluções - Contagem, MG",
		description:
			"Trabalhei no desenvolvimento em um aplicativo de força de vendas B2B complexo e um aplicativo de e-commerce B2B inteligente com recursos exclusivos para distribuidora, indústria e atacado. Além de também trabalhar no desenvolvimento de um portal ERP WEB e na manutenção e implementação de features em uma API e em um E-commerce B2B Web",
		icon: React.createElement(CgWorkAlt),
		date: "2022 - 2023"
	},
	{
		title: "Engenheiro de Software Front End Pleno",
		location: "Faculdade Realiza - Remoto",
		description:
			"Trabalhando no desenvolvimento e manutenção da landing page, painel administrativo e portal do aluno. Utilizando SvelteKit, TailwindCSS e GoLang como tecnologias ",
		icon: React.createElement(CgWorkAlt),
		date: "2023 - presente"
	},
	{
		title: "Curso RocketSeat",
		location: "Online",
		description:
			"Curso online feito na plataforma RocketSeat, fundamental para aperfeiçoar meus conhecimentos em React Native & JS, NodeJs, Expo, Animações, Notificações e criação de interfaces",
		icon: React.createElement(FaCode),
		date: "2022 - 2023"
	},
	{
		title: "Sistemas de informação - PUC",
		location: "Belo Horizonte, MG",
		description:
			"Cursando sistemas de informação na PUCMINAS, onde estou aprendendo e aperfeiçoando meus conhecimentos em algaritmos, técnicas de programação, análise de complexidade e sistemas de informação",
		icon: React.createElement(FaSchool),
		date: "2023 - 2026 (estimado)"
	}
] as const;

export default EXPERIENCES_DATA;
