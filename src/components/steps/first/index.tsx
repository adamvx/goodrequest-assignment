import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { nextStep, setPrice, setShelter } from "../../../redux/slices/app";
import { EHelpType, IShelter } from "../../../types";
import { Button } from "../../button";
import { Dropdown } from "../../dropdown";
import { PriceSelect } from "../../price-select";
import { ShelterSelector } from "../../shelter-selector";

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
	const { selectedShelter, selectedPrice } = useAppSelector(
		(state) => state.app
	);

	const canGoNext = useAppSelector(({ app }) => {
		return (
			!!app.selectedPrice &&
			(app.helpType === EHelpType.SHELTER ? !!app.selectedShelter : true)
		);
	});

	return (
		<Container>
			<h1>Vyberte si možnosť, ako chcete pomôcť</h1>
			<ShelterSelector />
			<Dropdown
				data={allShelters}
				onSelect={(val) => dispatch(setShelter(val))}
				selectedValue={selectedShelter}
				placeholder={"Vyberte útulok zo zoznamu"}
			/>

			<PriceSelect
				onPriceSelect={(val) => dispatch(setPrice(val))}
				selectedPrice={selectedPrice}
			/>
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
