import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { StyledTextArea } from "./styles";
import { useThemeContext } from "../../hooks/theme";

interface Props {
	name: string;
	placeholder: string;
	label?: string;
}

type TextareaProps = JSX.IntrinsicElements["textarea"] & Props;

export default function Textarea({ name, label, placeholder, ...rest }: TextareaProps) {
	const textareaInput = useRef<HTMLTextAreaElement>(null);
	const { selectedTheme } = useThemeContext();

	const { fieldName, defaultValue, registerField, error } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: textareaInput,
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

			<StyledTextArea
				isThemeDark={selectedTheme === "dark"}
				id={fieldName}
				ref={textareaInput}
				defaultValue={defaultValue}
				placeholder={placeholder}
				{...rest}
			/>

			{error && <span>{error}</span>}
		</>
	);
}
