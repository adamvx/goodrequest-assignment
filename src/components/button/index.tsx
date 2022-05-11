import styled, { css } from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	variant?: "primary" | "secondary";
}

const StyledButton = styled.button<{
	variant: "primary" | "secondary";
}>(({ variant, disabled }) => {
	return css`
		display: flex;
		padding: 20px 24px;
		border-radius: 300px;
		border: 0;
		background: ${disabled
			? "#9F9F9F"
			: variant === "secondary"
			? "#F3E2D9"
			: "linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%)"};
		font-weight: 800;
		color: ${variant === "secondary" ? "black" : "white"};
		cursor: ${disabled ? "not-allowed" : "pointer"};
		box-shadow: ${variant === "secondary"
			? "unset"
			: "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)"};
	`;
});

export const Button: React.FC<Props> = ({
	title,
	variant,
	disabled,
	onClick,
	...rest
}) => {
	return (
		<StyledButton
			variant={variant || "primary"}
			onClick={disabled ? undefined : onClick}
			disabled={disabled}
			{...rest}
		>
			{title}
		</StyledButton>
	);
};
