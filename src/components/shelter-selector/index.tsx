import React from "react";
import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Paw, Wallet } from "../../Icons";
import { setHelpType } from "../../redux/slices/app";
import { EHelpType } from "../../types";

interface Props {}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	border-radius: 24px;
	border: 1px solid #c4794f;
	overflow: hidden;
`;

const Item = styled.div<{ selected: boolean }>(({ selected }) => {
	return css`
		flex: 1;
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		cursor: pointer;
		color: ${selected ? "white" : "#585757"};
		background: ${selected
			? "linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%);"
			: "#faf9f9"};

		span {
			font-weight: 600;
		}

		.icon {
			color: ${selected ? "white" : "#9F9F9F"};
		}
	`;
});

const IconHolder = styled.div`
	display: flex;
	padding: 16px;
	border-radius: 50%;
	width: 32px;
	height: 32px;
	background-color: rgba(47, 47, 47, 0.16);
`;

export const ShelterSelector: React.FC<Props> = () => {
	const { helpType } = useAppSelector((state) => state.app);
	const dispatch = useAppDispatch();

	return (
		<Container>
			<Item
				selected={helpType === EHelpType.SHELTER}
				onClick={() => dispatch(setHelpType(EHelpType.SHELTER))}
			>
				<IconHolder>
					<Wallet width={32} height={32} className="icon" />
				</IconHolder>
				<span>Chcem finančne prispieť konkrétnemu útulku</span>
			</Item>
			<Item
				selected={helpType === EHelpType.NADATION}
				onClick={() => dispatch(setHelpType(EHelpType.NADATION))}
			>
				<IconHolder>
					<Paw width={32} height={32} className="icon" />
				</IconHolder>
				<span>Chcem finančne prispieť celej nadácii</span>
			</Item>
		</Container>
	);
};
