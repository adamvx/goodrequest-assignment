import { useRef, useState } from "react";
import styled, { css } from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	touched?: boolean;
	error?: string;
}

export const TextInput = styled.input`
	border: none;
	width: 100%;
	outline: none;
	font-size: 16px;
	padding: 0;
`;

export const InputHolder = styled.div<{ focused: boolean; error: boolean }>(
	({ focused, error }) => {
		return css`
			padding: 16px 24px;
			border: 1px solid ${focused ? "#cd8b65" : error ? "#ff0000" : "#dfdfdf"};
			border-radius: 8px;
		`;
	}
);

const LabelHeading = styled.h5`
	margin: 0;
`;

const Container = styled.div`
	margin: 0;
`;

const ErrorMessage = styled.span`
	color: #ff0000;
`;

export const Input: React.FC<Props> = ({
	label,
	onFocus,
	onBlur,
	error,
	touched = false,
	...rest
}) => {
	const [focused, setFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<Container>
			<InputHolder
				error={touched && !!error}
				focused={focused}
				onClick={() => inputRef.current?.focus()}
			>
				<LabelHeading>{label}</LabelHeading>
				<TextInput
					ref={inputRef}
					onFocus={(e) => {
						setFocused(true);
						onFocus?.(e);
					}}
					onBlur={(e) => {
						setFocused(false);
						onBlur?.(e);
					}}
					{...rest}
				/>
			</InputHolder>
			{touched && error && <ErrorMessage>{error}</ErrorMessage>}
		</Container>
	);
};
