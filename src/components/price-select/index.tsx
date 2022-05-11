import React from "react";
import styled, { css } from "styled-components";
import { IPrice } from "../../types";

interface Props {
	selectedPrice?: IPrice;
	onPriceSelect: (price: IPrice) => void;
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`;

const Price = styled.span(({ contentEditable }) => {
	return css`
		line-height: 16px;
		min-width: ${contentEditable ? "32px" : "unset"};
		max-width: ${contentEditable ? "64px" : "unset"};
		border-bottom: ${contentEditable ? "1px solid #dfdfda" : "unset"};

		&:focus {
			outline: none;
		}
	`;
});

const Tag = styled.div<{ selected: boolean }>(({ selected }) => {
	return css`
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 800;
		gap: 4px;
		color: ${selected ? "white" : "black"};
		background: ${selected
			? "linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%);"
			: "#fff"};
		border: 1px solid #dfdfda;
		border-radius: 8px;
		padding: 16px;
		line-height: 16px;
		cursor: pointer;
	`;
});

export const PriceSelect: React.FC<Props> = ({
	selectedPrice,
	onPriceSelect,
}) => {
	const prices: IPrice[] = [
		{ id: 0, type: "static", price: 5 },
		{ id: 1, type: "static", price: 10 },
		{ id: 2, type: "static", price: 20 },
		{ id: 3, type: "static", price: 30 },
		{ id: 4, type: "static", price: 50 },
		{ id: 5, type: "static", price: 100 },
		{ id: 6, type: "custom", price: undefined },
	];

	const onKeyDown = (ev: React.KeyboardEvent<HTMLSpanElement>) => {
		const allowList = [
			8, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
		];
		console.log();
		if (!allowList.includes(ev.keyCode)) {
			ev.preventDefault();
		}
	};

	return (
		<div>
			<h5>Suma, ktorou chcem prispieť</h5>
			<Container>
				{prices.map((price) => (
					<Tag
						selected={selectedPrice?.id === price.id}
						onClick={() => onPriceSelect(price)}
					>
						<Price
							suppressContentEditableWarning
							contentEditable={price.type === "custom"}
							onKeyDown={onKeyDown}
						>{`${price.price || ""}`}</Price>
						{"€"}
					</Tag>
				))}
			</Container>
		</div>
	);
};
