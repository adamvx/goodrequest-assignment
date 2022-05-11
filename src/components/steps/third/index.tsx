import React from "react";
import styled from "styled-components";
import { api } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { previousStep, setTerms } from "../../../redux/slices/app";
import { EHelpType, IApiPostResponse } from "../../../types";
import { Button } from "../../button";
import { Checkbox } from "../../checkbox";

interface Props {}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const OptionHeading = styled.h5`
	margin: 0;
	margin-bottom: 8px;
	font-size: 14px;
`;

const ButtonHolder = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 64px;
`;

const CheckboxContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-top: 48px;
`;

export const ThirdStep: React.FC<Props> = () => {
	const dispatch = useAppDispatch();
	const { helpType, selectedShelter, selectedPrice, user, terms } =
		useAppSelector((state) => state.app);

	const onSend = () => {
		const sendData = {
			firstName: user?.firstName,
			lastName: user?.lastName,
			email: user?.email,
			phone: user?.phone,
			value: selectedPrice?.price,
			shelterID: selectedShelter?.id,
		};
		api.v1
			.post<IApiPostResponse>("shelters/contribute", sendData)
			.then((res) => {
				console.log(res);
			})
			.catch(console.log);
	};

	return (
		<Container>
			<h1>Skontrolujte si zadané údaje</h1>
			<div>
				<OptionHeading>Akou formou chcem pomôcť</OptionHeading>
				<span>
					{helpType === EHelpType.NADATION
						? "Chcem finančne prispieť celej nadácii"
						: "Chcem finančne prispieť konkrétnemu útulku"}
				</span>
			</div>
			<div>
				<OptionHeading>Najviac mi záleží na</OptionHeading>
				<span>{selectedShelter?.name || "-"}</span>
			</div>
			<div>
				<OptionHeading>Suma ktorou chcem prispieť</OptionHeading>
				<span>{`${selectedPrice?.price} €`}</span>
			</div>
			<div>
				<OptionHeading>Meno a priezvisko</OptionHeading>
				<span>{`${user?.firstName} ${user?.lastName}`}</span>
			</div>
			<div>
				<OptionHeading>E-mailová adresa</OptionHeading>
				<span>{user?.email}</span>
			</div>
			<div>
				<OptionHeading>Telefónne číslo</OptionHeading>
				<span>{user?.phone}</span>
			</div>
			<CheckboxContainer>
				<Checkbox checked={terms} onClick={() => dispatch(setTerms(!terms))} />
				<span>Súhlasím so spracovaním mojich osobných údajov</span>
			</CheckboxContainer>
			<ButtonHolder>
				<Button
					variant="secondary"
					title="Späť"
					onClick={() => dispatch(previousStep({}))}
				/>
				<Button
					variant="primary"
					disabled={!terms}
					title="Odoslať formulár"
					onClick={() => {
						onSend();
					}}
				/>
			</ButtonHolder>
		</Container>
	);
};
