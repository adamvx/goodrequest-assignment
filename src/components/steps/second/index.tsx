import React from "react";
import styled from "styled-components";

interface Props {}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const SecondStep: React.FC<Props> = () => {
	return <Container></Container>;
};
