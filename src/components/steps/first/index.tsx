import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { nextStep, setShelter } from "../../../redux/slices/app";
import { EHelpType, IShelter } from "../../../types";
import { Button } from "../../button";
import { Dropdown } from "../../dropdown";
import { HelpSelector } from "../../help-selector";
import { PriceSelect } from "../../price-select";

interface Props {
	allShelters: IShelter[];
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const ButtonHolder = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 64px;
`;

export const FirstStep: React.FC<Props> = ({ allShelters }) => {
	const dispatch = useAppDispatch();
	const { selectedShelter, helpType, selectedPrice } = useAppSelector(
		(state) => state.app
	);

	console.log(selectedPrice);

	const canGoNext = useAppSelector(({ app }) => {
		return (
			!!app.selectedPrice &&
			(app.helpType === EHelpType.SHELTER ? !!app.selectedShelter : true) &&
			(selectedPrice?.type === "custom"
				? selectedPrice.value !== undefined
				: true)
		);
	});

	return (
		<Container>
			<h1>Vyberte si možnosť, ako chcete pomôcť</h1>
			<HelpSelector />
			<Dropdown
				data={allShelters}
				onSelect={(val) => dispatch(setShelter(val))}
				selectedValue={selectedShelter}
				placeholder={"Vyberte útulok zo zoznamu"}
				dropdownTitle={"Útulok"}
				title={"O projekte"}
				required={helpType === EHelpType.SHELTER}
			/>
			<PriceSelect />
			<ButtonHolder>
				<Button
					disabled={!canGoNext}
					variant="primary"
					title="Pokračovať"
					onClick={() => dispatch(nextStep({}))}
				/>
			</ButtonHolder>
		</Container>
	);
};
