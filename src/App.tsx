import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "./api";
import { Button } from "./components/button";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Stepper } from "./components/stepper";
import { FirstStep } from "./components/steps/first";
import { Wrapper } from "./components/wrapper";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { nextStep } from "./redux/slices/app";
import { EHelpType, IShelter } from "./types";

const Main = styled.main`
	padding: 64px;
	display: flex;
	gap: 64px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 64px;
`;

const App: React.FC = () => {
	const [allShelters, setAllShelters] = useState<IShelter[]>([]);
	const dispatch = useAppDispatch();
	const activeStep = useAppSelector((state) => state.app.currentStep);
	const canGoNext = useAppSelector(({ app }) => {
		if (app.currentStep === 0) {
			return (
				!!app.selectedPrice &&
				(app.helpType === EHelpType.SHELTER ? !!app.selectedShelter : true)
			);
		} else if (app.currentStep === 1) {
			return true;
		} else if (app.currentStep === 2) {
			return true;
		} else {
			return false;
		}
	});
	const canGoBack = useAppSelector((state) => state.app.currentStep > 0);

	useEffect(() => {
		api.v1
			.get<{ shelters: IShelter[] }>("shelters")
			.then((res) => setAllShelters(res.data.shelters))
			.catch(console.log);
	});

	return (
		<div>
			<Header />
			<Wrapper>
				<Main>
					<Content>
						<Stepper stepCount={3} activeStep={activeStep} />
						<FirstStep allShelters={allShelters} />
						<Buttons>
							{canGoBack ? <Button type="secondary" title="Späť" /> : <div />}
							<Button
								disabled={!canGoNext}
								type="primary"
								title="Pokračovať"
								onClick={() => dispatch(nextStep({}))}
							/>
						</Buttons>
					</Content>
					<img
						src="/dogmask.png"
						style={{ objectFit: "contain" }}
						alt="Dog drinking water"
					/>
				</Main>
			</Wrapper>
			<Footer />
		</div>
	);
};

export default App;
