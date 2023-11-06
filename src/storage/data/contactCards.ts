import React from "react";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const CARD_DATA = [
	{
		label: "Me ligue",
		info: "(31) 99572-1022",
		icon: React.createElement(FaPhoneAlt)
	},
	{
		label: "E-mail",
		info: "migueloliveirabizzi@gmail.com",
		icon: React.createElement(HiOutlineMail)
	},
	{
		label: "Endereço",
		info: "Belo Horizonte - MG",
		icon: React.createElement(FaLocationArrow)
	}
];

export default CARD_DATA;
