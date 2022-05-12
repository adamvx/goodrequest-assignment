import React from "react";
import styled from "styled-components";
import { IPrice } from "../../types";
import { PriceTag } from "./PriceTag";

interface Props {}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`;

export const PriceSelect: React.FC<Props> = () => {
	const prices: IPrice[] = [
		{ id: 0, type: "static", value: 5 },
		{ id: 1, type: "static", value: 10 },
		{ id: 2, type: "static", value: 20 },
		{ id: 3, type: "static", value: 30 },
		{ id: 4, type: "static", value: 50 },
		{ id: 5, type: "static", value: 100 },
		{ id: 6, type: "custom", value: undefined },
	];

	return (
		<div>
			<h5>Suma, ktorou chcem prispieť</h5>
			<Container>
				{prices.map((price, key) => (
					<PriceTag key={key} price={price} />
				))}
			</Container>
		</div>
	);
};
