import React from "react";
import styled from "styled-components";
import { Check } from "../../Icons";

interface Props {
	checked?: boolean;
	onClick?: () => void;
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #f3e2d9;
	border-radius: 8px;
	width: 34px;
	height: 34px;
	cursor: pointer;
`;

export const Checkbox: React.FC<Props> = ({ checked, onClick }) => {
	return <Container onClick={onClick}>{checked && <Check />}</Container>;
};
