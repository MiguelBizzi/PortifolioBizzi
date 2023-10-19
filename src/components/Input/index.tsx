import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { StyledInput } from "./styles";
import { useThemeContext } from "../../hooks/theme";

interface Props {
	name: string;
	placeholder: string;
	label?: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export default function Input({ name, label, placeholder, ...rest }: InputProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const { selectedTheme } = useThemeContext();

	const { fieldName, defaultValue, registerField, error } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef,
			getValue: (ref) => {
				return ref.current.value;
			},
			setValue: (ref, value) => {
				ref.current.value = value;
			},
			clearValue: (ref) => {
				ref.current.value = "";
			}
		});
	}, [fieldName, registerField]);

	return (
		<>
			{label && <label htmlFor={fieldName}>{label}</label>}

			<StyledInput
				isThemeDark={selectedTheme === "dark"}
				id={fieldName}
				ref={inputRef}
				defaultValue={defaultValue}
				placeholder={placeholder}
				{...rest}
			/>

			{error && <span>{error}</span>}
		</>
	);
}
