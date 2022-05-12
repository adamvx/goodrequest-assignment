import React from "react";
import styled, { css } from "styled-components";

interface Props {
	activeStep: number;
	stepCount: number;
}

interface StepItemProps {
	active: boolean;
}

const StepItem = styled.div<StepItemProps>(({ active }) => {
	return css`
		width: ${active ? "48px" : "24px"};
		height: 6px;
		border-radius: 3px;
		background: ${active
			? "linear-gradient(90deg, #CD8A64, #C4794F);"
			: "#9f9f9f"};
		transition: width 200ms ease-out;
	`;
});

const StyledStepper = styled.div`
	display: flex;
	gap: 8px;
`;

export const Stepper: React.FC<Props> = ({ stepCount, activeStep }) => {
	return (
		<StyledStepper>
			{[...Array(stepCount)].map((_, i) => (
				<StepItem key={i} active={i === activeStep} />
			))}
		</StyledStepper>
	);
};
