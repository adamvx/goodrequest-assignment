import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setPrice } from "../../redux/slices/app";
import { IPrice } from "../../types";

interface Props {
	price: IPrice;
}

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

export const PriceTag: React.FC<Props> = ({ price }) => {
	const dispatch = useAppDispatch();
	const selectedPrice = useAppSelector((state) => state.app.selectedPrice);

	const [value, setValue] = useState(price.value);

	const onKeyDown = (ev: React.KeyboardEvent<HTMLSpanElement>) => {
		const allowList = [8, 37, 38, 39, 40];
		if (!allowList.includes(ev.keyCode) && !ev.key.match(/^[0-9]/g)) {
			ev.preventDefault();
		}
	};

	const onChange = (ev: React.FormEvent<HTMLSpanElement>) => {
		const text = ev.currentTarget.textContent;
		if (text && !isNaN(parseInt(text))) {
			setValue(parseInt(text));
			dispatch(setPrice({ ...price, value: parseInt(text) }));
		} else {
			setValue(undefined);
			dispatch(setPrice({ ...price, value: undefined }));
		}
	};

	return (
		<Tag
			selected={selectedPrice?.id === price.id}
			onClick={() => dispatch(setPrice({ ...price, value: value }))}
		>
			<Price
				suppressContentEditableWarning
				contentEditable={price.type === "custom"}
				onKeyDown={onKeyDown}
				onInput={onChange}
			>{`${price.value || ""}`}</Price>
			{"€"}
		</Tag>
	);
};
